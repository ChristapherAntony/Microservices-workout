FROM node:alpine

WORKDIR /server-2
COPY package.json .
RUN npm install --only=prod
COPY . .
EXPOSE 4000

CMD ["npm", "start"]