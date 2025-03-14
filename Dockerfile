FROM golang:alpine 

LABEL maintaner="iqbalsonata2@gmail.com"
LABEL description="Building image for personal website portfolio"

RUN mkdir -p /var/www/html/

RUN git clone https://gitlab.com/Iqbalsonata30/personal-website.git - production

WORKDIR /var/www/html/personal-website/

EXPOSE 8080

RUN make run-app




