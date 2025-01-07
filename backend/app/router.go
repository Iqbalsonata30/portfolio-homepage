package app

import (
	"database/sql"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	validator "github.com/go-playground/validator/v10"
	"github.com/iqbalsonata30/personal-website/backend/internal/controller"
	"github.com/iqbalsonata30/personal-website/backend/internal/exception"
	"github.com/iqbalsonata30/personal-website/backend/internal/repository"
	"github.com/iqbalsonata30/personal-website/backend/internal/service"
	"github.com/julienschmidt/httprouter"
)

const staticDir = "./frontend/dist"

func NewRouter(db *sql.DB) *httprouter.Router {
	validate := validator.New(validator.WithRequiredStructEnabled())
	repo := repository.NewPortfolioRepository()
	sp := service.NewPortfolioService(db, repo, validate)
	pc := controller.NewPortfolioController(sp)

	router := httprouter.New()

	fs := http.FileServer(http.Dir(staticDir))
	router.ServeFiles("/static/*filepath", http.Dir(staticDir+"/static"))

	router.POST("/api/v1/portfolios", middleware(pc.Create))
	router.GET("/api/v1/portfolios", CORS(pc.FindAll))
	router.DELETE("/api/v1/portfolios/:projectId", middleware(pc.Delete))

	router.MethodNotAllowed = exception.MethodNotAllowedPage()

	router.NotFound = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if strings.HasPrefix(r.URL.Path, "/api/") {
			exception.NotFoundPage().ServeHTTP(w, r)
			return
		}
		path := filepath.Join(staticDir, r.URL.Path)
		_, err := os.Stat(path)
		if os.IsNotExist(err) || err != nil {
			http.ServeFile(w, r, filepath.Join(staticDir, "index.html"))
			return
		}

		fs.ServeHTTP(w, r)
	})

	return router
}
