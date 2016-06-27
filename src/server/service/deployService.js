
import cluster from 'cluster';
import {spawn, exec} from 'child_process';
import log4js from 'log4js';
import redis from '../redis/index';

class DeployService {
  // Return pid to get message for log
  build(option) {
    const build  = exec('cd /Users/songshuang/IdeaProjects/maybach && mvn package');

    build.stdout.on('data', (data) => {
      console.log(data);
    });

    build.stderr.on('data', (data) => {
      logger.error(data);
    });

    return build.pid;
  }

  deployLog() {

  }

  applicationLog() {

  }
}
var deployService = new DeployService()
var logger = log4js.getLogger(deployService)

export default deployService;
