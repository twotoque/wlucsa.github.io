export interface Location {
  id: number;
  title: string;
  logo: string;
  discount: string;
  discountNote: string;
  coordinates: [number, number];
  address: string;
  about: string;
  csaRec: string;
}

export const locations: Location[] = [
  {
    id: 1,
    title: "BB.Q CHICKEN",
    logo: "",
    discount: "10% OFF",
    discountNote: "*Discount only applies for dine-in.",
    coordinates: [43.4723, -80.5365],
    address: "140 University Ave W A1, Waterloo, ON N2L 6J3",
    about: "bb.q Chicken serves Korean-style fried chicken known for its crispy texture and bold flavours, from soy garlic to spicy options, offering a unique twist on classic fried chicken.",
    csaRec: "Soy Garlic Chicken"
  },
  {
    id: 2,
    title: "NOW TEA",
    logo: "",
    discount: "10% OFF",
    discountNote: "",
    coordinates: [43.4761, -80.5311],
    address: "280 Lester St #106, Waterloo, ON N2L 3W5",
    about: "NowTea offers locally established authentic Taiwanese bubble tea, made with high-quality ingredients, fresh real fruits, and freshly brewed tea.",
    csaRec: "Now Tea Duo, 50% sugar, 50% ice"
  },
  {
    id: 3,
    title: "KINTON RAMEN",
    logo: "",
    discount: "15% OFF",
    discountNote: "",
    coordinates: [43.4665, -80.5224],
    address: "31 King St N 1st Floor, Waterloo, ON N2J 2W6",
    about: "Kinton Ramen brings authentic Japanese-style ramen to Waterloo, serving flavourful broths and chewy noodles.",
    csaRec: "Pork Shoyu Ramen"
  },
  {
    id: 4,
    title: "FUWA FUWA",
    logo: "",
    discount: "10% OFF",
    discountNote: "",
    coordinates: [43.4638, -80.5218],
    address: "80 King St S #102, Waterloo, ON N2J 1P5",
    about: "Fuwa Fuwa offers dessert lovers a delectable array of desserts, including Japanese soufflé pancakes and refreshing drinks, crafted with the finest ingredients.",
    csaRec: "Matcha Tiramisu"
  },
  {
    id: 5,
    title: "BROWN DONKATSU",
    logo: "",
    discount: "10% OFF",
    discountNote: "",
    coordinates: [43.4725, -80.5360],
    address: "150 University Ave W #3, Waterloo, ON N2L 3E4",
    about: "Since 1986, Brown Donkatsu has served Korean Style Katsu made from fresh, quality meat.",
    csaRec: "Snow Cheese Katsu"
  },
  {
    id: 6,
    title: "EGG CLUB",
    logo: "",
    discount: "10% OFF",
    discountNote: "",
    coordinates: [43.4770, -80.5245],
    address: "308 King St N Unit 107-108, Waterloo, ON N2J 0G4",
    about: "Egg Club serves up fluffy egg sandwiches stacked on soft Japanese milk bread, with creative fillings from classic bacon and cheese to lobster bowls.",
    csaRec: "The Classic"
  },
  {
    id: 7,
    title: "FOODIE FRUITIE",
    logo: "",
    discount: "10% OFF", 
    discountNote: "",
    coordinates: [43.4751, -80.5305],
    address: "203 Lester St #7, Waterloo, ON N2L 0B5",
    about: "Foodie Fruitie is a vibrant Asian fusion café with a large variety of quality dishes, from a quick lunch to a filling dinner. Their menu includes skewers, ramen, sushi, rice sets, noodles, bubble tea, unique drinks, and more.",
    csaRec: "Crispy Fried Curry Chicken with Rice"
  },
  {
    id: 8,
    title: "SWEET DREAMS TEASHOP",
    logo: "",
    discount: "10% OFF", 
    discountNote: "",
    coordinates: [43.4761, -80.5311],
    address: "280 Lester St #106, Waterloo, ON N2L 3W5", 
    about: "Sweet Dreams Teashop is Waterloo's original bubble tea shop with quality drinks, desserts, sandwiches, and boardgames.", 
    csaRec: "Taro Milk Tea",
  },
];