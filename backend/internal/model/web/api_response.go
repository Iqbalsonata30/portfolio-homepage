package web

type APIResponse struct {
	StatusCode int    `json:"statusCode"`
	Message    string `json:"message"`
}

type DataAPIResponse struct {
	StatusCode int    `json:"statusCode"`
	Message    string `json:"message"`
	Data       any    `json:"data"`
}
