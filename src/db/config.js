const pgConncetion = 'postgres://xtlwfxlb:VDTdcHbPiFO45Ioq0heijwJPhC5oWZWk@fanny.db.elephantsql.com/xtlwfxlb'
//api.elephantsql.com
async function connect() {
    if (global.connection) {
        return global.connection.connect();
    }

    const { Pool } = require('pg');

    const pool = new Pool({
        connectionString: pgConncetion
    });

    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}

module.exports = { connect };