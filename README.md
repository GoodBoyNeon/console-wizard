<div align="center">
	<br />
	<p>
    <h1 align="center">Console Wizard</h1>
  <h6 align="center">A minimal yet colorful and customizable alternative to javascript's default logger.</h6>
	</p>
	<br />
	<p>
    <a href="https://www.npmjs.com/package/console-wizard"><img src="https://img.shields.io/npm/v/console-wizard?style=flat-square&logo=appveyor" alt="NPM Version" /></a>
		<a href="https://www.npmjs.com/package/console-wizard"><img src="https://img.shields.io/npm/dt/console-wizard" alt="NPM Download Count" /></a>
	</p>
</div>

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

#### Output:

![image](https://github.com/GoodBoyNeon/console-wizard/assets/93624576/fdee992a-bab8-4b97-9a4a-2d7736867237)

## Author

- [GoodBoyNeon](https://neon.is-a.dev/)

## License

[MIT License](https://mit-license.org/)
