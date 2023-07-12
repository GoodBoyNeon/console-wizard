import { error, info, success, warn, table } from './logger';

export const logger = {
  error,
  info,
  success,
  warn,
  table,
};

export { WizardConfig, ConfigType, setWizardConfig } from './setWizardConfig';
export { LogDataType } from './helpers/getLoggingArgs';
