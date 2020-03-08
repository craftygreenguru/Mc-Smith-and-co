export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e65531a115ce0f821432465',
                  title: 'Sanity Studio',
                  name: 'Mc-Smith-and-co-studio',
                  apiId: '5c71063d-fd62-4bec-b302-91f0c9240cf9'
                },
                {
                  buildHookId: '5e65531ae4489e103a707a0a',
                  title: 'Portfolio Website',
                  name: 'Mc-Smith-and-co',
                  apiId: '35e88474-6a81-4b87-9328-787a699e41df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/craftygreenguru/Mc-Smith-and-co',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://Mc-Smith-and-co.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
