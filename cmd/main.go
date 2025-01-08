package main

import (
	"fmt"
	"log"
	"net/http"
	"path/filepath"

	"github.com/iqbalsonata30/personal-website/backend/app"
	"github.com/iqbalsonata30/personal-website/backend/helper"
	"github.com/iqbalsonata30/personal-website/utils"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load(filepath.Join("./", ".env"))
	if err != nil {
		log.Fatal("Error loading .env file : ", err)
	}

	err = utils.SetLogger()
	if err != nil {
		log.Fatal("log file error : ", err)
	}
	sqlite, err := app.NewSQLite()
	if err != nil {
		log.Fatal("error setup database : ", err)
	}
	defer sqlite.DB.Close()

	token, err := helper.CreateToken()
	if err != nil {
		log.Fatal("error create token", err)
	}

	fmt.Println("JWT TOKEN :", token)
	router := app.NewRouter(sqlite.DB)

	fmt.Println("Server starting on localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", router))
}
