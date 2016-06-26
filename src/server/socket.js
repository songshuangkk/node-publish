/**
 *
 * To build Socket instance
 *
 **/
import DeployService from './service/deployService';
import cluster from 'cluster';

export default (io) => {
  io.on('connection', function (socket) {
    // To get deploy log
    socket.on('deployLog', (value) => {
      // TODO get process info by redis
    });
    // To get application log
    socket.on('applicationLog', () => {});
  });
}
