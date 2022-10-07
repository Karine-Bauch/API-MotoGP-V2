import { Request, Response } from 'express';
import { ManufacturerService } from '../models/manufacturerMapper';

const service = new ManufacturerService();

module.exports = {
  async getAll(_: void, res: Response) {
    const manufacturers = await service.findAllManufacturers();
    return res.status(200).json(manufacturers);
  },

  async getOne(req: Request, res: Response) {
    const manufacturer = await service.findOneManufacturer(Number(req.params.id));
    return res.status(200).json(manufacturer);
  }
}
