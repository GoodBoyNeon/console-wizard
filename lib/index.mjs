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

// src/helpers/getTimestamp.ts
var getTimestamp = () => {
  const time = convertTime((/* @__PURE__ */ new Date()).toLocaleTimeString());
  const date = (/* @__PURE__ */ new Date()).toLocaleDateString();
  return `${date} ${time}`;
};

// src/helpers/styles.ts
var styleWrapper = {
  reset: "\x1B[0m",
  bold: "\x1B[1m",
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

// src/logger/error.ts
var timestamp = `[${getTimestamp()}]`;
var error = (message) => {
  const statusMsg = "ERROR ";
  return console.log(
    `
`,
    styleWrapper["fgGray"],
    timestamp,
    resetWrapper,
    styleWrapper["bgRed"],
    styleWrapper["bold"],
    statusMsg,
    resetWrapper,
    styleWrapper["fgRed"],
    message,
    resetWrapper
  );
};

// src/logger/info.ts
var timestamp2 = `[${getTimestamp()}]`;
var info = (message) => {
  const statusMsg = "INFO ";
  return console.log(
    `
`,
    styleWrapper["fgGray"],
    timestamp2,
    resetWrapper,
    styleWrapper["bgBlue"],
    styleWrapper["bold"],
    statusMsg,
    resetWrapper,
    styleWrapper["fgBlue"],
    message,
    resetWrapper
  );
};

// src/logger/success.ts
var timestamp3 = `[${getTimestamp()}]`;
var success = (message) => {
  const statusMsg = "SUCCESS ";
  return console.log(
    `
`,
    styleWrapper["fgGray"],
    timestamp3,
    resetWrapper,
    styleWrapper["bgGreen"],
    styleWrapper["bold"],
    statusMsg,
    resetWrapper,
    styleWrapper["fgGreen"],
    message,
    resetWrapper
  );
};

// src/logger/warn.ts
var timestamp4 = `[${getTimestamp()}]`;
var warn = (message) => {
  const statusMsg = "WARN ";
  return console.log(
    `
`,
    styleWrapper["fgGray"],
    timestamp4,
    resetWrapper,
    styleWrapper["bgYellow"],
    styleWrapper["bold"],
    statusMsg,
    resetWrapper,
    styleWrapper["fgYellow"],
    message,
    resetWrapper
  );
};

// src/index.ts
var logger = {
  error,
  info,
  success,
  warn
};
export {
  logger
};
