<h1 align="center">Console Wizard</h1>
<h6 align="center">A minimal yet colorful and customizable alternative to javascript's default logger.</h6>

## Installation

```py
npm install console-wizard --save
# or
yarn add console-wizard
```

## Usage

```js
import { logger } from 'console-wizard';

logger.error('Invalid syntax for database query!');
logger.info('Environment: Development');
logger.success('All tests passed!');
logger.warn('getDataById() has been depreciated! Use getData instead()');
```

### Output:
