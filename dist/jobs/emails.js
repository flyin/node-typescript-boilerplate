"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../utils/logger");
const concurrency = 10;
const job = (queue) => queue.process('process-email', concurrency, (job, done) => {
    logger_1.logger.info('job received', job.data);
    setTimeout(() => {
        console.log('job done');
        done();
    }, 1000);
});
exports.job = job;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2pvYnMvZW1haWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNENBQXdDO0FBRXhDLE1BQU0sV0FBVyxHQUFXLEVBQUUsQ0FBQTtBQUU5QixNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQWdCLEtBQUssS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsV0FBVyxFQUFFLENBQUMsR0FBWSxFQUFFLElBQWM7SUFDekcsZUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBRXJDLFVBQVUsQ0FBQztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDdkIsSUFBSSxFQUFFLENBQUE7SUFDUixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDVixDQUFDLENBQUMsQ0FBQTtBQUVPLGtCQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMga3VlIGZyb20gJ2t1ZSdcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uL3V0aWxzL2xvZ2dlcidcblxuY29uc3QgY29uY3VycmVuY3k6IG51bWJlciA9IDEwXG5cbmNvbnN0IGpvYiA9IChxdWV1ZToga3VlLlF1ZXVlKSA9PiBxdWV1ZS5wcm9jZXNzKCdwcm9jZXNzLWVtYWlsJywgY29uY3VycmVuY3ksIChqb2I6IGt1ZS5Kb2IsIGRvbmU6IEZ1bmN0aW9uKSA9PiB7XG4gIGxvZ2dlci5pbmZvKCdqb2IgcmVjZWl2ZWQnLCBqb2IuZGF0YSlcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnam9iIGRvbmUnKVxuICAgIGRvbmUoKVxuICB9LCAxMDAwKVxufSlcblxuZXhwb3J0IHsgam9iIH1cbiJdfQ==