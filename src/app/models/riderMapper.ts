import { client } from '../config/db';
import type { Rider } from '../../../types/rider';

export class RiderService {

  async findAllRiders() : Promise<Rider[]> {
    const result = await client.query(
      `SELECT "number" AS "rider_number",
      "firstname" AS "rider_firstname",
      "lastname" AS "rider_lastname",
      "birth_date" AS "rider_anniversary",
      "rider"."country" AS "rider_country",
      "height" AS "rider_height",
      "weight" AS "rider_weight",
      "moto_model" AS "rider_moto_model",
      "team"."name" AS "team_name",
      "manufacturer"."name" AS "manufacturer_name",
      "biography" AS "rider_biography",
      array_agg("race"."name" ORDER BY "race"."date") AS "rider_races" 
      FROM "manufacturer"
      FULL JOIN "team_has_manufacturer" ON "manufacturer"."id" = "manufacturer_id" 
      FULL JOIN "team" ON "team_id" = "team"."id"
      FULL JOIN "rider_has_team" ON "team"."id" = "rider_has_team"."team_id"
      FULL JOIN "rider" ON "rider_id" = "rider"."id"
      LEFT JOIN "rider_has_race" ON "rider_has_race"."rider_id" = "rider"."id"
      LEFT JOIN "race" ON "race"."id" = "race_id"
      GROUP BY "number", "firstname", "lastname", "birth_date", "rider"."country", "height", "weight", 
      "moto_model", "team"."name", "manufacturer"."name", "biography" ORDER BY "lastname" ASC`
    );
    return result.rows;
  }

  async findOneRider(riderId: number) : Promise<Rider> {
      const result = await client.query(
        'SELECT * FROM "rider" WHERE "rider"."id" = $1',
        [riderId]
      );
      return result.rows[0];
  }
};