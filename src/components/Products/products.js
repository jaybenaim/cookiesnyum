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
    image:
      "https://jaybenaim.github.io/dolcenadaa/static/media/blueberry.fd796233.png",
    class: "all scones",
    description: "scone"
  },
  {
    name: "chocolate",
    sku: "scone-",
    price: 5.5,
    image:
      "https://jaybenaim.github.io/dolcenadaa/static/media/chocolate.2db80bb0.png",
    class: "all scones",
    description: "scone"
  },
  {
    name: "cinnamon bun",
    sku: "scone-",
    price: 5.5,
    image:
      "https://jaybenaim.github.io/dolcenadaa/static/media/cinnamonbun.9460bb32.png",
    class: "all scones",
    description: "scone"
  },
  {
    name: "cranberry orange",
    sku: "scone-",
    price: 5.5,
    image:
      "https://jaybenaim.github.io/dolcenadaa/static/media/cranberryorange.b2b7b050.png",
    class: "all scones",
    description: "scone"
  },
  {
    name: "mars",
    sku: "cookie-",
    price: 5.5,
    image:
      "https://jaybenaim.github.io/dolcenadaa/static/media/mars.712c801e.png",
    class: "all cookies",
    description: "cookie"
  },
  {
    name: "mini egg",
    sku: "cookie-",
    price: 5.5,
    image:
      "https://jaybenaim.github.io/dolcenadaa/static/media/miniegg.2b73f965.png",
    class: "all cookies",
    description: "cookie"
  },
  {
    name: "PB Cup",
    sku: "cookies-",
    price: 2.85,
    image:
      "https://jaybenaim.github.io/dolcenadaa/static/media/reese.d027f80c.png",
    class: "all cookies",
    description:
      "Basic $2.85 PB DREAM CUP Dough: Brown Butter Dough.Mix-ins- chocolate chips Stuffed with: Peanut butter cup Topped with: Reeces pieces"
  },
  {
    name: "amertti",
    sku: "biscotti-",
    price: 30,
    image:
      "https://jaybenaim.github.io/dolcenadaa/static/media/amertti.fac9e2fe.png",
    class: "all biscotti",

    description: "(Min 12 order) these biscotti are , crunchy, chewy-ins"
  },
  {
    name: "pastaschio",
    sku: "biscotti-",
    price: 5.5,
    image:
      "https://jaybenaim.github.io/dolcenadaa/static/media/pastaschio.7de5aa72.png",
    class: "all biscotti",
    description: "pastaschio"
  },
  {
    name: "Walnut Chocolate Chip",
    sku: "cookie-",
    price: 3.35,
    image:
      "https://jaybenaim.github.io/dolcenadaa/static/media/walnutChocolateChip.4aa1e3b0.png",
    class: "all cookie",
    description:
      "Premium CHOCOLATE WALNUT Dough: Brown Butter Dough. Mix-ins: chocolate chips & walnuts"
  },
  {
    name: "Oreo",
    sku: "cookie-",
    price: 2.85,
    image:
      "https://jaybenaim.github.io/dolcenadaa/static/media/oreo.e13461be.png",
    class: "all cookie",
    description:
      "Basic OG OREO Dough: Brown Butter Dough Mix-ins: Chocolate chips Stuffed with: Oreo Topped with: Oreo crumbs"
  },
  {
    name: "Oreo Bday Cake",
    sku: "cookie-",
    price: 3.35,
    image:
      "https://jaybenaim.github.io/dolcenadaa/static/media/oreoBdayCake.aa018ba6.png",
    class: "all cookie",
    description:
      "Premium OREO BIRTHDAY CAKE Dough: Brown Butter Dough.Mix-ins: Oreos & chocolate chips Stuffed with: Cookie butter Toppings: Sprinkles "
  },
  {
    name: "Nutella Godess",
    sku: "cookie-",
    price: 3.35,
    image:
      "https://jaybenaim.github.io/dolcenadaa/static/media/nutella.ad7f57cd.pngg",
    class: "all cookie",
    description: "NUTELLA GODESS"
  },
  {
    name: "Nutella",
    sku: "cookie-",
    price: 3.35,
    image:
      "https://jaybenaim.github.io/dolcenadaa/static/media/nutellaGodess.632683e4.png",
    class: "all cookie",
    description:
      "Premium NUTELLA Dough: Brown Butter Dough Mix-ins: Chocolate Chips Stuffed with: nutella"
  },
  {
    name: "Banana Bread",
    sku: "cookie-",
    price: 3.35,
    image:
      "https://jaybenaim.github.io/dolcenadaa/static/media/bananaBread.56e57287.png",
    class: "all cookie",
    description:
      "Premium BANANA BREAD Dough: Brown Butter Dough.Mix-ins- chocolate chips Stuffed with: Banana bread Topped with: BANANA BREAD -LIMITED TIME"
  },
  {
    name: "Double Dolce Delight",
    sku: "cookie-",
    price: 3.35,
    image:
      "https://jaybenaim.github.io/dolcenadaa/static/media/doubleDolceDelight.9b4de89e.png",
    class: "all cookie",
    description: "Premium Double Dolce Delight"
  },
  {
    name: "Strawberry Poptart",
    sku: "cookie-",
    price: 3.35,
    image:
      "https://jaybenaim.github.io/dolcenadaa/static/media/strawberryPoptart.f8499557.png",
    class: "all cookie",
    description: "Premium Strawberry Poptart"
  },
  {
    name: "Story Time",
    sku: "cookie-",
    price: 3.35,
    image:
      "https://jaybenaim.github.io/dolcenadaa/static/media/storytime.2ac058dc.png",
    class: "all cookie",
    description:
      "Premium STORYTIME Dough: Brown Butter Dough.Mix-ins- chocolate chips Stuffed with: Munchies Topped with: Sunchips, pretzels and cheetos"
  },
  {
    name: "Ferrero",
    sku: "cookie-",
    price: 3.35,
    image:
      "https://jaybenaim.github.io/dolcenadaa/static/media/ferrero.fe76112c.png",
    class: "all cookie",
    description:
      "Premium  FERRERO ROCHER Dough: Brown Butter dough Mix-ins: Chocolate chips Stuffed with: Ferrero Rocher"
  },
  {
    name: "Everything Cookie",
    sku: "cookie-",
    price: 2.85,
    image:
      "https://jaybenaim.github.io/dolcenadaa/static/media/everythingCookie.e355476c.png",
    class: "all cookie",
    description:
      "Basic COOKIES AND CREAM Dough: Brown Butter Mix-Ins: Chocolate Chips. Stuffed with: Cookies and cream Toppings: Cookies and cream candy bar"
  },
  {
    name: "Cookie Butter",
    sku: "cookie-",
    price: 2.85,
    image:
      "https://jaybenaim.github.io/dolcenadaa/static/media/cookieButter.e383d778.png",
    class: "all cookie",
    description:
      "Basic COOKIE BUTTER Dough: Brown butter Dough Mix-ins: Chocolate chips Stuffed with: Cookie butter"
  }
];

export default PRODUCTS;
