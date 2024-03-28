import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run jest-transloco-issue:serve:development',
        production: 'nx run jest-transloco-issue:serve:production',
      },
      ciWebServerCommand: 'nx run jest-transloco-issue:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
