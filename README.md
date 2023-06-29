<div align="center">
	<br />
	<p>
    <h1 align="center">🌈 Console Wizard</h1>
  <h6 align="center">🚀 A minimal yet colorful and customizable alternative to javascript's default logger.</h6>
	</p>
	<br />
	<p>
    <a href="https://www.npmjs.com/package/console-wizard"><img src="https://img.shields.io/npm/v/console-wizard?style=flat-square&logo=npm"</a>
		<a href="https://www.npmjs.com/package/console-wizard"><img src="https://img.shields.io/npm/dt/console-wizard?style=flat-square&logo=npm"/></a>
    <a href="https://www.github.com/GoodBoyNeon/console-wizard"><img src="https://img.shields.io/github/issues/GoodBoyNeon/console-wizard?style=flat-square&logo=github" /></a>
    <a href="https://www.github.com/GoodBoyNeon/console-wizard"><img src="https://img.shields.io/github/issues-pr/GoodBoyNeon/console-wizard?style=flat-square&logo=github" /></a>
    <a href="https://www.github.com/GoodBoyNeon/console-wizard"><img src="https://img.shields.io/github/actions/workflow/status/GoodBoyNeon/console-wizard/build.yml?style=flat-square&logo=github" /></a>
	</p>
</div>

#### Contents

<!--toc:start-->

- [Installation](#installation)
- [Usage](#usage)
  - [Output:](#output)
- [Configuration](#configuration)
  - [Configuring each log statement](#configuring-each-log-statement)
- [Author](#author)
- [License](#license)
<!--toc:end-->

---

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

## Configuration

You can set up the user default configuration by:

```js
import { setWizardConfig } from 'console-wizard';

setWizardConfig({
  /* Weather to include timestamp in the log */
  includeTimestamp: true,

  /* Weather to include status in the log (Ex. "ERROR", "WARN" etc) */
  includeStatus: true,
});
```

The above configuration would apply for all the loggers in the codebase, except for the ones that have their own configuration (more on that here: [#Configuring each log statement]())

**Note that configuring Console Wizard is completely optional!** It ships with the above configuration by default!

#### Configuring each log statement

Additionally, you can also configure each log statement. For example

```js
import { logger } from 'console-wizard';

logger.info('New GET request on /v1/users', {
  includeTimestamp: false,
});
```

> If both user default configuration (using WizardConfig class) and inline configuration are provided, the configurations are combined with inline one being superior.

## Author

- [GoodBoyNeon](https://neon.is-a.dev/)

## License

[MIT License](https://mit-license.org/)
