import koa from 'koa';
import log4js from 'log4js';
import render from 'koa-ejs';
import server from 'koa-static';
import bodyParser from 'koa-bodyparser';
import socketIo from 'socket.io';
import http from 'http';

import path from 'path';

import CONFIG from './config';
import router from './router/index';
import socket from './socket';

const app = koa();
const logger = log4js.getLogger(app);
const appServer = http.createServer(app.callback());
// To use middleware
app.use(bodyParser());

render(app, {
  root: path.join(__dirname, '../../', 'bundle'),
  layout: false,
  viewExt: 'html',
  cache: false,
  debug: true,
});
// To connect MySql
require('./db/index');
// To connect Mongodb
require('./mongo/index');
// To connect Redis
require('./redis/index');

app.use(server(path.join(__dirname, '../../bundle')));

app.use(router.routes());

// To use socket.io
const io = socketIo(appServer);

app.use(socket(io));

app.use(function* (next) {
  console.log(22);
  console.log(this.context.socket);
});

appServer.listen(CONFIG.port, () => {
  logger.info('The server started at the port['+ CONFIG.port + ']');
});

export default app;
