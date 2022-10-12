import { Request, Response, NextFunction } from 'express';

module.exports = (controller: any) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await controller(req, res, next);
  } catch (err: any) {
    if (Number.isNaN(Number(err.statusCode))) {
      err.statusCode = 500;
    };

    res.status(err.statusCode).json({
      status: 'Error',
      statusCode: err.statusCode,
      message: err.message
    });
  }
}

// export function controllerHandler(controller: any): any {
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       await controller(req, res, next);
//     } catch (err: any) {
//       if (Number.isNaN(Number(err.statusCode))) {
//         err.statusCode = 500;
//       };

//       res.status(err.statusCode).json({
//         status: 'Error',
//         statusCode: err.statusCode,
//         message: err.message
//       });
//     }
//   }
// }