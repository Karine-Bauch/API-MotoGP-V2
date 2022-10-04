import { Request, Response } from 'express';

const trackMapper = require('../models/trackMapper');

module.exports = {
  async getAll(_: void, res: Response) {
    const tracks = await trackMapper.findAllTracks();
    return res.json(tracks);
  },

  async getOne(req: Request, res: Response) {
    const track = await trackMapper.findOneTrack(req.params.id);
    return res.json(track);
  },
}