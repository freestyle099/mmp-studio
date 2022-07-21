export default {
  data() {
    return {
      navItems: [
        { id: 1, name: 'Nasi Pedagodzy', url: '/nasi-pedagodzy', active: true },
        { id: 2, name: 'O nas', url: '/o-nas', active: true },
        { id: 3, name: 'Posłuchaj', url: '/posluchaj', active: false },
        {
          id: 4,
          name: 'Oferta edukacyjna',
          url: '/oferta-edukacyjna',
          active: true,
        },
        {
          id: 5,
          name: 'Wakacje muzyczne',
          url: '/wakacje-muzyczne',
          active: false,
          subMenu: true,
          icon: '',
        },
        { id: 6, name: 'Koncerty', url: '/koncerty', active: false },
        {
          id: 7,
          name: 'Materiały Edukacyjne',
          url: '/materialy-edukacyjne',
          active: false,
          subMenu: true,
          icon: '',
        },
        { id: 8, name: 'Kontakt', url: '/kontakt', active: true },
      ],
      socialItems: [
        // TODO: Update social links
        { id: 1, name: 'facebook', url: 'https://facebook.pl' },
        { id: 2, name: 'youtube', url: 'https://youtube.com' },
      ],
    }
  },
}
