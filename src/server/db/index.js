import * as mysql from 'mysql';
import log4js from 'log4js';
import CONFIG from '../config';

const connection = mysql.createConnection({
  host: CONFIG.MySql.host,
  user: CONFIG.MySql.user,
  password: CONFIG.MySql.password,
  database: CONFIG.MySql.database
});

const logger = log4js.getLogger(connection);

connection.connect((err) => {
  if (err) {
    logger.error('Connect MySql Failed!', err);
  } else {
    logger.info('Connect MySql Success!');
  }
});

export default connection;
