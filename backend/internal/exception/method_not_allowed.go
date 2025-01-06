package exception

import (
	"net/http"

	"github.com/iqbalsonata30/personal-website/backend/internal/helper"
	"github.com/iqbalsonata30/personal-website/backend/internal/model/web"
)

type MethodNotAllowed struct {
	Error string
}

func MethodNotAllowedPage() http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		apiResp := web.ApiError{
			StatusCode: http.StatusMethodNotAllowed,
			Error:      "405 Method not allowed.",
		}
		helper.JsonEncode(w, http.StatusMethodNotAllowed, apiResp)
	}
}
