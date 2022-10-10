const raceClient = require('../config/db');
import type { Race } from '../../../types/race';

export class RaceService {
    
  async findAllRaces() : Promise<Race[]> {
    const result = await raceClient.query('SELECT * FROM "race"');
    return result.rows;
  }

  async findOneRace(raceId: number) : Promise<Race> {
      const result = await raceClient.query(
        'SELECT * FROM "race" WHERE "race"."id" = $1',
        [raceId]
      );
      return result.rows[0];
  };
};