export default {
  data() {
    return {
      navItems: [
        { id: 1, name: 'Strona główna', url: '/', active: true },
        { id: 2, name: 'O nas', url: '/o-nas', active: true },
        { id: 3, name: 'Kontakt', url: '/kontakt', active: true },
        { id: 4, name: 'Galeria', url: '/galeria', active: true },
        { id: 3, name: 'Wideo', url: '/wideo', active: true },
        // TODO: # and external urls
        { id: 3, name: 'Strefa Klienta', url: '/', active: true },
      ],
      socialItems: [
        {
          id: 1,
          name: 'facebook',
          url: 'https://www.facebook.com/mmpzakopane',
        },
      ],
    };
  },
};
