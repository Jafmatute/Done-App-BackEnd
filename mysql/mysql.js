const mysql = require('mysql');
class Mysql {
  __instance;
  cnx;

  constructor() {
    this.cnx = mysql.createConnection({
      host: 'localhost',
      user: 'contoso',
      password: 'contoso',
      database: 'doneapp',
    });

    this.connectBD();
  }

  static get instance() {
    return this.instance || (this.__instance = new this());
  }
  connectBD() {
    this.cnx.connect((error) => {
      if (error) return console.log('error de connection', error);
      console.log('base de datos online');
    });
  }
}

module.exports = Mysql;
