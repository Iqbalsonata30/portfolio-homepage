package exception

import (
	"net/http"

	"github.com/go-playground/validator/v10"
	"github.com/iqbalsonata30/personal-website/backend/internal/helper"
	"github.com/iqbalsonata30/personal-website/backend/internal/model/web"
)

func ErrorHandler(w http.ResponseWriter, req *http.Request, err any) {
	if validationError(w, req, err) {
		return
	}

	internalError(w, req, err)
}

func validationError(w http.ResponseWriter, req *http.Request, err any) bool {
	exception, ok := err.(validator.ValidationErrors)
	if ok {
		out := make([]web.Error, len(exception))
		for i, fe := range exception {
			out[i] = web.Error{
				Field:   fe.Field(),
				Message: fe.Tag(),
			}
		}
		apiResp := web.ApiError{
			StatusCode: http.StatusBadRequest,
			Error:      out,
		}
		helper.JsonEncode(w, http.StatusBadRequest, apiResp)
	}

	return ok
}

func internalError(w http.ResponseWriter, req *http.Request, err any) {
	apiResp := web.ApiError{
		StatusCode: http.StatusInternalServerError,
		Error:      err,
	}
	helper.JsonEncode(w, http.StatusInternalServerError, apiResp)
}
