const teamClient = require('../config/db');

module.exports = {

  async findAllTeams() {
    const result = await teamClient.query('SELECT * FROM "team"');
    return result.rows;
  },

  async findOneTeam(teamId: number) {
    const result = await teamClient.query(`SELECT * FROM "team" WHERE "team"."id" = ${teamId}`);
    return result.rows[0];
  }
}