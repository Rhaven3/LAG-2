import type { ChatInputCommandDeniedPayload, Events } from '@sapphire/framework';
import { Listener, UserError } from '@sapphire/framework';
export declare class UserEvent extends Listener<typeof Events.ChatInputCommandDenied> {
    run({ context, message: content }: UserError, { interaction }: ChatInputCommandDeniedPayload): Promise<import("discord.js").Message<boolean> | import("discord.js").InteractionResponse<boolean> | undefined>;
}
//# sourceMappingURL=chatInputCommandDenied.d.ts.map