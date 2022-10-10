const teamClient = require('../config/db');
import type { Team } from '../../../types/team';

export class TeamService {

  async findAllTeams() : Promise<Team[]> {
    const result = await teamClient.query('SELECT * FROM "team"');
    return result.rows;
  }

  async findOneTeam(teamId: number) : Promise<Team> {
      const result = await teamClient.query(
        'SELECT * FROM "team" WHERE "team"."id" = $1',
        [teamId]
      );
      return result.rows[0];
  }
};