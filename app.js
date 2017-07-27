const Koa = require('koa');
const app = new Koa();
var controller = require('koa-route');
var service = require('./service.js');




app.use(controller.get('/', function*() {
    this.set('Cache-Control', 'no-cache');
    var list = yield service.select_all_api();

    
    function generateRouteFn(){
            let rowData = list[i];
            return function*() {
              this.set('Cache-Control', 'no-cache');
              this.body = rowData;
            }
    }
    for(var i = 0;i < list.length; i++){

          console.log(list[0]);
          app.use(controller.get(list[i].address, generateRouteFn()));
          console.log("这里有执行到");

    }


    this.body = yield service.select_all_api();
}));

console.log("服务已经开启～");

app.listen(3000);