const { createLogger,format,transports } = require('winston');
require('winston-daily-rotate-file');
const fs = require('fs');
const path = require('path');

const env = process.env.NODE_ENV || 'development';
const logDir = 'log';
const datePatternConfiguration = {
    default: 'YYYY-MM-DD',
    everyHour: 'YYYY-MM-DD-HH',
    everyMinute: 'YYYY-MM-DD-THH-mm'
};
numberOfDaysToKeepLogs = 30;
fileSizeToRotate = 1; // in megabyte

// create log directory if it doesn't exist

if(!fs.existsSync(logDir)){
    fs.mkdirSync(logDir);
}

const dailyRotateFileTransport = new transports.DailyRotateFile({
    filename: `${logDir}/%DATE%-results.log`,
    datePattern: datePatternConfiguration.everyHour,
    zippedArchive: true,
    maxSize: `${fileSizeToRotate}m`,
    maxFiles: `${numberOfDaysToKeepLogs}d`,
});

const logger = createLogger({
    // change level if in dev environment versus production
    level: env === 'development' ? 'verbose' : 'info',
    handleExceptions: true,
    format: format.combine(
        format.label({label: path.basename(module.parent.filename)}),
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.printf(info => `${info.timestamp}[${info.label}] ${info.level}: ${JSON.stringify(info.message)}`),
    ),
    transports:[
        new transports.Console({
            level: 'info',
            handleExceptions: true,
            format: format.combine(
                format.label({label: path.basename(module.parent.filename)}),
                format.colorize(),
                format.printf(
                    info => `${info.timestamp}[${info.label}] ${info.level}: ${info.message}`,
                ),
            ),
        }),
        dailyRotateFileTransport,

    ],
    
});

logger.stream = {
    write: (message)=>{
        logger.info(message)
    }
}

module.exports = logger






// // import *  as  winston from 'winston';
//
// const winston = require('winston')
// require('winston-daily-rotate-file');
// // import 'winston-daily-rotate-file';
// const appRoot = require('app-root-path')
// // import appRoot from 'app-root-path';
//
// const logger = winston.createLogger({
//     transports: [
//         new winston.transports.DailyRotateFile({
//             filename: 'application-%DATE%.log',
//             dirname: `${appRoot}/logs/`,
//             level: 'info',
//             handleExceptions: true,
//             colorize: true,
//             json: false,
//             zippedArchive: true,
//             maxSize: '20m',
//             maxFiles: '14d'
//         })
//     ], exitOnError: false
// });
//
// module.exports = logger;
