// app.js
const daoContact = require('dao/daoContact');

daoContact.getContacts().then((result) => {
  console.dir( result );
});

