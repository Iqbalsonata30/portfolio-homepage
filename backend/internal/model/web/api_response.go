package web

type ApiResponse struct {
	StatusCode int    `json:"statusCode"`
	Message    string `json:"message"`
}
