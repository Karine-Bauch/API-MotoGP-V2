"use strict";
const { Pool } = require('pg');
const config = {};
const pool = new Pool(config);
module.exports = {
    originalClient: pool,
    async query(...params) {
        return this.originalClient.query(...params);
    }
};
