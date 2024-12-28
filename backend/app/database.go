package app

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

type SQLite struct {
	DB *sql.DB
}

func NewSQLite() (*SQLite, error) {
	db, err := sql.Open("sqlite3", "sql/apps.db")
	if err != nil {
		return nil, err
	}

	if err := db.Ping(); err != nil {
		return nil, err
	}

	return &SQLite{
		DB: db,
	}, nil
}
