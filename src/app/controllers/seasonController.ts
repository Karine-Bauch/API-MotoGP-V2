import { Request, Response } from 'express';

const seasonMapper = require('../models/seasonMapper');

module.exports = {
  async getAll(_: void, res: Response) {
    const seasons = await seasonMapper.findAllSeasons();
    return res.json(seasons);
  },

  async getOne(req: Request, res: Response) {
    const season = await seasonMapper.findOneSeason(req.params.id);
    return res.json(season);
  },

  async getByYear(req: Request, res: Response) {
    const season = await seasonMapper.findByYear(req.params.id);
    return res.json(season);
  }
}