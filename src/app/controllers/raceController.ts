import { Request, Response } from 'express';

const datamapper = require('../models/mapper');

module.exports = {
  async getAll(_: void, res: Response) {
    const races = await datamapper.findAllRaces();
    return res.json(races);
  },

  async getOne(req: Request, res: Response) {
    const race = await datamapper.findOneRace(req.params.id);
    return res.json(race);
  },
}