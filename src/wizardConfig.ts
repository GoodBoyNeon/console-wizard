export interface ConfigType {
  includeTimestamp?: boolean;
  includeStatus?: boolean;
}

const defaultConfig: Required<ConfigType> = {
  includeTimestamp: true,
  includeStatus: true,
};

export let userConfig: ConfigType = defaultConfig;

export class WizardConfig {
  constructor(config: ConfigType) {
    userConfig = { ...defaultConfig, ...config };
    console.log('WARNING: `new WizardConfig()` is depreciated! Use `setWizardConfig()` instead.');
  }
}

export const setWizardConfig = (config: ConfigType): ConfigType => {
  userConfig = { ...defaultConfig, ...config };
  return userConfig;
};
