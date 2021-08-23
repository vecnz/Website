FROM node:6.9.5
RUN mkdir -p /code
WORKDIR /code
ADD . /code
RUN npm install -g -s --no-progress yarn && \
    yarn && \
    yarn run build && \
    yarn run prune && \
    yarn cache clean
CMD [ "yarn", "dlx serve -s build" ]
EXPOSE 5000
