const express = require("express");
const path = require("path");

class Server {
  constructor(port) {
    this.app = express();
    this.port = port;
  }

  static init(port) {
    return new Server(port);
  }

  publicFolder() {
    const publicPath = path.resolve(__dirname, "../public");
    this.app.use(express.static(publicPath));
  }

  start(callback) {
    this.app.listen(this.port, callback);
    this.publicFolder();
  }
}

module.exports = Server;
