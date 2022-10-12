import { client } from '../config/db';
import type { Team } from '../../../types/team';

export class TeamService {

  async findAllTeams() : Promise<Team[]> {
    const result = await client.query(
      `SELECT "team"."id" AS "team_id",
      "team"."name" AS "team_name",
      "manufacturer"."name" AS "manufacturer_name",
      array_agg(DISTINCT("team"."moto_model")) AS "team_motos",
      array_agg(DISTINCT("rider"."firstname" || ' ' || "rider"."lastname")) AS "season_riders"
      FROM "manufacturer"
      FULL JOIN "team_has_manufacturer" ON "manufacturer"."id" = "manufacturer_id" 
      FULL JOIN "team" ON "team_id" = "team"."id"
      FULL JOIN "rider_has_team" ON "team"."id" = "rider_has_team"."team_id"
      FULL JOIN "rider" ON "rider_id" = "rider"."id"
      GROUP BY "team"."id", "team"."name", "manufacturer"."name"`
    );
    return result.rows;
  }

  async findOneTeam(teamId: number) : Promise<Team> {
      const result = await client.query(
        `SELECT "team"."id" AS "team_id",
        "team"."name" AS "team_name",
        "manufacturer"."name" AS "manufacturer_name",
        array_agg(DISTINCT("team"."moto_model")) AS "team_motos",
        array_agg(DISTINCT("rider"."firstname" || ' ' || "rider"."lastname")) AS "season_riders"
        FROM "manufacturer"
        FULL JOIN "team_has_manufacturer" ON "manufacturer"."id" = "manufacturer_id" 
        FULL JOIN "team" ON "team_id" = "team"."id"
        FULL JOIN "rider_has_team" ON "team"."id" = "rider_has_team"."team_id"
        FULL JOIN "rider" ON "rider_id" = "rider"."id"
        WHERE "team"."id" = $1
        GROUP BY "team"."id", "team"."name", "manufacturer"."name"`,
        [teamId]
      );
      return result.rows[0];
  }
};