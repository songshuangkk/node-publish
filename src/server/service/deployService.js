
import cluster from 'cluster';
import {spawn, exec} from 'child_process';
import log4js from 'log4js';

class DeployService {
  build(option) {
    const cd  = spawn('cd', ['/Users/songshuang/IdeaProjects/maybach'], ['&&', 'mvn', 'package']);
    console.log(cd.pid);
  }

  deployLog() {

  }

  applicationLog() {

  }
}
var deployService = new DeployService()
var logger = log4js.getLogger(deployService)

export default deployService;
