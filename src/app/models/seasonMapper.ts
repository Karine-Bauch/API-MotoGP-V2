import { client } from '../config/db';
import type { Season } from '../../../types/season'; 

export class SeasonService {

  async findAllSeasons() : Promise<Season[]> {
    const result = await client.query(
      `SELECT "season"."id" AS "season_id",
      "season"."year" AS "year",
      array_agg(DISTINCT("race"."name")) AS "season_races",
      array_agg(DISTINCT("rider"."firstname" || ' ' || "rider"."lastname")) AS "season_riders"
      FROM "season"
      FULL JOIN "race" ON "season"."id" = "season_id"
      FULL JOIN "rider_has_race" ON "race"."id" = "race_id"
      FULL JOIN "rider" ON "rider_id" = "rider"."id"
      GROUP BY "season"."id", "season"."year"`
    );
    return result.rows;
  }

  async findOneSeason(seasonId: number) : Promise<Season> {
      const result = await client.query(
        `SELECT "season"."id" AS "season_id",
        "season"."year" AS "year",
        array_agg(DISTINCT("race"."name")) AS "season_races",
        array_agg(DISTINCT("rider"."firstname" || ' ' || "rider"."lastname")) AS "season_riders"
        FROM "season"
        FULL JOIN "race" ON "season"."id" = "season_id"
        FULL JOIN "rider_has_race" ON "race"."id" = "race_id"
        FULL JOIN "rider" ON "rider_id" = "rider"."id"
        WHERE "season"."id" = $1
        GROUP BY "season"."id", "season"."year"`,
        [seasonId]
      );
      return result.rows[0];
  }
  
  async findByYear(year: number) : Promise<Season> {
      const result = await client.query(
        `SELECT "season"."id" AS "season_id",
        "season"."year" AS "year",
        array_agg(DISTINCT("race"."name")) AS "season_races",
        array_agg(DISTINCT("rider"."firstname" || ' ' || "rider"."lastname")) AS "season_riders"
        FROM "season"
        FULL JOIN "race" ON "season"."id" = "season_id"
        FULL JOIN "rider_has_race" ON "race"."id" = "race_id"
        FULL JOIN "rider" ON "rider_id" = "rider"."id" WHERE "season"."year" = $1
        GROUP BY "season"."id", "season"."year"`,
        [year]
      );
      return result.rows[0];
  }
}