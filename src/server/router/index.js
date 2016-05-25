import router from 'koa-router';

const routers = router();

routers.get('/', function *(next) {
  yield this.render('index');
});


export default routers;
