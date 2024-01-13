class ApiError extends Error {
  statusCode: number;
  details?: Record<string, any>;

  constructor(
    statusCode: number,
    message: string,
    details?: Record<string, any>,
    stack: string = ''
  ) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
