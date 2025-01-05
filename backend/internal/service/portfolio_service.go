package service

import (
	"context"
	"database/sql"
	"log"
	"net/http"

	"github.com/go-playground/validator/v10"
	"github.com/iqbalsonata30/personal-website/backend/internal/helper"
	"github.com/iqbalsonata30/personal-website/backend/internal/model/domain"
	"github.com/iqbalsonata30/personal-website/backend/internal/model/web"
	"github.com/iqbalsonata30/personal-website/backend/internal/repository"
)

type PortfolioService struct {
	Repository repository.PortfolioRepository
	DB         *sql.DB
	Validate   *validator.Validate
}

func NewPortfolioService(db *sql.DB, repository repository.PortfolioRepository, validator *validator.Validate) *PortfolioService {
	return &PortfolioService{
		Repository: repository,
		DB:         db,
		Validate:   validator,
	}
}

func (p *PortfolioService) Create(ctx context.Context, req web.PortfolioRequest, r *http.Request) error {
	if err := p.Validate.StructExcept(req, "ImageUrl"); err != nil {
		return err
	}

	imgUrl, err := helper.UploadImage(r, "imageUrl")
	if err != nil {
		return err
	}
	req.ImageUrl = imgUrl

	if err := p.Validate.Struct(req); err != nil {
		return err
	}

	portfolio := domain.Project{
		Title:       req.Title,
		Description: req.Description,
		ImageUrl:    req.ImageUrl,
		ProjectUrl:  req.ProjectUrl,
	}

	techStack := domain.Stack{
		Technology: req.TechStack,
	}

	tx, err := p.DB.Begin()
	if err != nil {
		return err
	}

	err = p.Repository.Save(ctx, tx, portfolio, techStack)
	if err != nil {
		tx.Rollback()
		return err
	}

	if err := tx.Commit(); err != nil {
		log.Println("error to commit saving data: ", err)
		return err
	}
	return nil
}

func (p *PortfolioService) FindAll(ctx context.Context) ([]web.PortfolioResponse, error) {
	tx, err := p.DB.Begin()
	if err != nil {
		return nil, err
	}
	portfolios, err := p.Repository.FindAll(ctx, tx)
	if err != nil {
		tx.Rollback()
		return nil, err
	}

	if err := tx.Commit(); err != nil {
		log.Println("error committed selecting data: ", err)
		return nil, err
	}
	return helper.EntitiesToResponse(portfolios), nil
}
