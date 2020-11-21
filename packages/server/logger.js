import winston from 'winston';

export default winston.createLogger({
  format: winston.format.prettyPrint(),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'debug.log' }),
  ],
});
