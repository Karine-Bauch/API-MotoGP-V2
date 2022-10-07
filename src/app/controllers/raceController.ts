import { Request, Response } from 'express';
import { RaceService } from '../models/raceMapper';

const service = new RaceService();

module.exports = {
  async getAll(_: void, res: Response) {
    const races = await service.findAllRaces();
    return res.status(200).json(races);
  },

  async getOne(req: Request, res: Response) {
    const race = await service.findOneRace(Number(req.params.id));
    return res.status(200).json(race);
  },
}