"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEvent = void 0;
const framework_1 = require("@sapphire/framework");
const utils_1 = require("../../../lib/utils");
class UserEvent extends framework_1.Listener {
    run(payload) {
        (0, utils_1.logSuccessCommand)(payload);
    }
    onLoad() {
        this.enabled = this.container.logger.level <= framework_1.LogLevel.Debug;
        return super.onLoad();
    }
}
exports.UserEvent = UserEvent;
//# sourceMappingURL=messageCommandSuccess.js.map