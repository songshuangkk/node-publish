import router from 'koa-router';
import User from '../db/user';
import ConfigService from '../service/configService';

const routers = router();

routers.get('/', function *(next) {
  yield this.render('index');
});

routers.post('/login', function *(next) {
  const request = this.request.body;
  User.queryUser(request);
  this.body = {OK: "OK"};
  ConfigService.insert();
  ConfigService.find();
});

// edit the Java Env
routers.post('/editEnv', function *(next) {
  let request = this.request.body;
  // To Edit Env
  console.log(request);
});

// build application
routers.get('/build', function *(next) {

});

// deploy application
routers.get('/deploy', function *(next) {

});


export default routers;
