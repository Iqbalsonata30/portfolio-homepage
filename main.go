package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/iqbalsonata30/personal-website/backend/app"
	"github.com/iqbalsonata30/personal-website/utils"
)

func main() {
	err := utils.SetLogger()
	if err != nil {
		log.Fatal("log file error : ", err)
	}
	sqlite, err := app.NewSQLite()
	if err != nil {
		log.Fatal("error setup database : ", err)
	}

	router := app.NewRouter(sqlite.DB)

	fmt.Println("Server starting on localhost:8080")
	http.ListenAndServe(":8080", router)
}
