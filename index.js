/** @format */

const Server = require('./server/server');
// const Mysql = require('./mysql/mysql');

const port = 3000;
const server = Server.init(port);

server.start(() => {
  console.log(`Example app listening at http://localhost:${port}`);
});
