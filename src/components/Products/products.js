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
    id: "2a3daejd",
    name: "blueberry",
    sku: "scone-",
    price: 5.5,
    image: `${blueberry}`,
    class: "all scones",
    description: "scone"
  },
  {
    id: "2l3dae3s",
    name: "chocolate",
    sku: "scone-",
    price: 5.5,
    image: `${chocolate}`,
    class: "all scones",
    description: "scone"
  },
  {
    id: "2n3dae3s",
    name: "cinnamon bun",
    sku: "scone-",
    price: 5.5,
    image: `${cinnamonbun}`,
    class: "all scones",
    description: "scone"
  },
  {
    id: "2b3daeda",
    name: "cranberry orange",
    sku: "scone-",
    price: 5.5,
    image: `${cranberryorange}`,
    class: "all scones",
    description: "scone"
  },
  {
    id: "2v3daejd",
    name: "mars",
    sku: "cookie-",
    price: 5.5,
    image: `${mars}`,
    class: "all cookies",
    description: "cookie"
  },
  {
    id: "2x3dae3s",
    name: "mini egg",
    sku: "cookie-",
    price: 5.5,
    image: `${miniegg}`,
    class: "all cookies",
    description: "cookie"
  },
  {
    id: "2w3dae3s",
    name: "PB Cup",
    sku: "cookies-",
    price: 2.85,
    image: `${reese}`,
    class: "all cookies",
    description:
      "Basic $2.85 PB DREAM CUP Dough: Brown Butter Dough.Mix-ins- chocolate chips Stuffed with: Peanut butter cup Topped with: Reeces pieces"
  },
  {
    id: "2a3dae3s",
    name: "amertti",
    sku: "biscotti-",
    price: 30,
    image: `${amertti}`,
    class: "all biscotti",
    size: "dozen",
    description:
      "(Min 12 order) these biscotti are , crunchy, chewy-inside, macaroon-like cookies made with almond flour, egg whites, and sugar"
  },
  {
    id: "2g3dae3s",
    name: "pastaschio",
    sku: "biscotti-",
    price: 5.5,
    image: `${pastaschio}`,
    class: "all biscotti",
    description: "pastaschio"
  },
  {
    id: "2s3dae3s32",
    name: "Walnut Chocolate Chip",
    sku: "cookie-",
    price: 3.35,
    image: `${walnutChocolateChip}`,
    class: "all cookie",
    description:
      "Premium CHOCOLATE WALNUT Dough: Brown Butter Dough. Mix-ins: chocolate chips & walnuts"
  },
  {
    id: "2f3dse3s32",
    name: "Oreo",
    sku: "cookie-",
    price: 2.85,
    image: `${oreo}`,
    class: "all cookie",
    description:
      "Basic OG OREO Dough: Brown Butter Dough Mix-ins: Chocolate chips Stuffed with: Oreo Topped with: Oreo crumbs"
  },
  {
    id: "23dae3s32",
    name: "Oreo Bday Cake",
    sku: "cookie-",
    price: 3.35,
    image: `${oreoBdayCake}`,
    class: "all cookie",
    description:
      "Premium OREO BIRTHDAY CAKE Dough: Brown Butter Dough.Mix-ins: Oreos & chocolate chips Stuffed with: Cookie butter Toppings: Sprinkles "
  },
  {
    id: "23daeda3s32",
    name: "Nutella Godess",
    sku: "cookie-",
    price: 3.35,
    image: `${nutellaGodess}`,
    class: "all cookie",
    description: "NUTELLA GODESS"
  },
  {
    id: "23dsadae3s32",
    name: "Nutella",
    sku: "cookie-",
    price: 3.35,
    image: `${nutella}`,
    class: "all cookie",
    description:
      "Premium NUTELLA Dough: Brown Butter Dough Mix-ins: Chocolate Chips Stuffed with: nutella"
  },
  {
    id: "22",
    name: "Banana Bread",
    sku: "cookie-",
    price: 3.35,
    image: `${bananaBread}`,
    class: "all cookie",
    description:
      "Premium BANANA BREAD Dough: Brown Butter Dough.Mix-ins- chocolate chips Stuffed with: Banana bread Topped with: BANANA BREAD -LIMITED TIME"
  },
  {
    id: "23",
    name: "Double Dolce Delight",
    sku: "cookie-",
    price: 3.35,
    image: `${doubleDolceDelight}`,
    class: "all cookie",
    description: "Premium Double Dolce Delight"
  },
  {
    id: "24",
    name: "Strawberry Poptart",
    sku: "cookie-",
    price: 3.35,
    image: `${strawberryPoptart}`,
    class: "all cookie",
    description: "Premium Strawberry Poptart"
  },
  {
    id: "25",
    name: "Story Time",
    sku: "cookie-",
    price: 3.35,
    image: `${storytime}`,
    class: "all cookie",
    description:
      "Premium STORYTIME Dough: Brown Butter Dough.Mix-ins- chocolate chips Stuffed with: Munchies Topped with: Sunchips, pretzels and cheetos"
  },
  {
    id: "26",
    name: "Ferrero",
    sku: "cookie-",
    price: 3.35,
    image: `${ferrero}`,
    class: "all cookie",
    description:
      "Premium  FERRERO ROCHER Dough: Brown Butter dough Mix-ins: Chocolate chips Stuffed with: Ferrero Rocher"
  },
  {
    id: "27",
    name: "Everything Cookie",
    sku: "cookie-",
    price: 2.85,
    image: `${everythingCookie}`,
    class: "all cookie",
    description:
      "Basic COOKIES AND CREAM Dough: Brown Butter Mix-Ins: Chocolate Chips. Stuffed with: Cookies and cream Toppings: Cookies and cream candy bar"
  },
  {
    id: "28",
    name: "Everything Cookie",
    sku: "cookie-",
    price: 2.85,
    image: `${everythingCookie}`,
    class: "all cookie",
    description:
      "Basic COOKIES AND CREAM Dough: Brown Butter Mix-Ins: Chocolate Chips. Stuffed with: Cookies and cream Toppings: Cookies and cream candy bar"
  },
  {
    id: "29",
    name: "Cookie Butter",
    sku: "cookie-",
    price: 2.85,
    image: `${cookieButter}`,
    class: "all cookie",
    description:
      "Basic COOKIE BUTTER Dough: Brown butter Dough Mix-ins: Chocolate chips Stuffed with: Cookie butter"
  }
];

export default PRODUCTS;
