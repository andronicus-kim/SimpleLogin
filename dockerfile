FROM ubuntu:xenial

RUN echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.0.list

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4

RUN apt-get update && apt-get install -y mongodb-org

RUN apt-get install nodejs  npm -y

RUN systemctl enable mongod.service

RUN systemctl start mongod.service