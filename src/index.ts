import {
  ApplicationCommandRegistries,
  LogLevel,
  RegisterBehavior,
  SapphireClient,
} from "@sapphire/framework";
import { GatewayIntentBits } from "discord.js";
import "@sapphire/plugin-api/register";
import "@sapphire/plugin-editable-commands/register";
import "@sapphire/plugin-logger/register";
import "@sapphire/plugin-subcommands/register";
import * as colorette from "colorette";
import { setup } from '@skyra/env-utilities';
import { join } from 'node:path';
import { srcDir } from './lib/constants';

const client = new SapphireClient({
  defaultPrefix: "!",
  caseInsensitiveCommands: true,
  logger: {
    level: LogLevel.Debug,
  },
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  loadMessageCommandListeners: true,
});

// Set default behavior to bulk overwrite
ApplicationCommandRegistries.setDefaultBehaviorWhenNotIdentical(
  RegisterBehavior.BulkOverwrite,
);

// Read env var
setup({ path: join(srcDir, '.env') });

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
      
    } else {
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
  } catch (error) {
    client.logger.fatal(error);
    await client.destroy();
    process.exit(1);
  }
};

void main();
