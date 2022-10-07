import { Request, Response } from 'express';
import { RiderService } from '../models/riderMapper';

const service = new RiderService();

module.exports = {
  async getAll(_: void, res: Response) {
    const riders = await service.findAllRiders();
    return res.status(200).json(riders);
  },

  async getOne(req: Request, res: Response) {
    const rider = await service.findOneRider(Number(req.params.id));
    return res.status(200).json(rider);
  }
};