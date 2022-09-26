"use strict";
const client = require('../config/db');
module.exports = {
    async findAll() {
        const result = await client.query('SELECT * FROM "rider"');
        return result.rows;
    },
    async findOne(riderId) {
        const result = await client.query(`SELECT * FROM rider WHERE rider.id = ${riderId}`);
        return result.rows[0];
    },
    async findByNumber(riderNumber) {
        const result = await client.query(`SELECT * FROM rider WHERE rider.number = '${riderNumber}'`);
        return result.rows[0];
    }
};
