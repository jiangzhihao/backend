import * as Koa from "koa";
import { Sequelize } from "sequelize-typescript";
import { dbconfig } from "./config";
import { MysqlConfig } from "config";

const app = new Koa();

const _ = new Sequelize(dbconfig as MysqlConfig);

// app.use(router.allowedMethods());

app.listen(3000, () => console.log("Server running on port 3000"));
