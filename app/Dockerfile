FROM node:10-alpine as build
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
RUN mkdir -p /var/www/despesamanager/node_modules && chown -R nginx:nginx /var/www/despesamanager
WORKDIR /var/www/despesamanager
EXPOSE 4200
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/despesamanager