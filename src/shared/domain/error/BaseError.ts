export default class BaseError extends Error {
  public readonly customCode: string;
  public readonly statusCode: number;

  constructor({ message, customCode, statusCode = 400 }: { message: string, customCode: string, statusCode?: number }) {
    super(message);
    this.name = this.constructor.name;
    this.customCode = customCode;
    this.statusCode = statusCode;
  }

  static throws({ message, customCode, statusCode }: { message: string, customCode: string, statusCode?: number }) {
    throw new this({ message, customCode, statusCode });
  }

  static notFound(entity: string) {
    this.throws({
      message: `${entity} not found`,
      customCode: 'NTF_404'
    });
  }

  static invalid(id: string, entity: string) {
    this.throws({
     message: `Invalid ${entity} id ${id}`,
     customCode: `INV_01`
    });
   }
}
