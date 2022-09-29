const client = require('../config/db');

module.exports = {
  
  // Riders mapper
  
  async findAllRiders() {
    const result = await client.query('SELECT * FROM "rider"');
    return result.rows;
  },

  async findOneRider(riderId: number) {
    const result = await client.query(`SELECT * FROM rider WHERE rider.id = ${riderId}`);
    return result.rows[0];
  },

  async findRiderByNumber(riderNumber: string) {
    const result = await client.query(`SELECT * FROM rider WHERE rider.number = '${riderNumber}'`);
    return result.rows[0];
  },

  // Races mapper

  async findAllRaces() {
    const result = await client.query('SELECT * FROM "race"');
    return result.rows;
  },

  async findOneRace(raceId: number) {
    const result = await client.query(`SELECT * FROM race WHERE race.id = ${raceId}`);
    return result.rows[0];
  },

};
