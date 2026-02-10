import { REST, Routes } from "discord.js";
import iconfig from "../config.json" with { type: "json" };

const config = iconfig as Config;
const token = Deno.env.get("DISCORD_TOKEN") as string;
const rest = new REST().setToken(token);

// // for guild-based commands
rest
  .put(Routes.applicationGuildCommands(config.clientId, config.guildId), {
    body: [],
  })
  .then(() => console.log("Successfully deleted all guild commands."))
  .catch(console.error);

// for global commands
rest
  .put(Routes.applicationCommands(config.clientId), { body: [] })
  .then(() => console.log("Successfully deleted all application commands."))
  .catch(console.error);

// Interface
interface Config {
  type: string;
  guildId: string;
  clientId: string;
}
