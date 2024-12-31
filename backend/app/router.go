package app

import (
	"database/sql"

	validator "github.com/go-playground/validator/v10"
	"github.com/iqbalsonata30/personal-website/backend/internal/controller"
	"github.com/iqbalsonata30/personal-website/backend/internal/repository"
	"github.com/iqbalsonata30/personal-website/backend/internal/service"
	"github.com/julienschmidt/httprouter"
)

func NewRouter(db *sql.DB) *httprouter.Router {
	validate := validator.New(validator.WithRequiredStructEnabled())
	repo := repository.NewProjectRepository()
	sp := service.NewProjectService(db, repo, validate)
	pc := controller.NewProjectController(sp)

	router := httprouter.New()

	router.POST("/api/v1/portfolio", pc.Create)
	router.GET("/api/v1/portfolio", pc.FindAll)
	return router
}

func ViewRouter() {}
