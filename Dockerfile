FROM node:20-alpine

WORKDIR /app

COPY . ./

RUN npm install
RUN npx next build

CMD ["npx", "next", "start"]