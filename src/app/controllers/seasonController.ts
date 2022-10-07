import { Request, Response } from 'express';
import { SeasonService } from '../models/seasonMapper';

const service = new SeasonService();

module.exports = {
  async getAll(_: void, res: Response) {
    const seasons = await service.findAllSeasons();
    return res.status(200).json(seasons);
  },

  async getOne(req: Request, res: Response) {
    const season = await service.findOneSeason(Number(req.params.id));
    return res.json(season);
  },

  async getByYear(req: Request, res: Response) {
    const season = await service.findByYear(Number(req.params.id));
    return res.status(200).json(season);
  }
}