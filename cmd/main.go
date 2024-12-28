package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"

	"github.com/iqbalsonata30/personal-website/backend/app"
	"github.com/iqbalsonata30/personal-website/utils"
)

const staticDir = "./frontend/dist"

func main() {
	err := utils.SetLogger()
	if err != nil {
		log.Fatal("log file error : ", err)
	}

	sqlite, err := app.NewSQLite()
	fmt.Println(sqlite)

	if err != nil {
		log.Fatal("error sqlite ", err)
	}

	fs := http.FileServer(http.Dir(staticDir))
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir(filepath.Join(staticDir, "static")))))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		path := filepath.Join(staticDir, r.URL.Path)
		_, err := os.Stat(path)
		if os.IsNotExist(err) || err != nil {
			http.ServeFile(w, r, filepath.Join(staticDir, "index.html"))
			return
		}
		fs.ServeHTTP(w, r)
	})

	fmt.Println("Server starting on localhost:8080")
	http.ListenAndServe(":8080", nil)
}
