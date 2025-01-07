package app

import (
	"net/http"
	"strings"

	"github.com/iqbalsonata30/personal-website/backend/helper"
	"github.com/iqbalsonata30/personal-website/backend/internal/exception"
	"github.com/julienschmidt/httprouter"
)

func middleware(handler httprouter.Handle) httprouter.Handle {
	return func(w http.ResponseWriter, req *http.Request, ps httprouter.Params) {
		authHeader := req.Header.Get("Authorization")
		if !strings.HasPrefix(authHeader, "Bearer ") {
			exception.ErrorHandler(w, req, exception.NewUnauthorizedError("Unauthorized"))
			return
		}

		tokenString := strings.TrimPrefix(authHeader, "Bearer ")

		token, err := helper.ValidateToken(tokenString)
		if err != nil {
			exception.ErrorHandler(w, req, exception.NewUnauthorizedError(err.Error()))
			return
		}

		if !token.Valid {
			exception.ErrorHandler(w, req, exception.NewUnauthorizedError("Unauthorized"))
			return
		}
		handler(w, req, ps)
	}
}

func CORS(next httprouter.Handle) httprouter.Handle {
	return func(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusOK)
			return
		}

		next(w, r, ps)
	}
}
