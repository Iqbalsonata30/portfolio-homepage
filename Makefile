build-frontend:
	@cd frontend && npm run build

build-app: 
	@go build -o bin/portfolio cmd/main.go

build-completely: build-frontend build-app

run-app: build-frontend build-app
	@./bin/portfolio
