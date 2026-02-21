import { ApplyOptions } from '@sapphire/decorators';
import { Subcommand } from '@sapphire/plugin-subcommands';

@ApplyOptions<Subcommand.Options>({
  description: 'Permet la gestion des rencontres',
	subcommands: [
        {
            name: 'add',
            messageRun: 'messageAdd'
        },
		{
			name: 'create',
			messageRun: 'messageCreate'
		},
		{
			name: 'remove',
			messageRun: 'messageRemove'
		},
		{
			name: 'reset',
			messageRun: 'messageReset'
		},
		{
			name: 'show',
			messageRun: 'messageShow',
			default: true
		}
    ]
})
export class EncounterCommand extends Subcommand {
  //Ajout de la commande dans le registre de commandes de l'application
  public override registerApplicationCommands(registry: Subcommand.Registry) {
    registry.registerChatInputCommand((builder) => builder
      .setName(this.name)
      .setDescription(this.description)
      .addSubcommand((subcommand) => subcommand
        .setName('add')
        .setDescription('Ajouter une creature ou un personnage à la rencontre')
        .addStringOption((option) => option
            .setName('idEncounter')
            .setDescription('L\'id de la rencontre à laquelle ajouter la/les creature ou le personnage')
            .setRequired(true)
        )
        .addStringOption((option) => option
            .setName('idCharacter')
            .setDescription('L\'id de la/les creature ou du personnage à ajouter ("," séparateur)')
            .setRequired(true)
        )
      )
    );
  }


  // Programme Executé lors de l'appel de la commande
  public override async chatInputRun(interaction: Subcommand.ChatInputCommandInteraction) {
    console.log("test");
  }
}