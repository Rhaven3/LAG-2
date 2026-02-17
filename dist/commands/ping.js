"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
let UserCommand = class UserCommand extends framework_1.Command {
    // Register Chat Input and Context Menu command
    registerApplicationCommands(registry) {
        // Create shared integration types and contexts
        // These allow the command to be used in guilds and DMs
        const integrationTypes = [discord_js_1.ApplicationIntegrationType.GuildInstall, discord_js_1.ApplicationIntegrationType.UserInstall];
        const contexts = [
            discord_js_1.InteractionContextType.BotDM,
            discord_js_1.InteractionContextType.Guild,
            discord_js_1.InteractionContextType.PrivateChannel
        ];
        // Register Chat Input command
        registry.registerChatInputCommand({
            name: this.name,
            description: this.description,
            integrationTypes,
            contexts
        });
        // Register Context Menu command available from any message
        registry.registerContextMenuCommand({
            name: this.name,
            type: discord_js_1.ApplicationCommandType.Message,
            integrationTypes,
            contexts
        });
        // Register Context Menu command available from any user
        registry.registerContextMenuCommand({
            name: this.name,
            type: discord_js_1.ApplicationCommandType.User,
            integrationTypes,
            contexts
        });
    }
    // Message command
    async messageRun(message) {
        return this.sendPing(message);
    }
    // Chat Input (slash) command
    async chatInputRun(interaction) {
        return this.sendPing(interaction);
    }
    // Context Menu command
    async contextMenuRun(interaction) {
        return this.sendPing(interaction);
    }
    async sendPing(interactionOrMessage) {
        const pingMessage = interactionOrMessage instanceof discord_js_1.Message
            ? interactionOrMessage.channel?.isSendable() && (await interactionOrMessage.channel.send({ content: 'Ping?' }))
            : await interactionOrMessage.reply({ content: 'Ping?', fetchReply: true });
        if (!pingMessage)
            return;
        const content = `Pong! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${pingMessage.createdTimestamp - interactionOrMessage.createdTimestamp}ms.`;
        if (interactionOrMessage instanceof discord_js_1.Message) {
            return pingMessage.edit({ content });
        }
        return interactionOrMessage.editReply({
            content
        });
    }
};
exports.UserCommand = UserCommand;
exports.UserCommand = UserCommand = __decorate([
    (0, decorators_1.ApplyOptions)({
        description: 'ping pong'
    })
], UserCommand);
//# sourceMappingURL=ping.js.map