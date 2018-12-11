const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'HELLO HEROKU DEPLOY';
});

app.listen(process.env.PORT || 3000);


if(process.env.NODE_ENV === 'test'){
  process.exit(0);
}
