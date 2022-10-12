import { client } from '../config/db';
import type { Race } from '../../../types/race';

export class RaceService {
    
  async findAllRaces() : Promise<Race[]> {
    const result = await client.query(
      `SELECT "race"."id" AS "race_id",
      "race"."name" AS "race_name",
      "race"."date" AS "race_date",
      "race"."rank" AS "rank",
      "track"."name" AS "track_name",
      "track"."country" AS "country",
      "track"."city" AS "city",
      "season"."year" AS "season"
      FROM "season"
      FULL JOIN "race" ON "season"."id" = "season_id"
      FULL JOIN "track" ON "track_id" = "track"."id"`
    );
    return result.rows;
  }

  async findOneRace(raceId: number) : Promise<Race> {
      const result = await client.query(
        `SELECT "race"."id" AS "race_id",
        "race"."name" AS "race_name",
        "race"."date" AS "race_date",
        "race"."rank" AS "rank",
        "track"."name" AS "track_name",
        "track"."country" AS "country",
        "track"."city" AS "city",
        "season"."year" AS "season"
        FROM "season"
        FULL JOIN "race" ON "season"."id" = "season_id"
        FULL JOIN "track" ON "track_id" = "track"."id"
        WHERE "race"."id" = $1`,
        [raceId]
      );
      return result.rows[0];
  };
};