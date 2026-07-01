FROM node:24-alpine

WORKDIR /var/www/html

RUN apk update && apk add --no-cache \
        zip \
        git \
        bash \
        python3

CMD ["npm", "run", "watch"]
