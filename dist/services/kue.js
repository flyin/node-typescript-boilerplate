"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kue = require("kue");
const settings_1 = require("./settings");
const queue = kue.createQueue({
    redis: {
        redisHost: settings_1.settings.redisHost,
        redisPort: settings_1.settings.redisPort
    }
});
exports.queue = queue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3VlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL2t1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJCQUEwQjtBQUMxQix5Q0FBcUM7QUFFckMsTUFBTSxLQUFLLEdBQWMsR0FBRyxDQUFDLFdBQVcsQ0FBQztJQUN2QyxLQUFLLEVBQUU7UUFDTCxTQUFTLEVBQUUsbUJBQVEsQ0FBQyxTQUFTO1FBQzdCLFNBQVMsRUFBRSxtQkFBUSxDQUFDLFNBQVM7S0FDOUI7Q0FDRixDQUFDLENBQUE7QUFFTSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGt1ZSBmcm9tICdrdWUnXG5pbXBvcnQgeyBzZXR0aW5ncyB9IGZyb20gJy4vc2V0dGluZ3MnXG5cbmNvbnN0IHF1ZXVlOiBrdWUuUXVldWUgPSBrdWUuY3JlYXRlUXVldWUoe1xuICByZWRpczoge1xuICAgIHJlZGlzSG9zdDogc2V0dGluZ3MucmVkaXNIb3N0LFxuICAgIHJlZGlzUG9ydDogc2V0dGluZ3MucmVkaXNQb3J0XG4gIH1cbn0pXG5cbmV4cG9ydCB7cXVldWV9XG4iXX0=