package service

import (
	"context"
	"database/sql"

	"github.com/iqbalsonata30/personal-website/backend/internal/model/domain"
	"github.com/iqbalsonata30/personal-website/backend/internal/model/web"
	"github.com/iqbalsonata30/personal-website/backend/internal/repository"
)

type PortfolioService struct {
	Repository repository.PortfolioRepository
	DB         *sql.DB
}

func NewPortfolioService(db *sql.DB, repository repository.PortfolioRepository) *PortfolioService {
	return &PortfolioService{
		Repository: repository,
		DB:         db,
	}
}

func (p *PortfolioService) Create(ctx context.Context, req web.PortfolioRequest) error {
	portfolio := domain.Portfolio{
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
		return err
	}
	return nil
}
