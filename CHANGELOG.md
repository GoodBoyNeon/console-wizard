# console-wizard

## [1.4.2](https://github.com/GoodBoyNeon/console-wizard/compare/v1.4.1...v1.4.2) (2023-07-15)


### Bug Fixes

* **release:** build files ([c4d8ecb](https://github.com/GoodBoyNeon/console-wizard/commit/c4d8ecbbffdbd40e1515f1a45ae79d3f7f82f863))

## [1.4.1](https://github.com/GoodBoyNeon/console-wizard/compare/v1.4.0...v1.4.1) (2023-07-15)


### Bug Fixes

* **types:** export TableData ([e1f90fe](https://github.com/GoodBoyNeon/console-wizard/commit/e1f90fe19b9cadf548188e7334a494791ac096be))

## [1.4.0](https://github.com/GoodBoyNeon/console-wizard/compare/v1.3.2...v1.4.0) (2023-07-13)


### Features

* **logger:** add tables ([8fbe21f](https://github.com/GoodBoyNeon/console-wizard/commit/8fbe21f32c2b907db8a018275260b5f6f11c5581))


### Bug Fixes

* **table:** remove debug log statements ([8b78606](https://github.com/GoodBoyNeon/console-wizard/commit/8b786061663bba09414ae5f929787c16f0aef2a7))

## [1.3.2](https://github.com/GoodBoyNeon/console-wizard/compare/v1.0.1...v1.3.2) (2023-06-22)


### Features

* add `setWizardConfig()` ([493a674](https://github.com/GoodBoyNeon/console-wizard/commit/493a674acec8e41074c455494a113e2f84153045))


### Bug Fixes

* fix color conflict ([49fa3f6](https://github.com/GoodBoyNeon/console-wizard/commit/49fa3f61ce4635eb8faf0213ca93fd162bd6cfb9))
* fix publish workflow ([09d287a](https://github.com/GoodBoyNeon/console-wizard/commit/09d287a9bed2d0de3a82da121c01b0433e107479))
* update github workflow ([8c64b9d](https://github.com/GoodBoyNeon/console-wizard/commit/8c64b9d291bf1b521d4ecef9c6ddd7e64b5a13f6))
* update version ([3f9e931](https://github.com/GoodBoyNeon/console-wizard/commit/3f9e931f656f32fc06b673285183000882001df8))

## 1.3.0

### Minor Changes

- 3c9da94: Export types and add return statements to loggers.

  You can now import the types and interfaces declared in the lib.

  The log functions now return the provided message. (This may change in upcoming versions)

## 1.2.0

### Minor Changes

- Add configuration methods for better customization of the logs.

  Methods of configuration:

  1. User's default configuration

  ```js
  import { WizardConfig } from 'console-wizard';

  new WizardConfig({
      ...,
  });
  ```

  2. Inline configuration

  ```js

  logger.error('Message here', {
      ...,
  });
  ```

  Refer to [Configuration Guide](https://github.com/GoodBoyNeon/console-wizard/blob/main/README.md#configuration) for more information.

## 1.1.1

### Patch Changes

- 6544c2c: Patch .gitignore to not include ./lib

## 1.1.0

### Minor Changes

- 16ae0cf: Fix lib/\*\* not being included in the package

## 1.0.0

### Major Changes

- cec54b0: The first release! This adds a `logger` with `info`, `warn`, `error` and `success` functions.
