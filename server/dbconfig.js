const hostname = "zeta2.labunix.uqam.ca";
const databaseName = "baclab";
const username = "kb691423";
const password = "TlzEknls";

const connDB = "(DESCRIPTION=(ADDRESS_LIST = (ADDRESS = (PROTOCOL = TCP)(HOST = " + hostname + ")(PORT = 1521)))(CONNECT_DATA=(SID=" + databaseName + ")))";

module.exports = {
    user: process.env.NODE_ORACLEDB_USER || username,

    password: process.env.NODE_ORACLEDB_PASSWORD || password,

    connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING || connDB,

    externalAuth: process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};
