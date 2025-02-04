package web

type ErrorResponse struct {
	StatusCode int `json:"statusCode"`
	Error      any `json:"error"`
}

type Error struct {
	Field   string `json:"field"`
	Message any    `json:"message"`
}

type ApiError struct {
	StatusCode int `json:"statusCode"`
	Error      any `json:"error"`
}
