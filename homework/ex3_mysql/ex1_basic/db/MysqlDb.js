const mysql = require('mysql');

class MysqlDb {

  constructor() {
    this.host = '127.0.0.1';
    this.user = 'admin';
    this.password = 'admin';
    this.database = 'jssi';

    var con = mysql.createConnection({
      host: this.host,
      user: this.user,
      password: this.password,
      database: this.database
    });

    con.connect(this.onConnectError);

    this.con = con;
  }

  query(sql, args) {
    return new Promise((resolve, reject) => {
      this.con.query(sql, args, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });

  }

  onConnectError(err) {
    if (err) throw err;
  }

}

module.exports = new MysqlDb();


