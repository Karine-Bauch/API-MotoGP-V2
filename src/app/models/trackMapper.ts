const trackClient = require('../config/db');

module.exports = {
  
  async findAllTracks() {
    const result = await trackClient.query('SELECT * FROM "track"');
    return result.rows;
  },

  async findOneTrack(trackId: number) {
    const result = await trackClient.query(`SELECT * FROM track WHERE track.id = ${trackId}`);
    return result.rows[0];
  },

};


  