const seasonClient = require('../config/db');
import type { Season } from '../../../types/season'; 

export class SeasonService {

  async findAllSeasons() : Promise<Season[]> {
    const result = await seasonClient.query('SELECT * FROM "season"');
    return result.rows;
  }

  async findOneSeason(seasonId: number) : Promise<Season> {
    try {
      const result = await seasonClient.query(
        'SELECT * FROM "season" WHERE "season"."id" = $1',
        [seasonId]
      );
      return result.rows[0];
    } catch (err) {
      throw err;
    };
  }
  
  async findByYear(year: number) : Promise<Season> {
    try {
      const result = await seasonClient.query(
        'SELECT * FROM "season" WHERE "season"."year" = $1',
        [year]
      );
      return result.rows[0];
    } catch (err) {
      throw err;
    };
  }
}