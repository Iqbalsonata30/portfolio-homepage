package web

type ErrorResponse struct {
	StatusCode int `json:"statusCode"`
	Error      any `json:"error"`
}
