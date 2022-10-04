import { Request, Response } from 'express';

const teamMapper = require('../models/teamMapper');

module.exports = {
  async getAll(_: void, res: Response) {
    const teams = await teamMapper.findAllTeams();
    return res.json(teams);
  },

  async getOne(req: Request, res: Response) {
    const team = await teamMapper.findOneTeam(req.params.id);
    return res.json(team);
  }
}