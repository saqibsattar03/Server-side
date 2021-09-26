const localMode = false;

const host = "127.0.0.1";
const user = "root";
const password = "";
const database = "tradingseek";

const server_host = "localhost";
const server_user = "root";
const server_password = "ApmP@ss1234";
const server_database = "tradingseek";


module.exports.host = localMode ? host : server_host;
module.exports.user = localMode ? user : server_user;
module.exports.password = localMode ? password : server_password;
module.exports.database = localMode ? database : server_database;
