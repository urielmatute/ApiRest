require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT ||4000 ,
    },

    mysql:{

        host: process.env.mysql_host || 'localhost',
        host: process.env.mysql_user || 'root',
        host: process.env.mysql_password || '$0p0rt3',
        host: process.env.mysql_db || 'empleados01'
    }
}