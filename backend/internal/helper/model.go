package helper

import (
	"github.com/iqbalsonata30/personal-website/backend/internal/model/domain"
	"github.com/iqbalsonata30/personal-website/backend/internal/model/web"
)

func EntityToResponse(portfolio domain.Portfolio) web.PortfolioResponse {
	return web.PortfolioResponse{
		ID:          portfolio.ID,
		Title:       portfolio.Title,
		TechStack:   portfolio.TechStack,
		Description: portfolio.Description,
		ProjectUrl:  portfolio.ProjectUrl,
		ImageUrl:    portfolio.ImageUrl,
	}
}

func EntitiesToResponse(portfolios []domain.Portfolio) []web.PortfolioResponse {
	portfolioResponse := make([]web.PortfolioResponse, 0)

	for _, portfolio := range portfolios {
		portfolioResponse = append(portfolioResponse, EntityToResponse(portfolio))
	}
	return portfolioResponse
}
