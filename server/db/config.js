
module.exports = {
    database: {
        client: 'sqlite',
        connection: {
            filename: __dirname + '/db.sqlite'
        }
    },
    directory: __dirname + '/migrations',
    tableName: 'migrations'
}
