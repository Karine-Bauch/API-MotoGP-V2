import { Request, Response } from 'express';
import { TeamService } from '../models/teamMapper';
import ApiError from '../helpers/error';

const service = new TeamService();

module.exports = {
  async getAll(_: void, res: Response) {
    const teams = await service.findAllTeams();
    return res.json(teams);
  },

  async getOne(req: Request, res: Response) {
    const team = await service.findOneTeam(Number(req.params.id));
    
    if (!team) {
      throw new ApiError(404, 'Team not found');
    };

    return res.status(200).json(team);
  }
}