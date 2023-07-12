import { ConfigType, userConfig } from '../setWizardConfig';

export const getConfig = (configOverride?: ConfigType): ConfigType => {
  return { ...userConfig, ...configOverride };
};
