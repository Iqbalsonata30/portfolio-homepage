package web

type PortfolioRequest struct {
	Title       string `json:"title" validate:"required"`
	TechStack   string `json:"techStack" validate:"required"`
	Description string `json:"description" validate:"required"`
	ProjectUrl  string `json:"projectUrl" validate:"required,url"`
	ImageUrl    string `json:"imageUrl" validate:"required"`
}
