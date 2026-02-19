import { ApplyOptions } from '@sapphire/decorators';
import { Command } from '@sapphire/framework';

@ApplyOptions<Command.Options>({
  description: 'Créer un trackeur d\'initative'
})
export class InitiativeCommand extends Command {
  //Ajout de la commande dans le registre de commandes de l'application
  public override registerApplicationCommands(registry: Command.Registry) {
    registry.registerChatInputCommand((builder) => builder
      .setName(this.name)
      .setDescription(this.description)
      .addStringOption(option =>
        option.setName('idSheet')
          .setDescription('Ajouté l\'id des fiches que vous souhaité utilisé, séparé d\'une virgule'),
      )
    );
  }


  // Programme Executé lors de l'appel de la commande
  public override async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
    console.log("test");
  }
}