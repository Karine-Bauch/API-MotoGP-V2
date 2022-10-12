import { Request, Response } from 'express';
import { SeasonService } from '../models/seasonMapper';
import ApiError from '../helpers/error';

const service = new SeasonService();

export const seasonController = {
  async getAll(_: void, res: Response) {
    const seasons = await service.findAllSeasons();
    return res.status(200).json(seasons);
  },

  async getOne(req: Request, res: Response) {
    const season = await service.findOneSeason(Number(req.params.id));
    
    if (!season) {
      throw new ApiError(404, 'Season not found');
    };

    return res.status(200).json(season);
  },

  async getByYear(req: Request, res: Response) {
    const season = await service.findByYear(Number(req.params.id));
    
    if (!season) {
      throw new ApiError(404, 'Season not found');
    };
    
    return res.status(200).json(season);
  }
}