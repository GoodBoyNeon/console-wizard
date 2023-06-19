# console-wizard

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
