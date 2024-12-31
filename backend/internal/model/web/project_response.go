package web

type ProjectResponse struct {
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	ProjectUrl  string `json:"projectUrl"`
	ImageUrl    string `json:"imageUrl"`
}
