package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/iqbalsonata30/personal-website/backend/app"
	"github.com/iqbalsonata30/personal-website/utils"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file : ")
	}

	err = utils.SetLogger()
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
