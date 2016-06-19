import DB from './index';
import log4js from 'log4js';

class User {
  queryUser(query) {
    return new Promise((resolve, reject) => {
         DB.query('select * from user', (err, rows, fields) => {
           if (err) {
             reject();
           } else {
             resolve(rows);
           }
         });
       }).then((value) => {
          return value;
       });
  }
}

const user = new User();

const logger = log4js.getLogger(user);

export default user;
