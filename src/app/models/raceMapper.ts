const raceClient = require('../config/db');

module.exports = {
  
  async findAllRaces() {
    const result = await raceClient.query('SELECT * FROM "race"');
    return result.rows;
  },

  async findOneRace(raceId: number) {
    const result = await raceClient.query(`SELECT * FROM race WHERE race.id = ${raceId}`);
    return result.rows[0];
  },

};


  