build-frontend:
	@cd frontend && npm run build

build-app: 
	@go CGO_ENABLED=0 GOOS=linux go build -a installsuffix cgo -o bin/portfolio cmd/main.go

build-completely: build-frontend build-app

run-app: build-frontend build-app
	@./bin/portfolio
