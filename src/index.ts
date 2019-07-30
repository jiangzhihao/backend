import "reflect-metadata";
import { createKoaServer } from "routing-controllers";
import { Sequelize } from "sequelize-typescript";
import bodyParser from "koa-bodyparser";
import { dbconfig } from "./config";
import { MysqlConfig } from "config";

const app = createKoaServer({
  controllers: [`${__dirname}/controllers/**/*{.js,.ts}`]
});

app.use(bodyParser());

const sequelize = new Sequelize(dbconfig as MysqlConfig); // dbconfig必须制定类型，否则ts会类型报错，虽然类型一致，但是也必须制定类型

// app.use(router.allowedMethods());

// sequelize.sync().then(() => {
//   console.log(sequelize.models);
//   debugger;
// });
app.listen(3000, () => console.log("Server running on port 3000"));
