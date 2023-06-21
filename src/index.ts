import { error, info, success, warn } from './logger';

export const logger = {
  error,
  info,
  success,
  warn,
};

export { WizardConfig, ConfigType, setWizardConfig } from './wizardConfig';
export { LogDataType } from './helpers/getLoggingArgs';
