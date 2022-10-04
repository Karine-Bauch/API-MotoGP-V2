const riderClient = require('../config/db');

module.exports = {
  
  async findAllRiders() {
    const result = await riderClient.query('SELECT * FROM "rider"');
    return result.rows;
  },

  async findOneRider(riderId: number) {
    const result = await riderClient.query(`SELECT * FROM "rider" WHERE "rider"."id" = ${riderId}`);
    return result.rows[0];
  },

  async findRiderByNumber(riderNumber: string) {
    const result = await riderClient.query(`SELECT * FROM "rider" WHERE "rider"."number" = '${riderNumber}'`);
    return result.rows[0];
  },

};
