import Mongoose from 'mongoose';
import CONFIG from '../config';
import log4js from 'log4js';

const logger = log4js.getLogger(Mongoose);

Mongoose.connect('mongodb://'+CONFIG.MongoDB.user+':'+CONFIG.MongoDB.password+'@'+CONFIG.MongoDB.host, (error) => {
  if (error) {
    logger.error('Connect Mongodb Failed!');
    throw error;
  }
  logger.info('Connect Mongodb Success!');
});

export default Mongoose;
