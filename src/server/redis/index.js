import redis from 'redis';
import CONFIG from '../config';
import log4js from 'log4js';

var client = redis.createClient(CONFIG.Redis.port, CONFIG.Redis.host);

var logger = log4js.getLogger(client);

client.auth(CONFIG.Redis.password, (err) => {
  if(err) logger.error(err);
  logger.info('Connect Redis Success!');
});

export default client;
