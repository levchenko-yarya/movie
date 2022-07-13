FROM node:14-alpine

WORKDIR /server

COPY package*.json ./

RUN npm install


COPY . .

#RUN npx sequelize-cli db:seed:all

EXPOSE 3000

CMD ["node", "app.js"]