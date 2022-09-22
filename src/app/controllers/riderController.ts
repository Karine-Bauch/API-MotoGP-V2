const riderDatamapper = require('../models/riderMapper');

module.exports = {
  async getAll(_: void, res: any) {
    const riders = await riderDatamapper.findAll();
    return res.json(riders);
  },

  async getOne(req: any, res: any) {
    const rider = await riderDatamapper.findOne(req.params.id);
    return res.json(rider);
  }
}