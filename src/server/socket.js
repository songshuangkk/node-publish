/**
 *
 * To build Socket instance
 *
 **/
import DeployService from './service/deployService';
import cluster from 'cluster';
import redis from './redis/index';

export default (io) => {
  var connectionSocket = "";
  io.on('connection', function (socket) {
    connectionSocket = socket;
    // To get deploy log
    socket.on('deployLog', (value) => {
      // TODO get process info by redis
    });
    // To get application log
    socket.on('applicationLog', () => {});
  });

  return function* (next) {
    var context = this;
    console.log(context.state);
  }
}
