FROM node
WORKDIR /opt/node_app
COPY package*.json ./
RUN npm install --no-optional && npm cache clean --force
ENV PATH /opt/node_app/node_modules/.bin:$PATH
WORKDIR /opt/node_app/app
COPY . .
EXPOSE 3299

CMD npm start
