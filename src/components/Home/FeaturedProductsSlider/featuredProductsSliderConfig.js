import { scones, cookies, biscotti } from "../../../assets/images";
export const featuredProducts = [
  {
    text: "Stuffed Cookies",
    src: cookies,
    alt: "cookies",
    sku: "cookies"
  },
  {
    text: "Flavoured Scones",
    src: scones,
    alt: "scones",
    sku: "scone"
  },
  {
    text: "Hand Crafted Biscotti",
    src: biscotti,
    alt: "biscotti",
    sku: "biscotti"
  }
];

export const settings = {
  arrows: true,
  speed: 300,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false
      }
    }
  ]
};
