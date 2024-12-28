package controller

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/iqbalsonata30/personal-website/backend/internal/model/web"
	"github.com/iqbalsonata30/personal-website/backend/internal/service"
	"github.com/iqbalsonata30/personal-website/utils"
)

type PortfolioController struct {
	Service *service.PortfolioService
}

func (c *PortfolioController) Create(w http.ResponseWriter, req *http.Request) {
	request := web.PortfolioRequest{}
	err := json.NewDecoder(req.Body).Decode(&request)
	if err != nil {
		log.Fatal("error decode request :", err)
	}

	err = c.Service.Create(req.Context(), request)
	if err != nil {
		errResponse := web.ErrorResponse{
			StatusCode: http.StatusBadRequest,
			Error:      err,
		}
		utils.JsonEncode(w, http.StatusCreated, errResponse)

	}
	apiResponse := web.ApiResponse{
		StatusCode: http.StatusCreated,
		Message:    "Data has been created succesfully",
	}
	utils.JsonEncode(w, http.StatusCreated, apiResponse)
}
