export default {
  data() {
    return {
      navItems: [
        { id: 1, name: 'Strona główna', to: '/', active: true },
        { id: 2, name: 'O nas', to: '/#o-nas', active: true },
        { id: 3, name: 'Kontakt', to: '/#kontakt', active: true },
        { id: 4, name: 'Galeria', to: '/galeria', active: true },
        { id: 5, name: 'Wideo', to: '/wideo', active: true },
        {
          id: 6,
          name: 'Strefa Klienta',
          href: 'https://strefaklienta.mmpstudio.pl/',
          active: true,
        },
      ],
      socialItems: [
        {
          id: 2,
          name: 'facebook',
          url: 'https://www.facebook.com/mmpzakopane',
        },
      ],
    };
  },
};
