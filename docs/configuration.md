# Configuration

## Default Configuration

```js
const defaultConfig = {
  /* Add timestamp at the start of a log message (expcept in tables) */
  includeTimestamp: true,

  /* Add the LogType ('INFO', 'SUCCESS', 'WARN', 'ERROR') after timestamp (if included) */
  includeStatus: true,

  /* Add a row of number count in tables */
  includeSN: false,

  /* Default characters used to display tables */
  tableBorder: {
    cornerTL: '┌',
    cornerTR: '┐',
    cornerBL: '└',
    cornerBR: '┘',
    edgeVertical: '│',
    edgeHorizontal: '─',
    intersectionTLR: '┴',
    intersectionBLR: '┬',
    intersectionTBL: '├',
    intersectionTBR: '┤',
    intersectionCenter: '┼',
  },
};
```

## Defining Custom Configurations (global)

To set a user-defined configuration to use for the project, use the `setWizardConfig()` function.

```js
import { setWizardConfig } from 'console-wizard';

setWizardConfig(ConfigType);
```

## Defining Custom Configurations (local/individual)

You can also set different configurations for individual log statements.

```js
import { logger } from 'console-wizard';

logger.success('...', ConfigType);
logger.info('...', ConfigType);
logger.warn('...', ConfigType);
logger.error('...', ConfigType);

logger.table([...], { tableBorder: ..., includeSN: ...})
```

All the logger methods accept a custom config of the type `ConfigType` (exported from library)
except for `table`, whose config's type is `Pick<ConfigType, 'tableBorder' | 'includeSN'` instead.
