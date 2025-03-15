FROM node:23-alpine AS fe-builder
RUN mkdir -p /app
WORKDIR /app
COPY frontend /app
RUN npm run build


FROM golang:alpine AS builder
RUN mkdir -p /app
COPY . /app
WORKDIR /app
COPY --from=fe-builder /app/dist .
RUN CGO_ENABLED=0 GOOS=linux go build -o bin/portfolio cmd/main.go


# Final Image
FROM alpine:latest
LABEL maintaner="iqbalsonata2@gmail.com"
LABEL description="Building image for personal website portfolio"
RUN apk add curl
RUN apk --no-cache add ca-certificates tzdata \
    && cp /usr/share/zoneinfo/Asia/Jakarta /etc/localtime \
    && mkdir -p /var/www/html/personal-webiste
WORKDIR /var/www/html/personal-website
COPY --from=builder /app/bin/portfolio .
EXPOSE 8080
CMD ["./portfolio"]







