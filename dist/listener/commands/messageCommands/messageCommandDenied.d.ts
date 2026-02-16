import type { Events, MessageCommandDeniedPayload } from '@sapphire/framework';
import { Listener, type UserError } from '@sapphire/framework';
export declare class UserEvent extends Listener<typeof Events.MessageCommandDenied> {
    run({ context, message: content }: UserError, { message }: MessageCommandDeniedPayload): Promise<import("discord.js").OmitPartialGroupDMChannel<import("discord.js").Message<boolean>> | undefined>;
}
//# sourceMappingURL=messageCommandDenied.d.ts.map