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
  }
}
