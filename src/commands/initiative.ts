import { Command } from '@sapphire/framework';

export class InitiativeCommand extends Command {
  // Constructor.
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, { ...options });
  }


  //Ajout de la commande dans le registre de commandes de l'application
  public override registerApplicationCommands(registry: Command.Registry) {
    registry.registerChatInputCommand((builder) => builder
      .setName('initiative')
      .setDescription('Créer un trackeur d\'initative')
      .addStringOption(option =>
        option.setName('idsheets')
          .setDescription('ajouté l\'id des fiches que vous souhaité utilisé, séparé d\'une virgule '),
      )
    );
  }


  // Programme Executé lors de l'appel de la commande
  public override async chatInputRun(interaction: Command.ChatInputCommandInteraction) {

  }
}