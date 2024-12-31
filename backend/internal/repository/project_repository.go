package repository

import (
	"context"
	"database/sql"

	"github.com/iqbalsonata30/personal-website/backend/internal/model/domain"
)

type ProjectRepository struct{}

func NewProjectRepository() ProjectRepository {
	return ProjectRepository{}
}

func (r *ProjectRepository) Save(ctx context.Context, tx *sql.Tx, portfolio domain.Project) error {
	query := `INSERT INTO "projects"("title","img_url","description","project_url") VALUES($1,$2,$3,$4)`
	_, err := tx.ExecContext(ctx, query, portfolio.Title, portfolio.ImageUrl, portfolio.Description, portfolio.ProjectUrl)
	if err != nil {
		return err
	}
	return nil
}

func (r *ProjectRepository) FindAll(ctx context.Context, tx *sql.Tx) ([]domain.Project, error) {
	query := `SELECT "id","title","description","project_url","img_url" FROM "projects";`
	rows, err := tx.QueryContext(ctx, query)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	var projects []domain.Project

	for rows.Next() {
		var project domain.Project
		if err := rows.Scan(&project.ID, &project.Title, &project.Description, &project.ProjectUrl, &project.ImageUrl); err != nil {
			return nil, err
		}
		projects = append(projects, project)
	}
	return projects, nil
}
