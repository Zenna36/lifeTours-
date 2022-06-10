const con = require('../../config/dbconfig')

const daoCommon = {
    findAll: (req, table) => {
        con.query(
            //takes two params
            `SELECT * FROM ${table}`,
            (error, rows) => {
                if(!error) {
                    if(rows.length === 1) {
                        req.json(...rows)
                    } else {
                        req.json(rows)
                    }
                } else {
                    console.log(' DAO ERROR', error)
                }
            }
        )
    },

    findById: (res, table, id) => {
        con.query(
            `SELECT * FROM ${table} WHERE id=${id}`,  
            [id],
            (error, rows) => {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(' DAO COMMON ERROR ', error)
                }
            }
        )
    },

}

module.exports = daoCommon
