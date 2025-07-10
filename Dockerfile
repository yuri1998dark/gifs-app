# Dockerfile

# Etapa 1: build de la app Angular
FROM node:20-alpine as builder
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
RUN npm install
RUN ng build --configuration production

# Etapa 2: servidor NGINX para servir la app
FROM nginx:alpine
COPY --from=builder /app/dist/* /usr/share/nginx/html
EXPOSE 4567
CMD ["nginx", "-g", "daemon off;"]
