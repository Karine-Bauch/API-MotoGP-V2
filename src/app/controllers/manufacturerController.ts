import { Request, Response } from 'express';

const manufacturerMapper = require('../models/manufacturerMapper');

module.exports = {
  async getAll(_: void, res: Response) {
    const manufacturers = await manufacturerMapper.findAllManufacturers();
    return res.json(manufacturers);
  },

  async getOne(req: Request, res: Response) {
    const manufacturer = await manufacturerMapper.findOneManufacturer(req.params.id);
    return res.json(manufacturer);
  }
}
