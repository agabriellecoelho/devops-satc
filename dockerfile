FROM node:20-alpine

WORKDIR /app

COPY . .

WORKDIR /app/controleGastos

RUN NPM INSTALL
RUN NPM Run build

EXPOSE 4173
CMD ["NPM","RUN","PREVIEW"]