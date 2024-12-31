package helper

import (
	"github.com/iqbalsonata30/personal-website/backend/internal/model/domain"
	"github.com/iqbalsonata30/personal-website/backend/internal/model/web"
)

func EntityToResponse(project domain.Project) web.ProjectResponse {
	return web.ProjectResponse{
		ID:          project.ID,
		Title:       project.Title,
		Description: project.Description,
		ProjectUrl:  project.ImageUrl,
		ImageUrl:    project.ImageUrl,
	}
}

func EntitiesToResponse(projects []domain.Project) []web.ProjectResponse {
	projectResponse := make([]web.ProjectResponse, 0)

	for _, project := range projects {
		projectResponse = append(projectResponse, EntityToResponse(project))
	}
	return projectResponse
}
