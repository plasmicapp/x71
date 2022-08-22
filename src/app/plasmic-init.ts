import { initPlasmicLoader } from '@plasmicapp/loader-angular';
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: 'j36vGbmHUeCqoGsZdg9ccJ', // ID of a project you are using
      token:
        'C87nWCc90uftuj1FKZ2t5rRBjxDKzvhPCKDNEcpeN6kazzphzKxCfvhEyRlfndNuDMfjZ6LFWs3SKgJbtSYA', // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});
