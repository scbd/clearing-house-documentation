FROM node:20-alpine

WORKDIR /app

RUN npm init -y && npm install express && npm pkg set type=module

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
