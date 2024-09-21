export class CustomError extends Error {
  cause?: Error;  

  constructor(message: string, cause?: Error) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    if (cause) {
      this.cause = cause;
    }
    this.name = this.constructor.name;
  }

  get statusCode() {
    const errorName = this.name;

    if (errorName === 'LengthRequired') return 411;
    if (errorName === 'PayloadTooLarge') return 413;
    return 500;
  }
}

export class LengthRequired extends CustomError {
  constructor(message: string, cause?: Error) {
    super(message, cause);
  }
};

export class PayloadTooLarge extends CustomError {
  constructor(message: string, cause?: Error) {
    super(message, cause);
  }
};
