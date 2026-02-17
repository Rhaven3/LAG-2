import type { ChatInputCommandSuccessPayload, Command, ContextMenuCommandSuccessPayload, MessageCommandSuccessPayload } from '@sapphire/framework';
import { type Guild, type Message, type User } from 'discord.js';
/**
 * Picks a random item from an array
 * @param array The array to pick a random item from
 * @example
 * const randomEntry = pickRandom([1, 2, 3, 4]) // 1
 */
export declare function pickRandom<T>(array: readonly T[]): T;
/**
 * Sends a loading message to the current channel
 * @param message The message data for which to send the loading message
 */
export declare function sendLoadingMessage(message: Message): Promise<typeof message>;
export declare function logSuccessCommand(payload: ContextMenuCommandSuccessPayload | ChatInputCommandSuccessPayload | MessageCommandSuccessPayload): void;
export declare function getSuccessLoggerData(guild: Guild | null, user: User, command: Command): {
    shard: string;
    commandName: string;
    author: string;
    sentAt: string;
};
//# sourceMappingURL=utils.d.ts.map