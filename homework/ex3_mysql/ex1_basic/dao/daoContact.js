const db = require('../db/MysqlDb.js');

class ContactDao {

    async getContacts() {
        var result = await db.query('SELECT * FROM contact', null);
        return result;
    }

}

module.exports = ContactDao;