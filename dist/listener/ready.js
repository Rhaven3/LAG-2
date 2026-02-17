"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEvent = void 0;
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const colorette_1 = require("colorette");
// const dev = Deno.env.get("NODE_ENV") !== 'production';
const dev = process.env.NODE_ENV !== 'production';
let UserEvent = class UserEvent extends framework_1.Listener {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "style", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: dev ? colorette_1.yellow : colorette_1.blue
        });
    }
    run() {
        this.printBanner();
        this.printStoreDebugInformation();
    }
    printBanner() {
        const success = (0, colorette_1.green)('+');
        const llc = dev ? colorette_1.magentaBright : colorette_1.white;
        const blc = dev ? colorette_1.magenta : colorette_1.blue;
        const line01 = llc('');
        const line02 = llc('');
        const line03 = llc('');
        // Offset Pad
        const pad = ' '.repeat(7);
        console.log(String.raw `
${line01} ${pad}${blc('1.0.0')}
${line02} ${pad}[${success}] Gateway
${line03}${dev ? ` ${pad}${blc('<')}${llc('/')}${blc('>')} ${llc('DEVELOPMENT MODE')}` : ''}
		`.trim());
    }
    printStoreDebugInformation() {
        const { client, logger } = this.container;
        const stores = [...client.stores.values()];
        const last = stores.pop();
        for (const store of stores)
            logger.info(this.styleStore(store, false));
        logger.info(this.styleStore(last, true));
    }
    styleStore(store, last) {
        return (0, colorette_1.gray)(`${last ? '└─' : '├─'} Loaded ${this.style(store.size.toString().padEnd(3, ' '))} ${store.name}.`);
    }
};
exports.UserEvent = UserEvent;
exports.UserEvent = UserEvent = __decorate([
    (0, decorators_1.ApplyOptions)({ once: true })
], UserEvent);
//# sourceMappingURL=ready.js.map