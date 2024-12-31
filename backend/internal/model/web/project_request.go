package web

type ProjectRequest struct {
	Title       string `json:"title" validate:"required"`
	Description string `json:"description" validate:"required"`
	ProjectUrl  string `json:"projectUrl" validate:"required,url"`
	ImageUrl    string `json:"imageUrl" validate:"required"`
}
