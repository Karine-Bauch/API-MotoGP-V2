const manufacturerClient = require('../config/db');
import type { Manufacturer } from '../../../types/manufacturer';

export class ManufacturerService {

  async findAllManufacturers() : Promise<Manufacturer[]> {
    const result = await manufacturerClient.query('SELECT * FROM "manufacturer"');
    return result.rows;
  }

  async findOneManufacturer(manufacturerId: number) : Promise<Manufacturer> {
      const result = await manufacturerClient.query(
        'SELECT * FROM "manufacturer" WHERE "manufacturer"."id" = $1',
        [manufacturerId]
      );
      return result.rows[0];
  }
  
};