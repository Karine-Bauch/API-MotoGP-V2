import { Request, Response, NextFunction } from 'express';

module.exports = (controller: any) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await controller(req, res, next);
  } catch (err: any) {
    res.status(err.statusCode).json({
      status: 'Error',
      statusCode: err.statusCode,
      message: err.message
    });
  }
}