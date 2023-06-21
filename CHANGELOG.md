# console-wizard

## [1.1.0](https://github.com/GoodBoyNeon/console-wizard/compare/v1.0.1...v1.1.0) (2023-06-21)


### Features

* add `setWizardConfig()` ([493a674](https://github.com/GoodBoyNeon/console-wizard/commit/493a674acec8e41074c455494a113e2f84153045))


### Bug Fixes

* fix color conflict ([49fa3f6](https://github.com/GoodBoyNeon/console-wizard/commit/49fa3f61ce4635eb8faf0213ca93fd162bd6cfb9))
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
