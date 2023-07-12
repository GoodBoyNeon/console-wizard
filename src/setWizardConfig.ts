import { TableBorder, defaultTableBorder } from './helpers/tableCharacters';

export interface ConfigType {
  includeTimestamp?: boolean;
  includeStatus?: boolean;
  tableBorder?: TableBorder;
  includeSN?: boolean;
}

const defaultConfig: Required<ConfigType> = {
  includeTimestamp: true,
  includeStatus: true,
  tableBorder: defaultTableBorder,
  includeSN: false,
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
