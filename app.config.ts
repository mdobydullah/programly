export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Programly',
      description: 'Code Smarter, Solve Faster, Secure Stronger',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: 'Programly',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/mdobydullah/programly',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: true,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © 2024',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/mdobydullah/programly',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/mdobydullah/programly',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/mdobydullah/programly/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});
