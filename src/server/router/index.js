import router from 'koa-router';

const routers = router();

routers.get('/', function *(next) {
  yield this.render('index');
});

routers.post('/login', function *(next) {
});


export default routers;
