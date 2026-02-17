"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSuccessLoggerData = exports.logSuccessCommand = exports.sendLoadingMessage = exports.pickRandom = void 0;
const framework_1 = require("@sapphire/framework");
const plugin_editable_commands_1 = require("@sapphire/plugin-editable-commands");
const colorette_1 = require("colorette");
const discord_js_1 = require("discord.js");
// import { RandomLoadingMessage } from './constants.ts';
const constants_1 = require("./constants");
/**
 * Picks a random item from an array
 * @param array The array to pick a random item from
 * @example
 * const randomEntry = pickRandom([1, 2, 3, 4]) // 1
 */
function pickRandom(array) {
    const { length } = array;
    return array[Math.floor(Math.random() * length)];
}
exports.pickRandom = pickRandom;
/**
 * Sends a loading message to the current channel
 * @param message The message data for which to send the loading message
 */
function sendLoadingMessage(message) {
    return (0, plugin_editable_commands_1.send)(message, { embeds: [new discord_js_1.EmbedBuilder().setDescription(pickRandom(constants_1.RandomLoadingMessage)).setColor('#FF0000')] });
}
exports.sendLoadingMessage = sendLoadingMessage;
function logSuccessCommand(payload) {
    let successLoggerData;
    if ('interaction' in payload) {
        successLoggerData = getSuccessLoggerData(payload.interaction.guild, payload.interaction.user, payload.command);
    }
    else {
        successLoggerData = getSuccessLoggerData(payload.message.guild, payload.message.author, payload.command);
    }
    framework_1.container.logger.debug(`${successLoggerData.shard} - ${successLoggerData.commandName} ${successLoggerData.author} ${successLoggerData.sentAt}`);
}
exports.logSuccessCommand = logSuccessCommand;
function getSuccessLoggerData(guild, user, command) {
    const shard = getShardInfo(guild?.shardId ?? 0);
    const commandName = getCommandInfo(command);
    const author = getAuthorInfo(user);
    const sentAt = getGuildInfo(guild);
    return { shard, commandName, author, sentAt };
}
exports.getSuccessLoggerData = getSuccessLoggerData;
function getShardInfo(id) {
    return `[${(0, colorette_1.cyan)(id.toString())}]`;
}
function getCommandInfo(command) {
    return (0, colorette_1.cyan)(command.name);
}
function getAuthorInfo(author) {
    return `${author.username}[${(0, colorette_1.cyan)(author.id)}]`;
}
function getGuildInfo(guild) {
    if (guild === null)
        return 'Direct Messages';
    return `${guild.name}[${(0, colorette_1.cyan)(guild.id)}]`;
}
//# sourceMappingURL=utils.js.map