const con = require('../../config/dbconfig')
const daoCommon = require('../common/daoCommon')

const profileDao = {
    ...daoCommon,
    table: 'profile',

    create: (req, res) => {
        if(Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": 'No fields to create.'
            })
        } else {
            const fields = Object.keys(req.body) //creates an array
            const values = Object.values(req.body)//create array

            con.execute(
                `INSERT INTO profile SET ${fields.join(' = ?, ')} = ?`,
                values,
                (error, dbres) => {
                    if(!error) {
                        res.send(`Last id: ${dbres.insertId}`)
                    } else {
                        console.log(' PROFILE DAO ERROR ', error)
                        res.send('Error creating record')
                    }
                }
            )
        }
    },

    update: (req, res) => {
        if(isNaN(req.params.id)) {
            res.json({
                "error": true,
                "message": "Id must be a number."
            })
        } else if(Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to update"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `UPDATE profile SET ${fields.join(' = ?, ')} = ? WHERE profile_id = ?`,
                [...values, req.params.id],
                (error, dbres) => {
                    if(!error) {
                        res.send(`Changed ${dbres.changedRows} row(s)`)
                    } else {
                        console.log(' PROFILE DAO ERROR ', error)
                        res.send('Error updating record')
                    }
                }
            )
        }
    },

    sort: (req, res) => {
        con.execute(
            `SELECT * FROM profile ORDER BY last_name, first_name`,
            [req.body],
            (error, rows) => {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(' PROFILE DAO ERROR ', error)
                }
            }
        )
    }
}

module.exports = profileDao