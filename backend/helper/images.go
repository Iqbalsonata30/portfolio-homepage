package helper

import (
	"context"
	"database/sql"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"os"
	"path"
	"path/filepath"

	"cloud.google.com/go/storage"
	"github.com/google/uuid"
)

const (
	MAX_UPLOAD_SIZE = 1024 * 1024
)

func UploadImage(ctx context.Context, req *http.Request, fieldName string) (path string, err error) {
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

	bucketName := os.Getenv("CLOUD_STORAGE_BUCKET")
	client, err := storage.NewClient(ctx)
	if err != nil {
		return
	}
	defer client.Close()

	fileName := uuid.NewString() + filepath.Ext(fileHeader.Filename)

	w := client.Bucket(bucketName).Object(fileName).NewWriter(ctx)
	defer w.Close()

	_, err = io.Copy(w, file)
	if err != nil {
		return
	}

	// NOTICE: store in string is expensive for memory
	objectURL := fmt.Sprintf("https://storage.googleapis.com/%s/%s", bucketName, w.Name)
	return objectURL, nil
}

func ImageExists(ctx context.Context, tx *sql.Tx, projectUrl string) (bool, error) {
	var count int
	query := `SELECT COUNT(*) FROM "projects" WHERE "project_url" = ?`

	if err := tx.QueryRowContext(ctx, query, projectUrl).Scan(&count); err != nil {
		return false, err
	}

	return count > 0, nil
}

func DeleteImage(ctx context.Context, imageName string) error {
	bucketName := os.Getenv("CLOUD_STORAGE_BUCKET")

	client, err := storage.NewClient(ctx)
	if err != nil {
		return err
	}
	defer client.Close()

	err = client.Bucket(bucketName).Object(imageName).Delete(ctx)
	if err != nil {
		return err
	}

	return nil
}

func FindImageUrl(ctx context.Context, tx *sql.Tx, id int) (string, error) {
	var imageURL string
	query := `SELECT "img_url" FROM "projects" WHERE "id" = ?`
	row := tx.QueryRowContext(ctx, query, id)
	err := row.Scan(&imageURL)
	if err != nil {
		return "", err
	}

	parsedUrl, err := url.Parse(imageURL)
	if err != nil {
		return "", err
	}

	return path.Base(parsedUrl.Path), nil
}
