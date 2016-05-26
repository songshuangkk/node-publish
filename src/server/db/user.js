import DB from './index';
import log4js from 'log4js';

class User {
  queryUser(username, password) {
    DB.query('SELECT * FROM user WHERE user_name = ' + username + ' and pwssowrd = ' + password, (err) {
      if (err) {
        logger.error('Query user information error');
      }
    });
  }
}

const user = new User();

const logger = log4js.getLogger(user);

export default user;
