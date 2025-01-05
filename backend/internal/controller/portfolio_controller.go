package controller

import (
	"net/http"

	"github.com/iqbalsonata30/personal-website/backend/internal/exception"
	"github.com/iqbalsonata30/personal-website/backend/internal/helper"
	"github.com/iqbalsonata30/personal-website/backend/internal/model/web"
	"github.com/iqbalsonata30/personal-website/backend/internal/service"
	"github.com/julienschmidt/httprouter"
)

type PortfolioController struct {
	Service *service.PortfolioService
}

func NewPortfolioController(service *service.PortfolioService) *PortfolioController {
	return &PortfolioController{
		Service: service,
	}
}

func (c *PortfolioController) Create(w http.ResponseWriter, req *http.Request, _ httprouter.Params) {
	request := web.PortfolioRequest{
		Title:       req.FormValue("title"),
		Description: req.FormValue("description"),
		ProjectUrl:  req.FormValue("projectUrl"),
		TechStack:   req.FormValue("techStack"),
	}

	err := c.Service.Create(req.Context(), request, req)
	if err != nil {
		exception.ErrorHandler(w, req, err)
		return
	}

	apiResponse := web.APIResponse{
		StatusCode: http.StatusCreated,
		Message:    "Data has been created succesfully",
	}
	helper.JsonEncode(w, http.StatusCreated, apiResponse)
}

func (c *PortfolioController) FindAll(w http.ResponseWriter, req *http.Request, _ httprouter.Params) {
	projects, err := c.Service.FindAll(req.Context())
	if err != nil {
		exception.ErrorHandler(w, req, err)
		return
	}
	apiResponse := web.DataAPIResponse{
		StatusCode: http.StatusOK,
		Message:    "Find all data has been succesfully",
		Data:       projects,
	}
	helper.JsonEncode(w, http.StatusOK, apiResponse)
}
