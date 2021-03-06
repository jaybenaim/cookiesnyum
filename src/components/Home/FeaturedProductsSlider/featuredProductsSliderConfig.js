import { scones, cookies, biscotti } from "../../../assets/images";
export const featuredProducts = [
  {
    text: "Stuffed Cookies",
    src: cookies,
    alt: "cookies",
    sku: "cookie",
  },
  {
    text: "Flavoured Scones",
    src: scones,
    alt: "scones",
    sku: "scone",
  },
];

export const settings = {
  arrows: true,
  speed: 300,
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
      },
    },
  ],
};
