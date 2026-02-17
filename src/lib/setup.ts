// Unless explicitly defined, set NODE_ENV as development:
process.env.NODE_ENV ??= 'development';
// Check for command line arguments
for (const arg of process.argv) {
	if ('-D' === arg || '--dev' === arg) {
		process.env.NODE_ENV = 'development';
	}
    if ('-P' === arg || '--prod' === arg) {
        process.env.NODE_ENV = 'production';
    }
}

import { ApplicationCommandRegistries, RegisterBehavior } from '@sapphire/framework';
import '@sapphire/plugin-logger/register';
import { setup } from '@skyra/env-utilities';
import * as colorette from 'colorette';
import { join } from 'node:path';
import { rootDir } from './constants';

// Set default behavior to bulk overwrite
ApplicationCommandRegistries.setDefaultBehaviorWhenNotIdentical(RegisterBehavior.BulkOverwrite);

// Read env var
setup({ path: join(rootDir, '.env') });

// Enable colorette
colorette.createColors({ useColor: true });
