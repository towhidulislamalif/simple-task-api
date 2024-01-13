import { Request, RequestHandler, Response, NextFunction } from 'express';

// Utility function for handling asynchronous request handlers
const asyncHandler = (fn: RequestHandler) => {
  return function (req: Request, res: Response, next: NextFunction) {
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
  };
};

export default asyncHandler;
