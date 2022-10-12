import { client } from '../config/db';
import type { Manufacturer } from '../../../types/manufacturer';

export class ManufacturerService {

  async findAllManufacturers() : Promise<Manufacturer[]> {
    const result = await client.query(
      `SELECT "manufacturer"."name" AS "manufacturer_name",
      "manufacturer"."country" AS "manufacturer_country",
      array_agg(("rider"."firstname" || ' ' || "rider"."lastname") ORDER BY "manufacturer"."name") AS "manufacturers_riders",
      array_agg(DISTINCT("team"."name")) AS "manufacturer_teams"
      FROM "manufacturer"
      FULL JOIN "team_has_manufacturer" ON "manufacturer"."id" = "manufacturer_id" 
      FULL JOIN "team" ON "team_id" = "team"."id"
      FULL JOIN "rider_has_team" ON "team"."id" = "rider_has_team"."team_id"
      FULL JOIN "rider" ON "rider_id" = "rider"."id" 
      GROUP BY "manufacturer"."name", "manufacturer"."country"`
    );
    return result.rows;
  }

  async findOneManufacturer(manufacturerId: number) : Promise<Manufacturer> {
      const result = await client.query(
        `SELECT "manufacturer"."name" AS "manufacturer_name",
        "manufacturer"."country" AS "manufacturer_country",
        array_agg(("rider"."firstname" || ' ' || "rider"."lastname") ORDER BY "manufacturer"."name") AS "manufacturers_riders",
        array_agg(DISTINCT("team"."name")) AS "manufacturer_teams"
        FROM "manufacturer"
        FULL JOIN "team_has_manufacturer" ON "manufacturer"."id" = "manufacturer_id" 
        FULL JOIN "team" ON "team_id" = "team"."id"
        FULL JOIN "rider_has_team" ON "team"."id" = "rider_has_team"."team_id"
        FULL JOIN "rider" ON "rider_id" = "rider"."id" 
        WHERE "manufacturer"."id" = $1
        GROUP BY "manufacturer"."name", "manufacturer"."country"`,
        [manufacturerId]
      );
      return result.rows[0];
  }
  
};