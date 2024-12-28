package web

type PortfolioRequest struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	ProjectUrl  string `json:"projectUrl"`
	ImageUrl    string `json:"imgUrl"`
}
