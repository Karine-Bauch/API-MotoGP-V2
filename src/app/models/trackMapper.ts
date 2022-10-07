const trackClient = require('../config/db');
import type { Track } from '../../../types/track';

export class TrackService {
  
  async findAllTracks() : Promise<Track[]> {
    const result = await trackClient.query('SELECT * FROM "track"');
    return result.rows;
  }

  async findOneTrack(trackId: number) : Promise<Track> {
    try {
      const result = await trackClient.query(
        'SELECT * FROM "track" WHERE "track"."id" = $1',
        [trackId]
      );
      return result.rows[0];
    } catch (err) {
      throw err;
    };
  }
};