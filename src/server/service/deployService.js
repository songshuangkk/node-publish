
import cluster from 'cluster';
import {spawn, exec} from 'child_process';
import log4js from 'log4js';

class DeployService {
  build(option) {
    new Promise((resolve, reject) => {
      exec('git clone http://git.dawanju.net/mhc/maybach.git /Users/songshuang/self/node/maybach', (error, stdout, stderr) => {
      if (error) {
          logger.error(error);
      } else if (stderr) {
        logger.error(stderr);
      } else {
      }
    }).then() {

    }
  });
  }
}
var deployService = new DeployService()
var logger = log4js.getLogger(deployService)

export default deployService;
