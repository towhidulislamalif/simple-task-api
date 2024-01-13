import { Response } from 'express';

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

const sendApiResponse = <T>(
  res: Response,
  statusCode: number,
  responseData: ApiResponse<T>
): void => {
  res.status(statusCode).json({
    success: responseData.success,
    message: responseData.message,
    data: responseData.data,
  });
};

export default sendApiResponse;
