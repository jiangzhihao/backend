import * as Koa from "koa";
// import * as Router from "koa-router";
// const dbtest = require("./utils/dbconnect");
const testRouter = require("./routers/test");

const app = new Koa();
// const router = new Router();

app.use(testRouter.routes());
// app.use(router.allowedMethods());

app.listen(3000);

console.log("Server running on port 3000");
