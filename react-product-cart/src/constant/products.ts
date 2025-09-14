import type { ProductData } from "../common/types";

export const products : ProductData[]= [
  {
    id: 1,
    name: "Wireless Headphones",
    brand: "Sony",
    imageUrl: "https://picsum.photos/seed/headphones1/400/300",
    price: 2500,
    discount: 20,
    stockStatus: "In Stock",
    shortDescription: "Premium wireless headphones with noise cancellation.",
    fullDescription:
      "Enjoy high-quality sound with 30 hours of battery life, Bluetooth 5.2, and active noise cancellation for an immersive experience.",
    category: "Electronics > Audio > Headphones",
    deliveryOptions: ["Free Delivery", "Express Shipping"],
    warranty: "1 Year Warranty",
    returnPolicy: "10 Days Return"
  },
  {
    id: 2,
    name: "Smartphone Pro",
    brand: "Samsung",
    imageUrl: "https://picsum.photos/seed/phone2/400/300",
    price: 55000,
    discount: 10,
    stockStatus: "In Stock",
    shortDescription: "High-end smartphone with AMOLED display.",
    fullDescription:
      "Samsung Smartphone Pro features a 6.5-inch AMOLED display, 128GB storage, and a triple-camera setup for stunning photos.",
    category: "Electronics > Mobile Phones",
    deliveryOptions: ["Free Delivery"],
    warranty: "1 Year Manufacturer Warranty",
    returnPolicy: "7 Days Return"
  },
  {
    id: 3,
    name: "Gaming Laptop",
    brand: "Dell",
    imageUrl: "https://picsum.photos/seed/laptop3/400/300",
    price: 75000,
    discount: 15,
    stockStatus: "In Stock",
    shortDescription: "Powerful gaming laptop with RTX graphics.",
    fullDescription:
      "The Dell Gaming Laptop comes with Intel i7, 16GB RAM, 1TB SSD, and RTX 3060 graphics for smooth gaming performance.",
    category: "Electronics > Computers > Laptops",
    deliveryOptions: ["Free Delivery", "Cash on Delivery"],
    warranty: "2 Years Warranty",
    returnPolicy: "15 Days Return"
  },
  {
    id: 4,
    name: "4K Smart TV",
    brand: "LG",
    imageUrl: "https://picsum.photos/seed/tv4/400/300",
    price: 42000,
    discount: 25,
    stockStatus: "In Stock",
    shortDescription: "Ultra HD 4K Smart TV with HDR.",
    fullDescription:
      "LG Smart TV delivers 4K clarity, HDR support, and built-in apps like Netflix and YouTube for an immersive entertainment experience.",
    category: "Electronics > Televisions",
    deliveryOptions: ["Free Delivery", "Installation Included"],
    warranty: "3 Years Warranty",
    returnPolicy: "30 Days Return"
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    brand: "JBL",
    imageUrl: "https://picsum.photos/seed/speaker5/400/300",
    price: 3500,
    discount: 18,
    stockStatus: "In Stock",
    shortDescription: "Portable Bluetooth speaker with deep bass.",
    fullDescription:
      "Compact yet powerful, this JBL Bluetooth speaker offers 12 hours of playtime, waterproof design, and premium sound.",
    category: "Electronics > Audio > Speakers",
    deliveryOptions: ["Free Delivery", "Cash on Delivery"],
    warranty: "1 Year Warranty",
    returnPolicy: "7 Days Return"
  },
  {
    id: 6,
    name: "Smartwatch Series X",
    brand: "Apple",
    imageUrl: "https://picsum.photos/seed/watch6/400/300",
    price: 32000,
    discount: 12,
    stockStatus: "In Stock",
    shortDescription: "Smartwatch with health and fitness tracking.",
    fullDescription:
      "Track your fitness, monitor heart rate, and stay connected with notifications on the go. Water-resistant and long-lasting battery.",
    category: "Electronics > Wearables",
    deliveryOptions: ["Free Delivery"],
    warranty: "1 Year International Warranty",
    returnPolicy: "14 Days Return"
  },
  {
    id: 7,
    name: "DSLR Camera",
    brand: "Canon",
    imageUrl: "https://picsum.photos/seed/camera7/400/300",
    price: 48000,
    discount: 20,
    stockStatus: "In Stock",
    shortDescription: "Professional DSLR camera with 24MP lens.",
    fullDescription:
      "Canon DSLR offers stunning photography with 24MP lens, 4K recording, and advanced autofocus system.",
    category: "Electronics > Cameras",
    deliveryOptions: ["Free Delivery", "Cash on Delivery"],
    warranty: "2 Years Warranty",
    returnPolicy: "10 Days Return"
  },
  {
    id: 8,
    name: "Air Conditioner 1.5 Ton",
    brand: "Voltas",
    imageUrl: "https://picsum.photos/seed/ac8/400/300",
    price: 36000,
    discount: 22,
    stockStatus: "In Stock",
    shortDescription: "Energy-efficient split air conditioner.",
    fullDescription:
      "Voltas AC ensures fast cooling with inverter technology, low noise operation, and energy-saving features.",
    category: "Home Appliances > Air Conditioners",
    deliveryOptions: ["Free Delivery", "Installation Included"],
    warranty: "5 Years Compressor Warranty",
    returnPolicy: "10 Days Return"
  },
  {
    id: 9,
    name: "Microwave Oven",
    brand: "Samsung",
    imageUrl: "https://picsum.photos/seed/microwave9/400/300",
    price: 14000,
    discount: 30,
    stockStatus: "In Stock",
    shortDescription: "Convection microwave oven with grill.",
    fullDescription:
      "Cook, grill, and bake with Samsung convection microwave oven. Easy controls and multiple auto-cook menus.",
    category: "Home Appliances > Kitchen",
    deliveryOptions: ["Free Delivery"],
    warranty: "1 Year Warranty",
    returnPolicy: "7 Days Return"
  },
  {
    id: 10,
    name: "Refrigerator Double Door",
    brand: "Whirlpool",
    imageUrl: "https://picsum.photos/seed/fridge10/400/300",
    price: 30000,
    discount: 15,
    stockStatus: "In Stock",
    shortDescription: "Frost-free double-door refrigerator.",
    fullDescription:
      "Whirlpool refrigerator keeps food fresh longer with advanced cooling and inverter compressor.",
    category: "Home Appliances > Refrigerators",
    deliveryOptions: ["Free Delivery", "Installation Included"],
    warranty: "2 Years Warranty",
    returnPolicy: "15 Days Return"
  },
  {
    id: 11,
    name: "Washing Machine",
    brand: "Bosch",
    imageUrl: "https://picsum.photos/seed/washing11/400/300",
    price: 28000,
    discount: 18,
    stockStatus: "In Stock",
    shortDescription: "Front-load washing machine with inverter motor.",
    fullDescription:
      "Bosch washing machine offers silent operation, smart wash programs, and low water consumption.",
    category: "Home Appliances > Washing Machines",
    deliveryOptions: ["Free Delivery", "Installation Included"],
    warranty: "3 Years Warranty",
    returnPolicy: "14 Days Return"
  },
  {
    id: 12,
    name: "Coffee Maker",
    brand: "Philips",
    imageUrl: "https://picsum.photos/seed/coffee12/400/300",
    price: 4500,
    discount: 10,
    stockStatus: "In Stock",
    shortDescription: "Automatic coffee maker with timer.",
    fullDescription:
      "Philips coffee maker prepares fresh coffee with one-touch operation and keep-warm function.",
    category: "Home Appliances > Kitchen",
    deliveryOptions: ["Free Delivery"],
    warranty: "1 Year Warranty",
    returnPolicy: "7 Days Return"
  },
  {
    id: 13,
    name: "Fitness Band",
    brand: "Mi",
    imageUrl: "https://picsum.photos/seed/fitness13/400/300",
    price: 2500,
    discount: 25,
    stockStatus: "In Stock",
    shortDescription: "Fitness tracker with heart-rate monitor.",
    fullDescription:
      "Mi fitness band tracks steps, calories, heart rate, and sleep patterns with 2 weeks battery life.",
    category: "Electronics > Wearables",
    deliveryOptions: ["Free Delivery", "Cash on Delivery"],
    warranty: "6 Months Warranty",
    returnPolicy: "7 Days Return"
  },
  {
    id: 14,
    name: "Tablet Pro",
    brand: "Apple",
    imageUrl: "https://picsum.photos/seed/tablet14/400/300",
    price: 65000,
    discount: 8,
    stockStatus: "In Stock",
    shortDescription: "High-performance tablet with stylus support.",
    fullDescription:
      "Apple Tablet Pro features Retina display, A14 Bionic chip, and stylus support for creatives.",
    category: "Electronics > Tablets",
    deliveryOptions: ["Free Delivery"],
    warranty: "1 Year International Warranty",
    returnPolicy: "10 Days Return"
  },
  {
    id: 15,
    name: "Smart Speaker",
    brand: "Amazon Echo",
    imageUrl: "https://picsum.photos/seed/smartspeaker15/400/300",
    price: 7000,
    discount: 12,
    stockStatus: "In Stock",
    shortDescription: "Smart speaker with Alexa voice assistant.",
    fullDescription:
      "Control your smart home, play music, and get updates using voice commands with Alexa.",
    category: "Electronics > Smart Home",
    deliveryOptions: ["Free Delivery"],
    warranty: "1 Year Warranty",
    returnPolicy: "7 Days Return"
  },
  {
    id: 16,
    name: "Electric Kettle",
    brand: "Prestige",
    imageUrl: "https://picsum.photos/seed/kettle16/400/300",
    price: 1800,
    discount: 20,
    stockStatus: "In Stock",
    shortDescription: "Stainless steel electric kettle.",
    fullDescription:
      "Prestige kettle boils water quickly with auto cut-off and 1.5L capacity.",
    category: "Home Appliances > Kitchen",
    deliveryOptions: ["Free Delivery"],
    warranty: "1 Year Warranty",
    returnPolicy: "7 Days Return"
  },
  {
    id: 17,
    name: "Running Shoes",
    brand: "Nike",
    imageUrl: "https://picsum.photos/seed/shoes17/400/300",
    price: 5000,
    discount: 30,
    stockStatus: "In Stock",
    shortDescription: "Lightweight running shoes with breathable mesh.",
    fullDescription:
      "Nike running shoes offer comfort and durability for long runs and workouts.",
    category: "Fashion > Footwear",
    deliveryOptions: ["Free Delivery", "Cash on Delivery"],
    warranty: "6 Months Warranty",
    returnPolicy: "15 Days Return"
  },
  {
    id: 18,
    name: "Leather Wallet",
    brand: "Tommy Hilfiger",
    imageUrl: "https://picsum.photos/seed/wallet18/400/300",
    price: 2500,
    discount: 15,
    stockStatus: "In Stock",
    shortDescription: "Genuine leather wallet with multiple compartments.",
    fullDescription:
      "This Tommy Hilfiger wallet is crafted with genuine leather and provides ample space for cards and cash.",
    category: "Fashion > Accessories",
    deliveryOptions: ["Free Delivery"],
    warranty: "6 Months Warranty",
    returnPolicy: "10 Days Return"
  },
  {
    id: 19,
    name: "Office Chair",
    brand: "Herman Miller",
    imageUrl: "https://picsum.photos/seed/chair19/400/300",
    price: 22000,
    discount: 10,
    stockStatus: "In Stock",
    shortDescription: "Ergonomic office chair with lumbar support.",
    fullDescription:
      "Herman Miller office chair offers ultimate comfort with adjustable settings and breathable mesh design.",
    category: "Furniture > Office",
    deliveryOptions: ["Free Delivery", "Installation Included"],
    warranty: "5 Years Warranty",
    returnPolicy: "30 Days Return"
  },
  {
    id: 20,
    name: "Backpack",
    brand: "Wildcraft",
    imageUrl: "https://picsum.photos/seed/backpack20/400/300",
    price: 1800,
    discount: 18,
    stockStatus: "In Stock",
    shortDescription: "Durable backpack with multiple compartments.",
    fullDescription:
      "Wildcraft backpack is water-resistant and ideal for travel, work, or college use.",
    category: "Fashion > Bags",
    deliveryOptions: ["Free Delivery"],
    warranty: "1 Year Warranty",
    returnPolicy: "7 Days Return"
  }
];
