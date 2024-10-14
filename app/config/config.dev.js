/*
 * @Author: hukai huzhengen@gmail.com
 * @Date: 2024-10-10 13:24:58
 * @LastEditors: hukai huzhengen@gmail.com
 * @LastEditTime: 2024-10-12 11:57:26
 * @FilePath: \chanyue-cms-master\server\app\config\config.dev.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const base = require("./config.base.js");
const config = { ...base };

//mysql配置
// config.database = {
//   client: "pg",
//   host: "103.40.14.112",
//   port: "13555",
//   user: "postgres",
//   password: "123456",
//   database: "postgres",
//   // charset: "utf8mb4",
// };

config.database = {
  // client: "mysql2", 默认mysql
  host: "103.40.14.112",
  port: "49294",
  user: "text",
  password: "yFmC67b2fmnjapPs",
  database: "text",
  // charset: "utf8mb4",
};

//sql debug
config.debug = false;

// jwt 配置
config.token = {
  KEY: "ChanCMS",
  TIME: "1d",
};

// md5 加盐
config.secretcms = {
  key: "chanyue-cms",
};

//cors
config.cors = {
  origin: "*", //或者['http://localhost:8080', 'http://localhost:8081']
};

//多个views
config.views = []; //path.join(config.appRoot, `modules/web/view`)

config.env = "dev";

config.logger = {
  level: "dev",
};

module.exports = config;
