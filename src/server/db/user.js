import DB from './index';
import log4js from 'log4js';

class User {
  queryUser(query) {
    return function* (next) {
      DB.query('SELECT * FROM `user` WHERE `user_name` = "' + query.userName + '"', (err, rows, fields)=>{
        if (err) {
          logger.error('Query user information error', err);
        }
        return rows;
      })
    }
  }
}

const user = new User();

const logger = log4js.getLogger(user);

export default user;
