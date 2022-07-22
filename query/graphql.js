export const HOME_QUERY = `
query Home {
  homePage {
    carousel {
      id
      responsiveImage(imgixParams: {auto: compress, w: "1600"}) {
        src
        alt
        webpSrcSet
      }
    }
    aboutUsTitle
    aboutUsDescription(markdown: true)
    aboutUsImage {
      responsiveImage(imgixParams: {auto: compress, w: "1600"}) {
        src
        alt
        webpSrcSet
      }
    }
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
      responsiveImage(imgixParams: {auto: compress, w: "1600"}) {
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
