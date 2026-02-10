import { REST, Routes } from "discord.js";
import iconfig from "../config.json" with { type: "json" };
const config = iconfig as Config;



let token = "";
let clientId = "";
let guildId = "";
for (const arg of Deno.args) {
  if ("-D" === arg || "--dev" === arg) {
    console.log("Mode développement activé");
    token = Deno.env.get("DISCORD_DEV_TOKEN") as string;
    clientId = config.dev.clientId;
    guildId = config.dev.guildId;
  } else {
    console.log("Mode production activé");
    token = Deno.env.get("DISCORD_TOKEN") as string;
    clientId = config.prod.clientId;
    guildId = config.prod.guildId;
  }
}


const rest = new REST().setToken(token);

// // for guild-based commands
rest
  .put(Routes.applicationGuildCommands(clientId, guildId), {
    body: [],
  })
  .then(() => console.log("Successfully deleted all guild commands."))
  .catch(console.error);

// for global commands
rest
  .put(Routes.applicationCommands(clientId), { body: [] })
  .then(() => console.log("Successfully deleted all application commands."))
  .catch(console.error);

// Interface
interface Config {
  type: string;
  dev: {
    guildId: string;
    clientId: string;
  };
  prod: {
    guildId: string;
    clientId: string;
  };
}
