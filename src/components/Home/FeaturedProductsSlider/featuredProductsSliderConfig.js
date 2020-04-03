import cookies from "../../../assets/images/categories/mainCookies.JPG";
import biscotti from "../../../assets/images/categories/mainBiscotti.png";
import scones from "../../../assets/images/categories/mainScones.JPG";

export const defaultDisplay = [
  {
    text: "cookies",
    src: cookies,
    alt: "cookies",
    sku: "cookies"
  },
  {
    text: "scones",
    src: scones,
    alt: "scones",
    sku: "scone"
  },
  {
    text: "biscotti",
    src: biscotti,
    alt: "biscotti",
    sku: "biscotti"
  }
];

export const settings = {
  arrows: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      }
    }
  ]
};
