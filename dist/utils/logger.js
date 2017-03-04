"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const moment = require("moment");
exports.logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            formatter(options) {
                /* tslint:disable-next-line max-line-length */
                return `${options.timestamp()} ${options.level} [${process.env.APP_ENV || 'UNKNOW ENV'}] ${(options.message ? options.message : '')} ${options.meta && Object.keys(options.meta).length ? `\n\t${JSON.stringify(options.meta)}` : ''}`;
            },
            timestamp() {
                return moment().format();
            }
        })
    ]
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFrQztBQUNsQyxpQ0FBZ0M7QUFFbkIsUUFBQSxNQUFNLEdBQTJCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakUsVUFBVSxFQUFFO1FBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0IsU0FBUyxDQUFFLE9BQThCO2dCQUN2Qyw4Q0FBOEM7Z0JBQzlDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLFlBQVksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUE7WUFDeE8sQ0FBQztZQUVELFNBQVM7Z0JBQ1AsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFBO1lBQzFCLENBQUM7U0FDRixDQUFDO0tBQ0g7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3aW5zdG9uIGZyb20gJ3dpbnN0b24nXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5leHBvcnQgY29uc3QgbG9nZ2VyOiB3aW5zdG9uLkxvZ2dlckluc3RhbmNlID0gbmV3ICh3aW5zdG9uLkxvZ2dlcikoe1xuICB0cmFuc3BvcnRzOiBbXG4gICAgbmV3ICh3aW5zdG9uLnRyYW5zcG9ydHMuQ29uc29sZSkoe1xuICAgICAgZm9ybWF0dGVyIChvcHRpb25zOiB3aW5zdG9uLkxvZ2dlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmUtbGVuZ3RoICovXG4gICAgICAgIHJldHVybiBgJHtvcHRpb25zLnRpbWVzdGFtcCgpfSAke29wdGlvbnMubGV2ZWx9IFske3Byb2Nlc3MuZW52LkFQUF9FTlYgfHwgJ1VOS05PVyBFTlYnfV0gJHsob3B0aW9ucy5tZXNzYWdlID8gb3B0aW9ucy5tZXNzYWdlIDogJycpfSAke29wdGlvbnMubWV0YSAmJiBPYmplY3Qua2V5cyhvcHRpb25zLm1ldGEpLmxlbmd0aCA/IGBcXG5cXHQke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMubWV0YSl9YCA6ICcnfWBcbiAgICAgIH0sXG5cbiAgICAgIHRpbWVzdGFtcCAoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudCgpLmZvcm1hdCgpXG4gICAgICB9XG4gICAgfSlcbiAgXVxufSlcbiJdfQ==