import router from 'koa-router';
import User from '../db/user';

const routers = router();

routers.get('/', function *(next) {
  yield this.render('index');
});

routers.post('/login', function *(next) {
  const request = this.request.body;
  User.queryUser(request);
  this.body = {"OK": "OK"};
});


export default routers;
