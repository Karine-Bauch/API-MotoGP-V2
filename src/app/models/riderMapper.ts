const riderClient = require('../config/db');
import type { Rider } from '../../../types/rider';

export class RiderService {

  async findAllRiders() : Promise<Rider[]> {
    const result = await riderClient.query('SELECT * FROM "rider"');
    return result.rows;
  }

  async findOneRider(riderId: number) : Promise<Rider> {
      const result = await riderClient.query(
        'SELECT * FROM "rider" WHERE "rider"."id" = $1',
        [riderId]
      );
      return result.rows[0];
  }
};