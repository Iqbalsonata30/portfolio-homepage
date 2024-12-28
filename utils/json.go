package utils

import (
	"encoding/json"
	"log"
	"net/http"
)

func JsonEncode(w http.ResponseWriter, code int, val any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(code)
	err := json.NewEncoder(w).Encode(val)
	if err != nil {
		log.Fatal(err)
	}
}
