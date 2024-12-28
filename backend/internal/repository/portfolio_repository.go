package repository

import (
	"context"
	"database/sql"

	"github.com/iqbalsonata30/personal-website/backend/internal/model/domain"
)

type PortfolioRepository struct{}

func NewPortfolioRepository() PortfolioRepository {
	return PortfolioRepository{}
}

func (r *PortfolioRepository) Save(ctx context.Context, tx *sql.Tx, portfolio domain.Portfolio) error {
	query := `INSERT INTO "projects"("title","img_url","description","project_url") VALUES($1,$2,$3,$4)`
	_, err := tx.ExecContext(ctx, query, portfolio.Title, portfolio.ImageUrl, portfolio.Description, portfolio.ProjectUrl)
	if err != nil {
		return err
	}
	return nil
}
