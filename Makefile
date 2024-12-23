build-views:
	@cd views && npm run build

build-app: 
	@go build -o bin/portfolio main.go


run-app: build-app
	@./bin/portfolio
