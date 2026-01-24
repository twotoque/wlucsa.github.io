/**
 * Represents a business location with discount offers and geographical information.
 * Used for displaying featured locations on maps or in location-based directories.
 */
export interface Location {
  /**
   * Unique identifier for the location.
   * @example 1
   */
  id: number;

  /**
   * The name or title of the business/location.
   * @example "BB.Q CHICKEN"
   */
  title: string;

  /**
   * URL or path to the business logo image.
   * @example "/images/bbq-chicken-logo.png"
   */
  logo: string;

  /**
   * The discount percentage or offer available at this location.
   * @example "10% OFF"
   */
  discount: string;

  /**
   * Additional conditions or notes about the discount offer.
   * Can be an empty string if no special conditions apply.
   * @example "*Discount only applies for dine-in."
   */
  discountNote: string;

  /**
   * Geographic coordinates in [latitude, longitude] format.
   * You can find this on Google Maps. Enter the location and right click on the pin. It is the first value on the desktop popup 
   * Used for plotting the location on maps.
   * @example [43.47313549789974, -80.53412189849647]
   */
  coordinates: [number, number];

  /**
   * Full street address of the location.
   * @example "140 University Ave W A1, Waterloo, ON N2L 6J3"
   */
  address: string;

  /**
   * Brief description of the business, its offerings, or unique characteristics.
   * @example "bb.q Chicken serves Korean-style fried chicken known for its crispy texture and bold flavours..."
   */
  about: string;

  /**
   * CSA recommendation - recommended menu item or signature dish.
   * @example "Soy Garlic Chicken"
   */
  csaRec: string;
}

/**
 * Array of featured locations with discount offers.
 * All locations are in the Waterloo, ON area.
 */

export const locations: Location[] = [
  {
    id: 1,
    title: "BB.Q CHICKEN",
    logo: "",
    discount: "10% OFF",
    discountNote: "*Discount only applies for dine-in.",
    coordinates: [43.47313549789974, -80.53412189849647],
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
    coordinates: [43.4754900367177, -80.53528889012291],
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
    coordinates: [43.465908675154175, -80.52267787181384],
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
    coordinates: [43.46350993793453, -80.521220353951],
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
    coordinates: [43.47250031307426, -80.53577284588303],
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
    coordinates: [43.478378624775914, -80.52449803991277],
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
    coordinates: [43.47263862359609, -80.53368249956559],
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
    coordinates: [43.472052862422565, -80.53898455278525],
    address: "University Shops Plaza, 170 University Ave W #14, Waterloo, ON N2L 3E9", 
    about: "Sweet Dreams Teashop is Waterloo's original bubble tea shop with quality drinks, desserts, sandwiches, and boardgames.", 
    csaRec: "Taro Milk Tea",
  },
];