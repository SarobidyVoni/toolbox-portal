// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

@type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
//  */
// const sidebars = {
//   tutorialSidebar: [
//     {
//       type: 'category',
//       label: 'Toolbox',
//       collapsed: false,
//       items: [
//         'toolbox-notification',
//       ],
//     },
//   ],
// };

// export default sidebars;


const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '🔔 Notification',
      collapsed: false,
      items: [
        'notification/introduction',

        {
          type: 'category',
          label: 'Architecture',
          collapsed: true,
          items: [
            'notification/architecture',
            'notification/lifecycle',
          ],
        },

        {
          type: 'category',
          label: 'Configuration',
          collapsed: true,
          items: [
            'notification/configuration/installation',
            'notification/configuration/email-config',
            'notification/configuration/sms-config',
          ],
        },

       {
          type: 'category',
          label: 'Utilisation',
          collapsed: true,
          items: [
            'notification/usage/notification-structure',
            'notification/usage/email',
            'notification/usage/sms',
            'notification/usage/templates',
            'notification/usage/attachments',
            'notification/usage/multiple-recipients',
            'notification/usage/reading-results',
          ],
        },

        {
          type: 'category',
          label: 'Results & Errors',
          collapsed: true,
          items: [
            'notification/resultats/erreur',
            'notification/resultats/limite',
            'notification/resultats/statut',
          ],
        },

        'notification/extension',
        'notification/faq',
      ],
    },
  ],
};

export default sidebars;