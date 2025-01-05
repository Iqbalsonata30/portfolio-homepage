package helper

import (
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

func UploadImage(req *http.Request, fieldName string) (path string, err error) {
	savePath := "frontend/public/assets/img/"

	file, fileHeader, err := req.FormFile(fieldName)
	if err != nil {
		log.Println("Error in uploading Image : ", err)
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
	tempFile, err := os.CreateTemp(savePath, "img-*"+filepath.Ext(fileHeader.Filename))
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
