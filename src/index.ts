const info = () => {};
const warn = () => {};
const error = () => {};

const logger = {
  info,
  warn,
  error,
};

const chroma = {
  logger,
};

export default chroma;

export class Chroma {
  static success(message: string) {}
  static info(message: string) {}
  static warn(message: string) {}
  static error(message: string) {}
}
