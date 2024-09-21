type ErrorInfo = {
  status: number;
  name: string;
  message: string;
  type: string;
  stack: string;
};

export const getErrorInformation = (err: any) => {
  return {
    status: err.statusCode || err.status || 500,
    name: err.name ?? 'Unknown error name',
    message: err.message ?? 'Unknown error message',
    type: err.type ?? 'Unknown error type',
    stack: err.stack ?? '',
  } as ErrorInfo;
};
