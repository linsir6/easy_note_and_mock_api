const Koa = require('koa');
const app = new Koa();
var controller = require('koa-route');



// response
// app.use(ctx => {
//   ctx.body = 'Hello Koa';
// });

var address = '/zzz';

app.use(controller.get(address, function*() {
    this.set('Cache-Control', 'no-cache');
    this.body = "zz";
}));

console.log("服务已经开启～");

app.listen(3000);