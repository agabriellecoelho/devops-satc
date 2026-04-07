FROM node:20-alpine

WORKDIR /app

COPY . .

WORKDIR /app/controleGastos

RUN npm install \
&& npm run build

EXPOSE 4173
CMD ["npm", "run","preview"]
