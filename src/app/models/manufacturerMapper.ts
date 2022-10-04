const manufacturerClient = require('../config/db');

module.exports = {

  async findAllManufacturers() {
    const result = await manufacturerClient.query('SELECT * FROM "manufacturer"');
    return result.rows;
  },

  async findOneManufacturer(manufacturerId: number) {
    const result = await manufacturerClient.query(`SELECT * FROM "manufacturer" WHERE "manufacturer"."id" = ${manufacturerId}`);
    return result.rows[0];
  }
}