import { client } from '../config/db';
import type { Track } from '../../../types/track';

export class TrackService {
  
  async findAllTracks() : Promise<Track[]> {
    const result = await client.query(
      `SELECT "track"."id" AS "track_id",
      "track"."name" AS "track_name",
      "country",
      "city",
      array_agg(DISTINCT("race"."name")) AS "track_races"
      FROM "track"
      FULL JOIN "race" ON "track"."id" = "track_id"
      GROUP BY "track"."id", "track"."name", "country"`
    );
    return result.rows;
  }

  async findOneTrack(trackId: number) : Promise<Track> {
      const result = await client.query(
        `SELECT "track"."id" AS "track_id",
        "track"."name" AS "track_name",
        "country",
        "city",
        array_agg(DISTINCT("race"."name")) AS "track_races"
        FROM "track"
        FULL JOIN "race" ON "track"."id" = "track_id"
        WHERE "track"."id" = $1
        GROUP BY "track"."id", "track"."name", "country"`,
        [trackId]
      );
      return result.rows[0];
  }
};