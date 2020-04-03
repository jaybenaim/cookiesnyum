import {
  blueberry,
  chocolate,
  cinnamonbun,
  cranberryorange,
  mars,
  miniegg,
  reese,
  amertti,
  pastaschio,
  bananaBread,
  cookieButter,
  doubleDolceDelight,
  everythingCookie,
  ferrero,
  nutella,
  nutellaGodess,
  oreo,
  oreoBdayCake,
  storytime,
  strawberryPoptart,
  walnutChocolateChip
} from "../../assets/images";
const PRODUCTS = [
  {
    name: "blueberry",
    sku: "scone-",
    price: 5.5,
    image: "static/images/blueberry",
    class: "all scones",
    description: "scone"
  },
  {
    name: "chocolate",
    sku: "scone-",
    price: 5.5,
    image: "https://jaybenaim.github.io/images/chocolate.png",
    class: "all scones",
    description: "scone"
  },
  {
    name: "cinnamon bun",
    sku: "scone-",
    price: 5.5,
    image: "https://jaybenaim.github.io/images/cinnamonbun.png",
    class: "all scones",
    description: "scone"
  },
  {
    name: "cranberry orange",
    sku: "scone-",
    price: 5.5,
    image: "https://jaybenaim.github.io/images/cranberryorange.png",
    class: "all scones",
    description: "scone"
  },
  {
    name: "mars",
    sku: "cookie-",
    price: 5.5,
    image: "https://jaybenaim.github.io/images/mars.png",
    class: "all cookies",
    description: "cookie"
  },
  {
    name: "mini egg",
    sku: "cookie-",
    price: 5.5,
    image: "https://jaybenaim.github.io/images/miniegg.png",
    class: "all cookies",
    description: "cookie"
  },
  {
    name: "PB Cup",
    sku: "cookies-",
    price: 2.85,
    image: "https://jaybenaim.github.io/images/reese.png",
    class: "all cookies",
    description:
      "Basic $2.85 PB DREAM CUP Dough: Brown Butter Dough.Mix-ins- chocolate chips Stuffed with: Peanut butter cup Topped with: Reeces pieces"
  },
  {
    name: "amertti",
    sku: "biscotti-",
    price: 30,
    image: "https://jaybenaim.github.io/images/amertti.png",
    class: "all biscotti",

    description: "(Min 12 order) these biscotti are , crunchy, chewy-ins"
  },
  {
    name: "pastaschio",
    sku: "biscotti-",
    price: 5.5,
    image: "https://jaybenaim.github.io/images/pastaschio.png",
    class: "all biscotti",
    description: "pastaschio"
  },
  {
    name: "Walnut Chocolate Chip",
    sku: "cookie-",
    price: 3.35,
    image: "https://jaybenaim.github.io/images/walnutChocolateChip.png",
    class: "all cookie",
    description:
      "Premium CHOCOLATE WALNUT Dough: Brown Butter Dough. Mix-ins: chocolate chips & walnuts"
  },
  {
    name: "Oreo",
    sku: "cookie-",
    price: 2.85,
    image: "https://jaybenaim.github.io/images/oreo.png",
    class: "all cookie",
    description:
      "Basic OG OREO Dough: Brown Butter Dough Mix-ins: Chocolate chips Stuffed with: Oreo Topped with: Oreo crumbs"
  },
  {
    name: "Oreo Bday Cake",
    sku: "cookie-",
    price: 3.35,
    image: "https://jaybenaim.github.io/images/oreoBdayCake.png",
    class: "all cookie",
    description:
      "Premium OREO BIRTHDAY CAKE Dough: Brown Butter Dough.Mix-ins: Oreos & chocolate chips Stuffed with: Cookie butter Toppings: Sprinkles "
  },
  {
    name: "Nutella Godess",
    sku: "cookie-",
    price: 3.35,
    image: "https://jaybenaim.github.io/images/nutellaGodess.png",
    class: "all cookie",
    description: "NUTELLA GODESS"
  },
  {
    name: "Nutella",
    sku: "cookie-",
    price: 3.35,
    image: "https://jaybenaim.github.io/images/nutella.png",
    class: "all cookie",
    description:
      "Premium NUTELLA Dough: Brown Butter Dough Mix-ins: Chocolate Chips Stuffed with: nutella"
  },
  {
    name: "Banana Bread",
    sku: "cookie-",
    price: 3.35,
    image: "https://jaybenaim.github.io/images/bananaBread.png",
    class: "all cookie",
    description:
      "Premium BANANA BREAD Dough: Brown Butter Dough.Mix-ins- chocolate chips Stuffed with: Banana bread Topped with: BANANA BREAD -LIMITED TIME"
  },
  {
    name: "Double Dolce Delight",
    sku: "cookie-",
    price: 3.35,
    image: "https://jaybenaim.github.io/images/doubleDolceDelight.png",
    class: "all cookie",
    description: "Premium Double Dolce Delight"
  },
  {
    name: "Strawberry Poptart",
    sku: "cookie-",
    price: 3.35,
    image: "https://jaybenaim.github.io/images/strawberryPoptart.png",
    class: "all cookie",
    description: "Premium Strawberry Poptart"
  },
  {
    name: "Story Time",
    sku: "cookie-",
    price: 3.35,
    image: "https://jaybenaim.github.io/images/storytime.png",
    class: "all cookie",
    description:
      "Premium STORYTIME Dough: Brown Butter Dough.Mix-ins- chocolate chips Stuffed with: Munchies Topped with: Sunchips, pretzels and cheetos"
  },
  {
    name: "Ferrero",
    sku: "cookie-",
    price: 3.35,
    image: "https://jaybenaim.github.io/images/ferrero.png",
    class: "all cookie",
    description:
      "Premium  FERRERO ROCHER Dough: Brown Butter dough Mix-ins: Chocolate chips Stuffed with: Ferrero Rocher"
  },
  {
    name: "Everything Cookie",
    sku: "cookie-",
    price: 2.85,
    image: "https://jaybenaim.github.io/images/everythingCookie.png",
    class: "all cookie",
    description:
      "Basic COOKIES AND CREAM Dough: Brown Butter Mix-Ins: Chocolate Chips. Stuffed with: Cookies and cream Toppings: Cookies and cream candy bar"
  },
  {
    name: "Everything Cookie",
    sku: "cookie-",
    price: 2.85,
    image: "https://jaybenaim.github.io/images/everythingCookie.png",
    class: "all cookie",
    description:
      "Basic COOKIES AND CREAM Dough: Brown Butter Mix-Ins: Chocolate Chips. Stuffed with: Cookies and cream Toppings: Cookies and cream candy bar"
  },
  {
    name: "Cookie Butter",
    sku: "cookie-",
    price: 2.85,
    image: "https://jaybenaim.github.io/images/cookieButter.png",
    class: "all cookie",
    description:
      "Basic COOKIE BUTTER Dough: Brown butter Dough Mix-ins: Chocolate chips Stuffed with: Cookie butter"
  }
];

export default PRODUCTS;
