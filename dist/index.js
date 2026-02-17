"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
require("@sapphire/plugin-api/register");
require("@sapphire/plugin-editable-commands/register");
require("@sapphire/plugin-logger/register");
require("@sapphire/plugin-subcommands/register");
const colorette = __importStar(require("colorette"));
const env_utilities_1 = require("@skyra/env-utilities");
const node_path_1 = require("node:path");
const constants_1 = require("./lib/constants");
const client = new framework_1.SapphireClient({
    defaultPrefix: "!",
    caseInsensitiveCommands: true,
    logger: {
        level: framework_1.LogLevel.Debug,
    },
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent,
    ],
    loadMessageCommandListeners: true,
});
// Set default behavior to bulk overwrite
framework_1.ApplicationCommandRegistries.setDefaultBehaviorWhenNotIdentical(framework_1.RegisterBehavior.BulkOverwrite);
// Read env var
(0, env_utilities_1.setup)({ path: (0, node_path_1.join)(constants_1.srcDir, '.env') });
// Enable colorette
colorette.createColors({ useColor: true });
// try {
//   client.logger.info('Logging in');
//   await client.login(token);
//   client.logger.info('logged in');
// } catch (error) {
//   client.logger.fatal(error);
//   await client.destroy();
//   // Deno.exit(1);
//   process.exit(1);
// }
const main = async () => {
    let token;
    // for (const arg of Deno.args) {
    for (const arg of process.argv) {
        if ("-D" === arg || "--dev" === arg) {
            console.log("Mode développement activé");
            // Deno.env.set("NODE_ENV", "development");
            process.env.NODE_ENV = "development";
            // token = Deno.env.get("DISCORD_DEV_TOKEN");
            token = process.env.DISCORD_DEV_TOKEN;
            console.log("test", process.env.DISCORD_DEV_TOKEN);
        }
        else {
            console.log("Mode production activé");
            // Deno.env.set("NODE_ENV", "production");
            process.env.NODE_ENV = "production";
            // token = Deno.env.get("DISCORD_TOKEN");
            token = process.env.DISCORD_TOKEN;
            console.log("test", process.env.DISCORD_TOKEN);
        }
    }
    try {
        client.logger.info("Logging in");
        await client.login(token);
        client.logger.info("logged in");
    }
    catch (error) {
        client.logger.fatal(error);
        await client.destroy();
        process.exit(1);
    }
};
void main();
//# sourceMappingURL=index.js.map