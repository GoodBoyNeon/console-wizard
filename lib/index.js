"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  WizardConfig: () => WizardConfig,
  logger: () => logger
});
module.exports = __toCommonJS(src_exports);

// src/helpers/combineParams.ts
var combineParams = (...args) => {
  return Array.from(args).join(" ");
};

// src/helpers/getLoggingArgs.ts
var getLoggingArgs = (config, logData) => {
  const args = [`
`];
  const { includeTimestamp, includeStatus } = config;
  if (includeTimestamp)
    args.push(...[styleWrapper["fgGray"], logData.timestamp, resetWrapper]);
  if (includeStatus)
    args.push(...[styleWrapper["bgRed"], styleWrapper["bold"], logData.statusMsg, resetWrapper]);
  args.push(...[styleWrapper["fgRed"], logData.message, resetWrapper]);
  return args;
};

// src/helpers/getTimestamp.ts
var getTimestamp = () => {
  const time = convertTime((/* @__PURE__ */ new Date()).toLocaleTimeString());
  const date = (/* @__PURE__ */ new Date()).toLocaleDateString();
  return `${date} ${time}`;
};

// src/helpers/convertTime.ts
var convertTime = (time12h) => {
  const [time, modifier] = time12h.split(" ");
  if (!time || !modifier) {
    console.error("TimeString does not follow correct format.");
    return;
  }
  let [hours = "00", minutes, seconds] = time.split(":");
  if (hours === "12") {
    hours = "00";
  }
  if (modifier === "PM") {
    hours = (parseInt(hours, 10) + 12).toString();
  }
  return `${hours}:${minutes}:${seconds}`;
};

// src/helpers/styles.ts
var styleWrapper = {
  reset: "\x1B[0m",
  bold: "\x1B[1m",
  // This lightens the color as a side-effect
  dim: "\x1B[2m",
  italic: "\x1B[3m",
  underscore: "\x1B[4m",
  blink: "\x1B[5m",
  reverse: "\x1B[7m",
  hidden: "\x1B[8m",
  strike: "\x1B[9m",
  fgBlack: "\x1B[30m",
  fgRed: "\x1B[31m",
  fgGreen: "\x1B[32m",
  fgYellow: "\x1B[33m",
  fgBlue: "\x1B[34m",
  fgMagenta: "\x1B[35m",
  fgCyan: "\x1B[36m",
  fgWhite: "\x1B[37m",
  fgGray: "\x1B[90m",
  bgBlack: "\x1B[40m",
  bgRed: "\x1B[41m",
  bgGreen: "\x1B[42m",
  bgYellow: "\x1B[43m",
  bgBlue: "\x1B[44m",
  bgMagenta: "\x1B[45m",
  bgCyan: "\x1B[46m",
  bgWhite: "\x1B[47m",
  bgGray: "\x1B[100m"
};
var resetWrapper = "\x1B[0m";

// src/wizardConfig.ts
var defaultConfig = {
  includeTimestamp: true,
  includeStatus: true
};
var userConfig = defaultConfig;
var WizardConfig = class {
  constructor(config) {
    userConfig = __spreadValues(__spreadValues({}, defaultConfig), config);
  }
};

// src/logger/error.ts
var timestamp = `[${getTimestamp()}]`;
var error = (message, userConfigOverride) => {
  const statusMsg = "ERROR ";
  const finalConfig = __spreadValues(__spreadValues({}, userConfig), userConfigOverride);
  const loggingArgs = getLoggingArgs(finalConfig, {
    statusMsg,
    message,
    timestamp
  });
  const args = combineParams(loggingArgs.join(" "));
  console.log(args);
  return message;
};

// src/logger/info.ts
var timestamp2 = `[${getTimestamp()}]`;
var info = (message, userConfigOverride) => {
  const statusMsg = "INFO ";
  const finalConfig = __spreadValues(__spreadValues({}, userConfig), userConfigOverride);
  const loggingArgs = getLoggingArgs(finalConfig, {
    statusMsg,
    message,
    timestamp: timestamp2
  });
  const args = combineParams(loggingArgs.join(" "));
  console.log(args);
  return message;
};

// src/logger/success.ts
var timestamp3 = `[${getTimestamp()}]`;
var success = (message, userConfigOverride) => {
  const statusMsg = "SUCCESS ";
  const finalConfig = __spreadValues(__spreadValues({}, userConfig), userConfigOverride);
  const loggingArgs = getLoggingArgs(finalConfig, {
    statusMsg,
    message,
    timestamp: timestamp3
  });
  const args = combineParams(loggingArgs.join(" "));
  console.log(args);
  return message;
};

// src/logger/warn.ts
var timestamp4 = `[${getTimestamp()}]`;
var warn = (message, userConfigOverride) => {
  const statusMsg = "WARN ";
  const finalConfig = __spreadValues(__spreadValues({}, userConfig), userConfigOverride);
  const loggingArgs = getLoggingArgs(finalConfig, {
    statusMsg,
    message,
    timestamp: timestamp4
  });
  const args = combineParams(loggingArgs.join(" "));
  console.log(args);
  return message;
};

// src/index.ts
var logger = {
  error,
  info,
  success,
  warn
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  WizardConfig,
  logger
});
