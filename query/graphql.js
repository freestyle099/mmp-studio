export const HOME_QUERY = `
query Home {
  homePage {
    carousel {
      id
      responsiveImage {
        src
        alt
        webpSrcSet
      }
    }
    aboutUsTitle
    aboutUsDescription(markdown: true)
    whyUs
    contact
    contactDescription(markdown: true)
    form
  }
  allAboutItems {
    id
    title
    description(markdown: true)
  }
}
`;

export const GALLERY_QUERY = `
query Gallery {
  gallery {
    title
    images {
      id
      responsiveImage{
        alt
        src
        webpSrcSet
      }
    }
  }
}
`;

export const VIDEO_QUERY = `
query Video {
  videoPage {
    title
  }
  allVideos{
    id
    url
  }
}
`;
