import * as Router from "koa-router";
const router = new Router();

router.prefix('/test')
router.get("/", async ctx => {
  ctx.body = "Hello World!111";
});

module.exports = router;
