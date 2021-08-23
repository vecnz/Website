FROM node:15
RUN mkdir -p /code
WORKDIR /code
ADD . /code
RUN yarn
CMD [ "yarn", "start" ]
EXPOSE 3000
