FROM node:24-alpine

WORKDIR /app

RUN apk add --no-cache zip git bash python3


COPY package*.json .

RUN npm install && \
    npm cache clean --force

COPY . .

CMD ["npm", "run", "watch"]
