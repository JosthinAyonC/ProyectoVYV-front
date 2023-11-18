export interface IError {
  error?: {
    timestamp?: string;
    status?: 400;
    message?: string;
    details?: string;
  };
}
