import { Request, Response } from 'express';

const riderDatamapper = require('../models/riderMapper');

module.exports = {
  async getAll(_: void, res: Response) {
    const riders = await riderDatamapper.findAll();
    return res.json(riders);
  },

  async getOne(req: Request, res: Response) {
    const rider = await riderDatamapper.findOne(req.params.id);
    return res.json(rider);
  },

  async getByNumber(req: Request, res: Response) {
    const rider = await riderDatamapper.findByNumber(req.params.id);
    return res.json(rider);
  }
}