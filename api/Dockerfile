FROM node:10-alpine as api_build

RUN mkdir -p /var/www/apidespesamanager/node_modules && chown -R node:node /var/www/apidespesamanager
WORKDIR /var/www/apidespesamanager
USER node
COPY package.json .
RUN npm install
COPY --chown=node:node . .

EXPOSE 5000

CMD [ "npm", "run", "swagger-autogen" ]