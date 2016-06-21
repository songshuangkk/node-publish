/**
 *
 * To build Socket instance
 *
 **/
import DeployService from './service/deployService';

export default (io) => {
  io.on('connection', function (socket) {
    // To get deploy log
    socket.on('deployLog', () => {});
    // To get application log
    socket.on('applicationLog', () => {});
  });
}
