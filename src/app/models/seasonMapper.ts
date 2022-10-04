const seasonClient = require('../config/db');

module.exports = {

  async findAllSeasons() {
    const result = await seasonClient.query('SELECT * FROM "season"');
    return result.rows;
  },

  async findOneSeason(seasonId: number) {
    const result = await seasonClient.query(`SELECT * FROM "season" WHERE "season"."id" = ${seasonId}`);
    return result.rows[0];
  },

  async findByYear(year: number) {
    const result = await seasonClient.query(`SELECT * FROM "season" WHERE "season"."year" = ${year}`);
    return result.rows[0];
  }
}