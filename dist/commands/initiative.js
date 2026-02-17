"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitiativeCommand = void 0;
const framework_1 = require("@sapphire/framework");
class InitiativeCommand extends framework_1.Command {
    //Ajout de la commande dans le registre de commandes de l'application
    registerApplicationCommands(registry) {
        registry.registerChatInputCommand((builder) => builder
            .setName('initiative')
            .setDescription('Créer un trackeur d\'initative')
            .addStringOption(option => option.setName('idsheets')
            .setDescription('ajouté l\'id des fiches que vous souhaité utilisé, séparé d\'une virgule ')));
    }
}
exports.InitiativeCommand = InitiativeCommand;
//# sourceMappingURL=initiative.js.map