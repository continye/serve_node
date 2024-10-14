/*
 * @Author: hukai huzhengen@gmail.com
 * @Date: 2024-10-10 13:24:58
 * @LastEditors: hukai huzhengen@gmail.com
 * @LastEditTime: 2024-10-14 14:27:47
 * @FilePath: \chanyue-cms-master\server\app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Chanjs = require("chanjs");
const chan = new Chanjs();
const config = require("./app/middleware/config.js");
chan.beforeStart(async () => {
  await config(chan.app);
});
chan.start(() => {
  console.log("ChanCMS 启动成功");
});
chan.run();