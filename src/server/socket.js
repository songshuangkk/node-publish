/**
 *
 * To build Socket instance
 *
 **/
import DeployService from './service/deployService';

export default (io) => {
  io.on('connection', function (socket) {
    // To get deploy log
    socket.on('deployLog', (value) => {
      console.log(value);
      socket.emit('getDeployLog', {'msg': 'HelloWorld'});
    });
    // To get application log
    socket.on('applicationLog', () => {});
  });
}
