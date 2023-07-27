const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
require('dotenv').config();
//const PORT = 5000;
conn.sync({ force: false}).then(() => {
server.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
}) 
}).catch(error => console.error(error))
