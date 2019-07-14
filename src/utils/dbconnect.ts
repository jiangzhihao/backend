const Sequelize = require("Sequelize");

const sequelize = new Sequelize("world", "root", "0279503HAOyc", {
  host: "localhost", //数据库地址,默认本机
  port: "3306",
  dialect: "mysql"
});

module.exports = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err: any) => {
      console.error("Unable to connect to the database:", err);
    });
};
