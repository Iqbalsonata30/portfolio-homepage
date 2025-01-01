package web

type PortfolioResponse struct {
	ID          int    `json:"id"`
	Title       string `json:"title"`
	TechStack   string `json:"techStack"`
	Description string `json:"description"`
	ProjectUrl  string `json:"projectUrl"`
	ImageUrl    string `json:"imageUrl"`
}
