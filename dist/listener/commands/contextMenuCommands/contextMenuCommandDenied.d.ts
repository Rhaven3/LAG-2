import type { ContextMenuCommandDeniedPayload, Events } from '@sapphire/framework';
import { Listener, UserError } from '@sapphire/framework';
export declare class UserEvent extends Listener<typeof Events.ContextMenuCommandDenied> {
    run({ context, message: content }: UserError, { interaction }: ContextMenuCommandDeniedPayload): Promise<import("discord.js").Message<boolean> | import("discord.js").InteractionResponse<boolean> | undefined>;
}
//# sourceMappingURL=contextMenuCommandDenied.d.ts.map