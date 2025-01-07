package exception

import (
	"net/http"

	"github.com/iqbalsonata30/personal-website/backend/helper"
	"github.com/iqbalsonata30/personal-website/backend/internal/model/web"
)

type NotFoundError struct {
	Error string
}

func NewNotFoundError(error string) NotFoundError {
	return NotFoundError{Error: error}
}

func NotFoundPage() http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		apiResp := web.ApiError{
			StatusCode: http.StatusNotFound,
			Error:      "404 Page not found",
		}
		helper.JsonEncode(w, http.StatusNotFound, apiResp)
	}
}
