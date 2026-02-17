import { Command } from '@sapphire/framework';
import { Message } from 'discord.js';
export declare class UserCommand extends Command {
    registerApplicationCommands(registry: Command.Registry): void;
    messageRun(message: Message): Promise<Message<boolean> | undefined>;
    chatInputRun(interaction: Command.ChatInputCommandInteraction): Promise<Message<boolean> | undefined>;
    contextMenuRun(interaction: Command.ContextMenuCommandInteraction): Promise<Message<boolean> | undefined>;
    private sendPing;
}
//# sourceMappingURL=ping.d.ts.map