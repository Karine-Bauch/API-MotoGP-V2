import { client } from '../config/db';
import type { Rider } from '../../../types/rider';

export class RiderService {

  async findAllRiders() : Promise<Rider[]> {
    const result = await client.query(
      `SELECT json_build_object(
        'id', "rider"."id",
        'number', "number",
        'firstname', "firstname",
        'lastname', "lastname",
        'birthdate', "birth_date",
        'country', "rider"."country",
        'height', "height",
        'weight', "weight",
        'biography', "biography"
      ) AS "rider",
      "moto_model" AS "rider_moto_model",
      "team"."name" AS "team_name",
      "manufacturer"."name" AS "manufacturer_name",
      array_agg("race"."name" ORDER BY "race"."date") AS "rider_races" 
      FROM "manufacturer"
      FULL JOIN "team_has_manufacturer" ON "manufacturer"."id" = "manufacturer_id" 
      FULL JOIN "team" ON "team_id" = "team"."id"
      FULL JOIN "rider_has_team" ON "team"."id" = "rider_has_team"."team_id"
      FULL JOIN "rider" ON "rider_id" = "rider"."id"
      LEFT JOIN "rider_has_race" ON "rider_has_race"."rider_id" = "rider"."id"
      LEFT JOIN "race" ON "race"."id" = "race_id"
      GROUP BY "rider"."id", "number", "firstname", "lastname", "birth_date", "rider"."country", "height", "weight", 
      "moto_model", "team"."name", "manufacturer"."name", "biography" ORDER BY "lastname" ASC`
    );
    return result.rows;
  }

  async findOneRider(riderId: number) : Promise<Rider> {
      const result = await client.query(
        `SELECT json_build_object(
          'id', "rider"."id",
          'number', "number",
          'firstname', "firstname",
          'lastname', "lastname",
          'birthdate', "birth_date",
          'country', "rider"."country",
          'height', "height",
          'weight', "weight",
          'biography', "biography"
        ) AS "rider",
        "moto_model" AS "rider_moto_model",
        "team"."name" AS "team_name",
        "manufacturer"."name" AS "manufacturer_name",
        array_agg("race"."name" ORDER BY "race"."date") AS "rider_races" 
        FROM "manufacturer"
        FULL JOIN "team_has_manufacturer" ON "manufacturer"."id" = "manufacturer_id" 
        FULL JOIN "team" ON "team_id" = "team"."id"
        FULL JOIN "rider_has_team" ON "team"."id" = "rider_has_team"."team_id"
        FULL JOIN "rider" ON "rider_id" = "rider"."id"
        LEFT JOIN "rider_has_race" ON "rider_has_race"."rider_id" = "rider"."id"
        LEFT JOIN "race" ON "race"."id" = "race_id"
        WHERE "rider"."id" = $1
        GROUP BY "rider"."id", "number", "firstname", "lastname", "birth_date", "rider"."country", "height", "weight", 
        "moto_model", "team"."name", "manufacturer"."name", "biography" ORDER BY "lastname" ASC`,
        [riderId]
      );
      return result.rows[0];
  }
};