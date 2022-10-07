import { Request, Response } from 'express';
import { TeamService } from '../models/teamMapper';

const service = new TeamService();

module.exports = {
  async getAll(_: void, res: Response) {
    const teams = await service.findAllTeams();
    return res.json(teams);
  },

  async getOne(req: Request, res: Response) {
    const team = await service.findOneTeam(Number(req.params.id));
    return res.json(team);
  }
}