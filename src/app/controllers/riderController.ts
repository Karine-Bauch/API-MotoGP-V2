import { Request, Response } from 'express';

const riderMapper = require('../models/riderMapper');

module.exports = {
  async getAll(_: void, res: Response) {
    const riders = await riderMapper.findAllRiders();
    return res.json(riders);
  },

  async getOne(req: Request, res: Response) {
    const rider = await riderMapper.findOneRider(req.params.id);
    return res.json(rider);
  },

  async getByNumber(req: Request, res: Response) {
    const rider = await riderMapper.findRiderByNumber(req.params.id);
    return res.json(rider);
  }
}