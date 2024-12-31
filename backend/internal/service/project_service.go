package service

import (
	"context"
	"database/sql"
	"log"

	"github.com/go-playground/validator/v10"
	"github.com/iqbalsonata30/personal-website/backend/internal/helper"
	"github.com/iqbalsonata30/personal-website/backend/internal/model/domain"
	"github.com/iqbalsonata30/personal-website/backend/internal/model/web"
	"github.com/iqbalsonata30/personal-website/backend/internal/repository"
)

type ProjectService struct {
	Repository repository.ProjectRepository
	DB         *sql.DB
	Validate   *validator.Validate
}

func NewProjectService(db *sql.DB, repository repository.ProjectRepository, validator *validator.Validate) *ProjectService {
	return &ProjectService{
		Repository: repository,
		DB:         db,
		Validate:   validator,
	}
}

func (p *ProjectService) Create(ctx context.Context, req web.ProjectRequest) error {
	err := p.Validate.Struct(req)
	if err != nil {
		return err
	}

	portfolio := domain.Project{
		Title:       req.Title,
		Description: req.Description,
		ImageUrl:    req.ImageUrl,
		ProjectUrl:  req.ProjectUrl,
	}

	tx, err := p.DB.Begin()
	if err != nil {
		return err
	}

	err = p.Repository.Save(ctx, tx, portfolio)
	if err != nil {
		tx.Rollback()
		return err
	}

	if err := tx.Commit(); err != nil {
		log.Println("error committed creating data: ", err)
		return err
	}
	return nil
}

func (p *ProjectService) FindAll(ctx context.Context) ([]web.ProjectResponse, error) {
	tx, err := p.DB.Begin()
	if err != nil {
		return nil, err
	}
	projects, err := p.Repository.FindAll(ctx, tx)
	if err != nil {
		tx.Rollback()
		return nil, err
	}

	if err := tx.Commit(); err != nil {
		log.Println("error committed selecting data: ", err)
		return nil, err
	}

	return helper.EntitiesToResponse(projects), nil
}
