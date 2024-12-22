import { config } from 'dotenv';
config();

import { Client, REST, Collection } from 'discord.js';

export interface Command {
        name: string,
        description: string,
        run: (client: Bot, ...args: any[]) => Promise<void>;
}

export default class Bot extends Client {
        public commands: Collection<string, Command> = new Collection();
        public SlashCommands: Command[] = [];
        public MessageCommands: Collection<string, Command> = new Collection();

        public constructor() {
                super({
                        intents: [ "Guilds", "GuildMessages", "MessageContent", "GuildBans", "GuildMembers", "DirectMessages", "DirectMessageTyping", "DirectMessageReactions", "MessageContent", "GuildVoiceStates" ]
                })
        }

        

        public async start( token: string | undefined ) {
                if( !token ) return console.error( "No token provided within the dotenv file." );

                this.login( token ).catch((err) => console.error( err ));
        }
}

const client = new Bot();
client.start( process.env.TOKEN );