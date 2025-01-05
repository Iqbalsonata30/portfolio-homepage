package repository

import (
	"context"
	"database/sql"
	"log"

	"github.com/iqbalsonata30/personal-website/backend/internal/model/domain"
)

type PortfolioRepository struct{}

func NewPortfolioRepository() PortfolioRepository {
	return PortfolioRepository{}
}

func (r *PortfolioRepository) Save(ctx context.Context, tx *sql.Tx, project domain.Project, stack domain.Stack) error {
	var projectId, stackId int
	queryProject := `INSERT INTO "projects"("title","img_url","description","project_url") VALUES($1,$2,$3,$4)
                  ON CONFLICT("project_url") DO UPDATE SET "project_url"=excluded."project_url"
                  RETURNING "id";
                  `
	err := tx.QueryRowContext(ctx, queryProject, project.Title, project.ImageUrl, project.Description, project.ProjectUrl).Scan(&projectId)
	if err != nil {
		log.Println("error inserted projects : ", err)
		return err
	}

	queryStack := `INSERT INTO "stacks"("technology") VALUES ($1)
                 ON CONFLICT("technology") DO UPDATE SET "technology"=excluded."technology"
                 RETURNING "id";
                `
	err = tx.QueryRowContext(ctx, queryStack, stack.Technology).Scan(&stackId)
	if err != nil {
		log.Println("error inserted stacks : ", err)
		return err
	}

	query := `INSERT OR IGNORE INTO "stack_used"("project_id","stack_id") VALUES ($1,$2)`
	_, err = tx.ExecContext(ctx, query, projectId, stackId)
	if err != nil {
		log.Println("error inserted stack used : ", err)
		return err
	}
	return nil
}

func (r *PortfolioRepository) FindAll(ctx context.Context, tx *sql.Tx) ([]domain.Portfolio, error) {
	query := `SELECT "projects"."id","title",GROUP_CONCAT("technology",', ') as technology,"description","img_url","project_url" FROM "projects" 
            JOIN "stack_used" ON "projects"."id" = "stack_used"."project_id" 
            JOIN "stacks" ON "stack_used"."stack_id" = "stacks"."id"
            GROUP BY "projects"."id", "projects"."project_url"
           `
	rows, err := tx.QueryContext(ctx, query)
	if err != nil {
		log.Println("error finding all data : ", err)
		return nil, err
	}

	defer rows.Close()

	var portfolios []domain.Portfolio

	for rows.Next() {
		var portfolio domain.Portfolio
		if err := rows.Scan(&portfolio.ID, &portfolio.Title, &portfolio.TechStack, &portfolio.Description, &portfolio.ImageUrl, &portfolio.ProjectUrl); err != nil {
			log.Println("error scanning data : ", err)
			return nil, err
		}
		portfolios = append(portfolios, portfolio)
	}
	return portfolios, nil
}

func (r *PortfolioRepository) Delete(ctx context.Context, tx *sql.Tx) error {
	return nil
}
