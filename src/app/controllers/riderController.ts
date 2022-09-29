import { Request, Response } from 'express';

const datamapper = require('../models/mapper');

module.exports = {
  async getAll(_: void, res: Response) {
    const riders = await datamapper.findAllRiders();
    return res.json(riders);
  },

  async getOne(req: Request, res: Response) {
    const rider = await datamapper.findOneRider(req.params.id);
    return res.json(rider);
  },

  async getByNumber(req: Request, res: Response) {
    const rider = await datamapper.findRiderByNumber(req.params.id);
    return res.json(rider);
  }
}