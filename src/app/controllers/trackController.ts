import { Request, Response } from 'express';
import { TrackService } from '../models/trackMapper';

const service = new TrackService();

module.exports = {
  async getAll(_: void, res: Response) {
    const tracks = await service.findAllTracks();
    return res.json(tracks);
  },

  async getOne(req: Request, res: Response) {
    const track = await service.findOneTrack(Number(req.params.id));
    return res.json(track);
  },
}