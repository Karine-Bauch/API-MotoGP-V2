import { Request, Response } from 'express';
import { TrackService } from '../models/trackMapper';
import ApiError from '../helpers/error';

const service = new TrackService();

module.exports = {
  async getAll(_: void, res: Response) {
    const tracks = await service.findAllTracks();
    return res.json(tracks);
  },

  async getOne(req: Request, res: Response) {
    const track = await service.findOneTrack(Number(req.params.id));
    
    if (!track) {
      throw new ApiError(404, 'Track not found');
    };

    return res.status(200).json(track);
  },
}