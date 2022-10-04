import { Request, Response } from 'express';

const raceMapper = require('../models/raceMapper');

module.exports = {
  async getAll(_: void, res: Response) {
    const races = await raceMapper.findAllRaces();
    return res.json(races);
  },

  async getOne(req: Request, res: Response) {
    const race = await raceMapper.findOneRace(req.params.id);
    return res.json(race);
  },
}