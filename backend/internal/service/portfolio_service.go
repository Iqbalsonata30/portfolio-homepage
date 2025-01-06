package service

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"strconv"
	"strings"

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
	tx, err := p.DB.Begin()
	if err != nil {
		return err
	}

	if err := p.Validate.StructExcept(req, "ImageUrl"); err != nil {
		return err
	}

	exists, err := helper.ImageExists(ctx, tx, req.ProjectUrl)
	if err != nil {
		tx.Rollback()
		return err
	}

	if !exists {
		imgUrl, err := helper.UploadImage(ctx, r, "imageUrl")
		if err != nil {
			fmt.Println("error upload image :", err)
			return err
		}
		req.ImageUrl = imgUrl

		if err := p.Validate.Struct(req); err != nil {
			return err
		}

	}

	portfolio := domain.Project{
		Title:       req.Title,
		Description: req.Description,
		ImageUrl:    req.ImageUrl,
		ProjectUrl:  req.ProjectUrl,
	}

	techStack := domain.Stack{
		Technology: strings.ToLower(req.TechStack),
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

func (p *PortfolioService) Delete(ctx context.Context, id string) error {
	parseId, _ := strconv.Atoi(id)

	tx, err := p.DB.Begin()
	if err != nil {
		return err
	}

	imgName, err := helper.FindImageUrl(ctx, tx, parseId)
	if err != nil {
		return err
	}

	err = helper.DeleteImage(ctx, imgName)
	if err != nil {
		tx.Rollback()
		return err
	}

	err = p.Repository.Delete(ctx, tx, parseId)
	if err != nil {
		tx.Rollback()
		return err
	}

	if err := tx.Commit(); err != nil {
		return err
	}

	return nil
}
