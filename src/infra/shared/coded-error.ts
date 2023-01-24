export abstract class CodedError extends Error {
  tag: string;

  details?: Record<string, any>;

  constructor(tag: string, message: string, details?: Record<string, any>) {
    super(message);
    this.tag = tag;
    this.details = details;
  }

  toJSON() {
    return {
      message: this.message,
      tag: this.tag,
      details: this.details,
    };
  }
}
