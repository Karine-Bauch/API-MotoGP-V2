"use strict";
const riderDatamapper = require('../models/riderMapper');
module.exports = {
    async getAll(_, res) {
        const riders = await riderDatamapper.findAll();
        return res.json(riders);
    },
    async getOne(req, res) {
        const rider = await riderDatamapper.findOne(req.params.id);
        return res.json(rider);
    },
    async getByNumber(req, res) {
        const rider = await riderDatamapper.findByNumber(req.params.id);
        return res.json(rider);
    }
};
