import { Request, Response } from 'express';
import { ManufacturerService } from '../models/manufacturerMapper';
import ApiError from '../helpers/error';

const service = new ManufacturerService();

export const manufacturerController = {
  async getAll(_: void, res: Response) {
    const manufacturers = await service.findAllManufacturers();
    return res.status(200).json(manufacturers);
  },

  async getOne(req: Request, res: Response) {
    const manufacturer = await service.findOneManufacturer(Number(req.params.id));
    
    if (!manufacturer) {
      throw new ApiError(404, 'Manufacturer not found');
    };
    
    return res.status(200).json(manufacturer);
  }
}
