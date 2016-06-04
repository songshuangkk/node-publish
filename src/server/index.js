import koa from 'koa';
import log4js from 'log4js';
import render from 'koa-ejs';
import server from 'koa-static';
import bodyParser from 'koa-bodyparser';

import path from 'path';

import CONFIG from './config';
import router from './router/index';

const app = koa();
const logger = log4js.getLogger(app);
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

app.use(server(path.join(__dirname, '../../bundle')));

app.use(router.routes());

app.listen(CONFIG.port, () => {
  logger.info('The server started at the port['+ CONFIG.port + ']');
});

export default app;
