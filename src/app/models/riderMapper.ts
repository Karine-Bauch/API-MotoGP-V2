const client = require('../config/db');

module.exports = {
  async findAll() {
    const result = await client.query('SELECT * FROM "rider"');
    return result.rows;
  },

  async findOne(riderId: number) {
    const result = await client.query(`SELECT * FROM rider WHERE rider.id = ${riderId}`);
    return result.rows[0];
  }
};
