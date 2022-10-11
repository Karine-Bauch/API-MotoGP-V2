import { Request, Response } from 'express';
import { RaceService } from '../models/raceMapper';
import ApiError from '../helpers/error';

const service = new RaceService();

module.exports = {
  async getAll(_: void, res: Response) {
    const races = await service.findAllRaces();
    return res.status(200).json(races);
  },

  async getOne(req: Request, res: Response) {
    const race = await service.findOneRace(Number(req.params.id));
    
    if (!race) {
      throw new ApiError(404, 'Race not found');
    };

    return res.status(200).json(race);
  },
}