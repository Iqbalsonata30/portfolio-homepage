FROM golang:alpine 

LABEL maintaner="iqbalsonata2@gmail.com"
LABEL description="Building image for personal website portfolio"

RUN mkdir -p /var/www/html/


COPY . /var/www/html/personal-web

WORKDIR /var/www/html/

RUN make build-completely

EXPOSE 8080

CMD ["./bin/main"]


