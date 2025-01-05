package helper

import (
	"context"
	"database/sql"
	"io"
	"net/http"
	"os"
	"path/filepath"
)

const (
	SAVE_PATH       = "frontend/public/assets/img/"
	MAX_UPLOAD_SIZE = 1024 * 1024
)

func UploadImage(req *http.Request, fieldName string) (path string, err error) {
	if err = req.ParseMultipartForm(MAX_UPLOAD_SIZE); err != nil {
		return
	}

	file, fileHeader, err := req.FormFile(fieldName)
	if err != nil {
		return
	}
	defer file.Close()

	buffer := make([]byte, 2048)
	_, err = file.Read(buffer)
	if err != nil {
		return
	}

	file.Seek(0, 0)

	fileType := http.DetectContentType(buffer)
	if fileType != "image/jpeg" && fileType != "image/png" {
		return
	}
	tempFile, err := os.CreateTemp(filepath.Dir(SAVE_PATH), "img-*"+filepath.Ext(fileHeader.Filename))
	if err != nil {
		return
	}
	defer tempFile.Close()

	_, err = io.Copy(tempFile, file)
	if err != nil {
		return
	}

	return filepath.Base(tempFile.Name()), nil
}

func ImageExists(ctx context.Context, tx *sql.Tx, projectUrl string) (bool, error) {
	var count int
	query := `SELECT COUNT(*) FROM "projects" WHERE "project_url" = ?`

	if err := tx.QueryRowContext(ctx, query, projectUrl).Scan(&count); err != nil {
		return false, err
	}

	return count > 0, nil
}
