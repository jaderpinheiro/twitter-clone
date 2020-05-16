declare namespace Express {
  export interface IRequest {
    user: {
      id: string;
      email: string;
    };
  }
}
