import { useMainPlayer } from 'discord-player';
import { sync } from 'glob';
import Client from '../index';

export async function loadEvents(client: Client) {
        const eventFiles = sync('./events/**/*.ts');
}