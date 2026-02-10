import { SapphireClient } from "@sapphire/framework";
import { GatewayIntentBits } from "discord.js";

let token;
for (const arg of Deno.args) {
  if ("-D" === arg || "--dev" === arg) {
    console.log("Mode développement activé");
    token = Deno.env.get("DISCORD_DEV_TOKEN");
  } else {
    console.log("Mode production activé");
    token = Deno.env.get("DISCORD_TOKEN");
  }
}

const client = new SapphireClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.login(token);
console.log("connecté !");
