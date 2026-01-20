import { SapphireClient } from "@sapphire/framework";
import { GatewayIntentBits } from "discord.js";
const token = Deno.env.get("DISCORD_TOKEN")

const client = new SapphireClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});


client.login(token)
console.log("connecté !");
