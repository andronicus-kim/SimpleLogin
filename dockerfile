FROM node:carbon

# Install  Mongodb
RUN apt-get update -y
RUN apt-get install mongodb -y
RUN mkdir -p /data/db/
RUN chown `id -u` /data/db
RUN /etc/init.d/mongodb start

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8608

CMD [ "npm", "start" ]