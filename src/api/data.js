import allProducts from '../constants/ProductConstants'
import { ROSEMARY, TEATREE, LEMON, SWEET_ALMOND, VITAMIN_E, FRANKINCENSE, GERANIUM, GRAPESEED, SHEA_BUTTER, SAFFLOWER, HEMP, CUCUMBER_SEED, ARGAN, VIRGIN_COCONUT, MORINGA, JOJOBA, BEESWAX, MANGO_BUTTER, APRICOT } from '../constants/Ingredients';

const allItems = [
{
  "id": 1,
  "name": allProducts.moisturizingCreams,
  "type":"skin",
  "price": 250,
  "salePrice": 250,
  "discount": 0,
  "pictures": ["/assets/images/moisturizingCreams/frenchLavender_1.jpg", "/assets/images/moisturizingCreams/frenchLavender_2.jpg", "/assets/images/moisturizingCreams/orange_big.jpg", "/assets/images/moisturizingCreams/rose_big.jpg"],
  "shortDetails": "Moisturizing cream for daily use",
  "description": "Daily moisturizing is vital for a healthy skin. Leaving skin without a moisturizer means compromising the protective skin barrier. Kurinjini brings to you a Shea, Mango butter based moisturizer that also has the anti-oxidant properties brought by Vitamin-E. Along with these, we have also added Jojoba and Sweet Almond oils provide that extra nourishment to the skin. We also take customized orders for your specific requirement on fragrance.",
  "stock": 10,
  "new": true,
  "sale": false,
  "quantity":"60 ml",
  "category": allProducts.faceCare,
  "subCategory":["moisturizing", "Kids"],
  "ingredients": ["Jojoba", "Sweet Almond", "Vitamin-E", "Mango butter", "Tea Tree", "Rosemary","Coconut","Virgin Olive", "Beeswax"],
  "size": ["60ml", "120ml"],
  "tags": ["dryness", "freckles", "aging"],
  "rating": 4,
  "flavours":["French Lavender Honey", "Cherry Blossom", "Winter Bloom", "Orange", "Rose Petals"],
  "variants": [
  {
    "flavour": "French Lavender Honey",
    "images": "/assets/images/moisturizingCreams/frenchLavender_1.jpg"
  },
  {
    "flavour": "Orange",
    "images": "/assets/images/moisturizingCreams/orange_big.jpg"
  },
  {
    "flavour": "Rose Petals",
    "images": "/assets/images/moisturizingCreams/rose_big.jpg"
  }],
  "goodFor":[allProducts.allKindsOfSkin],
  "precaution":"All our moisturizing creams should be kept away from sunlight as it may lose its consistency"
},
{
  "id": 2,
  "name": "Immortal",
  "type":"skin",
  "price": 300.00,
  "salePrice": 300.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/FaceCare/SpecialNeeds/Immortal_two.jpg", "/assets/images/kurinjini-images/FaceCare/SpecialNeeds/Immortal_three.jpg"],
  "shortDetails": "Immortal is our most popular face cream.",
  "description": "Cellular regeneration is the key to a youthful skin, and essential oils provide a way of doing this which is far more pleasant and safe than methods involving synthetic chemicals.Immortal is not only an anti-ageing cream but it also helps fight hyperpigmentation. It has ingredients that stimualte skin cells into reproducing at a quicker rate, thus reducing the time-lag between new skin growth and the elimination of old cells. Immortal has essentials that are considered to be anti-wrinkle, act as a skin tightening agent, helping in reducing dark spots and blemishes. It is high in Vitamin-A and Vitamin-E oil that prevents formation of free radicals that are scientifically proven to be one of the reasons of pre-mature ageing. Immortal is our most popular face cream. Lot of people have given a great feedback on this cream.",
  "stock": 10,
  "new": false,
  "sale": false,
  "category": allProducts.faceCare,
  "ingredients": ["Frankincense", "Geranium", "Avocado", "Moringa", "Argan", "Jojoba", "Grapeseed", "Tea Tree", "Rosemary", "Hemp", "Cucumber seed",  "Coconut", "beeswax", "Sweet Almond", "Vitamin-E", "Mango Butter", "African Shea butter", "Apricot oil"],
  "size": ["60ml", "120ml"],
  "tags": ["anti-ageing"],
  "rating": 5,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.moisturizingCreams]
},
{
  "id": 3,
  "name": "Pacific",
  "type":allProducts.skin,
  "price": 300.00,
  "salePrice": 300.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/FaceCare/SpecialNeeds/pacific_small.jpg", "/assets/images/fashion/product/2.jpg", "/assets/images/fashion/product/25.jpg", "/assets/images/fashion/product/26.jpg"],
  "shortDetails": "A cream for sensitive skin",
  "description": "Pacific has speciality of soothing sensitive skin. It has ingredients like Rosemary, Tea tree and safflower oil that refresh oily skin without causing excess dryness. Tea tree and Rosemary are considered to be a natural antiseptic and has astringent properties. It is effective in lightening scars, soothing pimples apart from being anti-blemish, anti-microbial agents.",
  "stock": 6,
  "new": false,
  "sale": false,
  "category": allProducts.faceCare,
  "ingredients": [ROSEMARY, TEATREE, SAFFLOWER, LEMON, HEMP, CUCUMBER_SEED, ARGAN, VIRGIN_COCONUT, SWEET_ALMOND, VITAMIN_E, FRANKINCENSE, GERANIUM, MORINGA, JOJOBA, GRAPESEED, BEESWAX, MANGO_BUTTER, SHEA_BUTTER, APRICOT],
  "size": ["60ml", "120ml"],
  "tags": ["sensitive skin", "acne"],
  "rating": 3,
  "variants": [],
  "goodFor":[allProducts.sensitiveSkin],
  "subCategory":[allProducts.moisturizingCreams]
},
{
  "id": 4,
  "name": "Waist Dress",
  "price": 180.00,
  "salePrice": 360.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/5.jpg", "/assets/images/fashion/product/12.jpg", "/assets/images/fashion/product/31.jpg", "/assets/images/fashion/product/18.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": true,
  "sale": true,
  "category": "women",
  "ingredients": ["pink", "gray", "green"],
  "size": ["M", "L", "XL"],
  "tags": ["lifestyle"],
  "rating": 4,
  "variants": [
  {
    "color": "pink",
    "images": "/assets/images/fashion/product/5.jpg"
  },
  {
    "color": "gray",
    "images": "/assets/images/fashion/product/12.jpg"
  },
  {
    "color": "green",
    "images": "/assets/images/fashion/product/31.jpg"
  }]
},
{
  "id": 5,
  "name": "Trim Dress",
  "price": 420.00,
  "salePrice": 840.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/13.jpg", "/assets/images/fashion/product/10.jpg", "/assets/images/fashion/product/21.jpg", "/assets/images/fashion/product/15.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": true,
  "sale": false,
  "category": "women",
  "ingredients": ["pink", "yellow", "gray"],
  "size": ["M", "L", "XL"],
  "tags": ["caprese", "lifestyle"],
  "rating": 5,
  "variants": [
  {
    "color": "pink",
    "images": "/assets/images/fashion/product/13.jpg"
  },
  {
    "color": "yellow",
    "images": "/assets/images/fashion/product/10.jpg"
  },
  {
    "color": "gray",
    "images": "/assets/images/fashion/product/21.jpg"
  }]
},
{
  "id": 6,
  "name": "Cut Dress",
  "price": 290,
  "salePrice": 580,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/30.jpg", "/assets/images/fashion/product/29.jpg", "/assets/images/fashion/product/28.jpg", "/assets/images/fashion/product/9.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": false,
  "sale": true,
  "category": "women",
  "ingredients": ["blue", "gray", "orange"],
  "size": ["M", "L", "XL"],
  "tags": ["caprese"],
  "rating": 5,
  "variants": [
  {
    "color": "blue",
    "images": "/assets/images/fashion/product/30.jpg"
  },
  {
    "color": "gray",
    "images": "/assets/images/fashion/product/24.jpg"
  },
  {
    "color": "orange",
    "images": "/assets/images/fashion/product/9.jpg"
  }]
},
{
  "id": 7,
  "name": "Sleeveless dress",
  "price": 950.00,
  "salePrice": 425.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/20.jpg", "/assets/images/fashion/product/4.jpg", "/assets/images/fashion/product/35.jpg", "/assets/images/fashion/product/32.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "stock": 10,
  "new": true,
  "sale": true,
  "category": "women",
  "ingredients": ["red", "white", "blue"],
  "size": ["M", "L", "XL"],
  "tags": ["nike", "lifestyle"],
  "rating": 4,
  "variants": [
  {
    "color": "red",
    "images": "/assets/images/fashion/product/20.jpg"
  },
  {
    "color": "white",
    "images": "/assets/images/fashion/product/4.jpg"
  },
  {
    "color": "blue",
    "images": "/assets/images/fashion/product/35.jpg"
  }]
},
{
  "id": 8,
  "name": "Maxi Dress",
  "price": 140.00,
  "salePrice": 280.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/11.jpg", "/assets/images/fashion/product/6.jpg", "/assets/images/fashion/product/22.jpg", "/assets/images/fashion/product/1.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": true,
  "sale": false,
  "category": "women",
  "ingredients": ["black", "yellow"],
  "size": ["M", "L", "XL"],
  "tags": ["nike", "lifestyle"],
  "rating": 3,
  "variants": [
  {
    "color": "black",
    "images": "/assets/images/fashion/product/11.jpg"
  },
  {
    "color": "yellow",
    "images": "/assets/images/fashion/product/1.jpg"
  }]
},
{
  "id": 9,
  "name": "Knit Dress",
  "price": 370.00,
  "salePrice": 720.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/14.jpg", "/assets/images/fashion/product/15.jpg", "/assets/images/fashion/product/4.jpg", "/assets/images/fashion/product/19.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": true,
  "sale": false,
  "category": "women",
  "ingredients": ["pink", "gray"],
  "size": ["M", "L", "XL"],
  "tags": ["nike", "lifestyle"],
  "rating": 4,
  "variants": [
  {
    "color": "pink",
    "images": "/assets/images/fashion/product/14.jpg"
  },
  {
    "color": "gray",
    "images": "/assets/images/fashion/product/4.jpg"
  }]
},
{
  "id": 10,
  "name": "Cut Top Dress",
  "price": 110.00,
  "salePrice": 220.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/23.jpg", "/assets/images/fashion/product/22.jpg", "/assets/images/fashion/product/11.jpg", "/assets/images/fashion/product/2.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": false,
  "sale": false,
  "category": "women",
  "ingredients": ["red", "black", "white"],
  "size": ["M", "L", "XL"],
  "tags": ["nike", "lifestyle"],
  "rating": 3,
  "variants": [
  {
    "color": "red",
    "images": "/assets/images/fashion/product/23.jpg"
  },
  {
    "color": "black",
    "images": "/assets/images/fashion/product/22.jpg"
  },
  {
    "color": "white",
    "images": "/assets/images/fashion/product/2.jpg"
  }]
},
{
  "id": 11,
  "name": "Sleeveless dress",
  "price": 330.00,
  "salePrice": 660.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/9.jpg", "/assets/images/fashion/product/12.jpg", "/assets/images/fashion/product/14.jpg", "/assets/images/fashion/product/19.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "stock": 10,
  "new": true,
  "sale": true,
  "category": "women",
  "ingredients": ["orange", "gray", "pink"],
  "size": ["M", "L", "XL"],
  "tags": ["nike", "lifestyle"],
  "rating": 5,
  "variants": [
  {
    "color": "orange",
    "images": "/assets/images/fashion/product/9.jpg"
  },
  {
    "color": "gray",
    "images": "/assets/images/fashion/product/12.jpg"
  },
  {
    "color": "pink",
    "images": "/assets/images/fashion/product/14.jpg"
  }]
},
{
  "id": 12,
  "name": "Overlap Dresss",
  "price": 250.00,
  "salePrice": 500.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/2.jpg", "/assets/images/fashion/product/22.jpg", "/assets/images/fashion/product/24.jpg", "/assets/images/fashion/product/11.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "stock": 10,
  "new": true,
  "sale": false,
  "category": "women",
  "ingredients": ["white", "black"],
  "size": ["M", "L", "XL"],
  "tags": ["nike", "lifestyle"],
  "rating": 3,
  "variants": [
  {
    "color": "white",
    "images": "/assets/images/fashion/product/2.jpg"
  },
  {
    "color": "black",
    "images": "/assets/images/fashion/product/22.jpg"
  }]
},
{
  "id": 13,
  "name": "Trench Dress",
  "price": 660.00,
  "salePrice": 1320.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/31.jpg", "/assets/images/fashion/product/18.jpg", "/assets/images/fashion/product/24.jpg", "/assets/images/fashion/product/28.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": false,
  "sale": true,
  "category": "women",
  "ingredients": ["gray", "green"],
  "size": ["M", "L", "XL"],
  "tags": ["nike", "lifestyle"],
  "rating": 4,
  "variants": [
  {
    "color": "green",
    "images": "/assets/images/fashion/product/31.jpg"
  },
  {
    "color": "gray",
    "images": "/assets/images/fashion/product/24.jpg"
  }]
},
{
  "id": 14,
  "name": "Striped Dress",
  "price": 950.00,
  "salePrice": 425.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/13.jpg", "/assets/images/fashion/product/22.jpg", "/assets/images/fashion/product/10.jpg", "/assets/images/fashion/product/1.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": true,
  "sale": false,
  "category": "women",
  "ingredients": ["orange", "black", "yellow"],
  "size": ["M", "L", "XL"],
  "tags": ["nike", "lifestyle"],
  "rating": 4,
  "variants": [
  {
    "color": "orange",
    "images": "/assets/images/fashion/product/13.jpg"
  },
  {
    "color": "black",
    "images": "/assets/images/fashion/product/22.jpg"
  },
  {
    "color": "yellow",
    "images": "/assets/images/fashion/product/10.jpg"
  }]
},
{
  "id": 15,
  "name": "Cut Top Dress",
  "price": 350.00,
  "salePrice": 700.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/17.jpg", "/assets/images/fashion/product/21.jpg", "/assets/images/fashion/product/15.jpg", "/assets/images/fashion/product/12.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": false,
  "sale": false,
  "category": "women",
  "ingredients": ["black", "white", "gray"],
  "size": ["M", "L", "XL"],
  "tags": ["nike", "lifestyle"],
  "rating": 5,
  "variants": [
  {
    "color": "black",
    "images": "/assets/images/fashion/product/17.jpg"
  },
  {
    "color": "white",
    "images": "/assets/images/fashion/product/21.jpg"
  },
  {
    "color": "gray",
    "images": "/assets/images/fashion/product/12.jpg"
  },
  {
    "color": "gray",
    "images": "/assets/images/fashion/product/15.jpg"
  }]
},
{
  "id": 16,
  "name": "Floral Dress",
  "price": 556.00,
  "salePrice": 278.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/3.jpg", "/assets/images/fashion/product/10.jpg", "/assets/images/fashion/product/24.jpg", "/assets/images/fashion/product/22.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "stock": 10,
  "new": false,
  "sale": true,
  "category": "women",
  "ingredients": ["pink", "yellow", "gray"],
  "size": ["M", "L", "XL"],
  "tags": ["nike", "lifestyle"],
  "rating": 4,
  "variants": [
  {
    "color": "pink",
    "images": "/assets/images/fashion/product/3.jpg"
  },
  {
    "color": "yellow",
    "images": "/assets/images/fashion/product/10.jpg"
  },
  {
    "color": "gray",
    "images": "/assets/images/fashion/product/24.jpg"
  }]
},
{
  "id": 20,
  "name": "Floral Top",
  "price": 800.00,
  "salePrice": 400.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/25.jpg", "/assets/images/fashion/product/20.jpg", "/assets/images/fashion/product/24.jpg", "/assets/images/fashion/product/34.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "stock": 10,
  "new": false,
  "sale": false,
  "category": "women",
  "ingredients": ["red", "gray", "pink"],
  "size": ["M", "L", "XL"],
  "tags": ["nike", "lifestyle"],
  "rating": 4,
  "variants": [
  {
    "color": "red",
    "images": "/assets/images/fashion/product/25.jpg"
  },
  {
    "color": "gray",
    "images": "/assets/images/fashion/product/24.jpg"
  },
  {
    "color": "pink",
    "images": "/assets/images/fashion/product/34.jpg"
  }]
},
{
  "id": 21,
  "name": "Fitted Dress",
  "price": 1050.00,
  "salePrice": 2000.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/7.jpg", "/assets/images/fashion/product/6.jpg", "/assets/images/fashion/product/8.jpg", "/assets/images/fashion/product/20.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "stock": 10,
  "new": true,
  "sale": false,
  "category": "women",
  "ingredients": ["orange", "black", "red"],
  "size": ["M", "L", "XL"],
  "tags": ["lifestyle", "nike"],
  "rating": 5,
  "variants": [
  {
    "color": "orange",
    "images": "/assets/images/fashion/product/7.jpg"
  },
  {
    "color": "black",
    "images": "/assets/images/fashion/product/6.jpg"
  },
  {
    "color": "red",
    "images": "/assets/images/fashion/product/20.jpg"
  }]
},
{
  "id": 22,
  "name": "Half T-Shirt",
  "price": 250.00,
  "salePrice": 500.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/43.jpg", "/assets/images/fashion/product/59.jpg", "/assets/images/fashion/product/42.jpg", "/assets/images/fashion/product/57.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "stock": 10,
  "new": true,
  "sale": true,
  "category": "men",
  "ingredients": ["white", "gray", "black"],
  "size": ["M", "L", "XL"],
  "tags": ["lifestyle", "nike"],
  "rating": 4,
  "variants": [
  {
    "color": "white",
    "images": "/assets/images/fashion/product/43.jpg"
  },
  {
    "color": "gray",
    "images": "/assets/images/fashion/product/59.jpg"
  },
  {
    "color": "black",
    "images": "/assets/images/fashion/product/42.jpg"
  }]
},
{
  "id": 23,
  "name": "Half Sleeve",
  "price": 130.00,
  "salePrice": 260.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/66.jpg", "/assets/images/fashion/product/47.jpg", "/assets/images/fashion/product/74.jpg", "/assets/images/fashion/product/46.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "stock": 10,
  "new": false,
  "sale": true,
  "category": "men",
  "ingredients": ["orange", "green", "gray"],
  "size": ["M", "L", "XL"],
  "tags": ["lifestyle", "nike"],
  "rating": 5,
  "variants": [
  {
    "color": "orange",
    "images": "/assets/images/fashion/product/66.jpg"
  },
  {
    "color": "green",
    "images": "/assets/images/fashion/product/47.jpg"
  },
  {
    "color": "gray",
    "images": "/assets/images/fashion/product/74.jpg"
  }]
},
{
  "id": 24,
  "name": "Fitted T-Shirt",
  "price": 150.00,
  "salePrice": 300.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/56.jpg", "/assets/images/fashion/product/49.jpg", "/assets/images/fashion/product/72.jpg", "/assets/images/fashion/product/74.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": true,
  "sale": true,
  "category": "men",
  "ingredients": ["white", "gray"],
  "size": ["M", "L", "XL"],
  "tags": ["lifestyle", "nike"],
  "rating": 4,
  "variants": [
  {
    "color": "white",
    "images": "/assets/images/fashion/product/56.jpg"
  },
  {
    "color": "gray",
    "images": "/assets/images/fashion/product/72.jpg"
  }]
},
{
  "id": 25,
  "name": "Fitted T-Shirt",
  "price": 210.00,
  "salePrice": 420.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/47.jpg", "/assets/images/fashion/product/46.jpg", "/assets/images/fashion/product/55.jpg", "/assets/images/fashion/product/52.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": false,
  "sale": false,
  "category": "men",
  "ingredients": ["green", "gray", "black"],
  "size": ["M", "L", "XL"],
  "tags": ["lifestyle", "nike"],
  "rating": 5,
  "variants": [
  {
    "color": "green",
    "images": "/assets/images/fashion/product/47.jpg"
  },
  {
    "color": "gray",
    "images": "/assets/images/fashion/product/46.jpg"
  },
  {
    "color": "black",
    "images": "/assets/images/fashion/product/55.jpg"
  }]
},
{
  "id": 26,
  "name": "Casual Shirt",
  "price": 420.00,
  "salePrice": 840.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/63.jpg", "/assets/images/fashion/product/46.jpg", "/assets/images/fashion/product/51.jpg", "/assets/images/fashion/product/52.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": false,
  "sale": true,
  "category": "men",
  "ingredients": ["pink", "green", "yellow"],
  "size": ["M", "L", "XL"],
  "tags": ["lifestyle", "nike"],
  "rating": 4,
  "variants": [
  {
    "color": "pink",
    "images": "/assets/images/fashion/product/63.jpg"
  },
  {
    "color": "green",
    "images": "/assets/images/fashion/product/46.jpg"
  },
  {
    "color": "yellow",
    "images": "/assets/images/fashion/product/51.jpg"
  }]
},
{
  "id": 27,
  "name": "Pocket T-Shirt",
  "price": 360.00,
  "salePrice": 720.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/73.jpg", "/assets/images/fashion/product/72.jpg", "/assets/images/fashion/product/80.jpg", "/assets/images/fashion/product/42.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": true,
  "sale": true,
  "category": "men",
  "ingredients": ["orange", "black", "white"],
  "size": ["M", "L", "XL"],
  "tags": ["lifestyle", "nike"],
  "rating": 4,
  "variants": [
  {
    "color": "orange",
    "images": "/assets/images/fashion/product/73.jpg"
  },
  {
    "color": "black",
    "images": "/assets/images/fashion/product/72.jpg"
  },
  {
    "color": "white",
    "images": "/assets/images/fashion/product/80.jpg"
  }]
},
{
  "id": 28,
  "name": "Fitted T-Shirt",
  "price": 900.00,
  "salePrice": 450.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/55.jpg", "/assets/images/fashion/product/57.jpg", "/assets/images/fashion/product/47.jpg", "/assets/images/fashion/product/76.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": false,
  "sale": false,
  "category": "men",
  "ingredients": ["black", "green"],
  "size": ["M", "L", "XL"],
  "tags": ["lifestyle", "nike"],
  "rating": 5,
  "variants": [
  {
    "color": "black",
    "images": "/assets/images/fashion/product/55.jpg"
  },
  {
    "color": "green",
    "images": "/assets/images/fashion/product/47.jpg"
  }]
},
{
  "id": 29,
  "name": "Fitted T-Shirt",
  "price": 680.00,
  "salePrice": 1360.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/51.jpg", "/assets/images/fashion/product/66.jpg", "/assets/images/fashion/product/62.jpg", "/assets/images/fashion/product/77.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": false,
  "sale": false,
  "category": "men",
  "ingredients": ["white", "pink", "gray"],
  "size": ["M", "L", "XL"],
  "tags": ["lifestyle", "nike"],
  "rating": 4,
  "variants": [
  {
    "color": "white",
    "images": "/assets/images/fashion/product/51.jpg"
  },
  {
    "color": "pink",
    "images": "/assets/images/fashion/product/66.jpg"
  },
  {
    "color": "gray",
    "images": "/assets/images/fashion/product/62.jpg"
  }]
},
{
  "id": 30,
  "name": "Sweetware T-Shirt",
  "price": 500.00,
  "salePrice": 1000.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/78.jpg", "/assets/images/fashion/product/71.jpg", "/assets/images/fashion/product/72.jpg", "/assets/images/fashion/product/53.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": true,
  "sale": false,
  "category": "men",
  "ingredients": ["blue", "black"],
  "size": ["M", "L", "XL"],
  "tags": ["lifestyle", "nike"],
  "rating": 4,
  "variants": [
  {
    "color": "blue",
    "images": "/assets/images/fashion/product/78.jpg"
  },
  {
    "color": "black",
    "images": "/assets/images/fashion/product/71.jpg"
  }]
},
{
  "id": 31,
  "name": "Fitted T-Shirt",
  "price": 322.00,
  "salePrice": 161.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/49.jpg", "/assets/images/fashion/product/72.jpg", "/assets/images/fashion/product/60.jpg", "/assets/images/fashion/product/66.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": false,
  "sale": true,
  "category": "men",
  "ingredients": ["white", "black", "red"],
  "size": ["M", "L", "XL"],
  "tags": ["lifestyle", "nike"],
  "rating": 4,
  "variants": [
  {
    "color": "white",
    "images": "/assets/images/fashion/product/49.jpg"
  },
  {
    "color": "black",
    "images": "/assets/images/fashion/product/72.jpg"
  },
  {
    "color": "red",
    "images": "/assets/images/fashion/product/60.jpg"
  }]
},
{
  "id": 32,
  "name": "Full Sleeve",
  "price": 390.00,
  "salePrice": 780.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/47.jpg", "/assets/images/fashion/product/79.jpg", "/assets/images/fashion/product/70.jpg", "/assets/images/fashion/product/42.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": true,
  "sale": true,
  "category": "men",
  "ingredients": ["green", "yellow"],
  "size": ["M", "L", "XL"],
  "tags": ["lifestyle", "nike"],
  "rating": 4,
  "variants": [
  {
    "color": "green",
    "images": "/assets/images/fashion/product/47.jpg"
  },
  {
    "color": "yellow",
    "images": "/assets/images/fashion/product/79.jpg"
  }]
},
{
  "id": 33,
  "name": "Full Sleeve",
  "price": 600.00,
  "salePrice": 1200.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/51.jpg", "/assets/images/fashion/product/77.jpg", "/assets/images/fashion/product/65.jpg", "/assets/images/fashion/product/74.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "stock": 10,
  "new": false,
  "sale": false,
  "category": "men",
  "ingredients": ["yellow", "gray", "black"],
  "size": ["M", "L", "XL"],
  "tags": ["lifestyle", "nike"],
  "rating": 4,
  "variants": [
  {
    "color": "yellow",
    "images": "/assets/images/fashion/product/51.jpg"
  },
  {
    "color": "gray",
    "images": "/assets/images/fashion/product/77.jpg"
  },
  {
    "color": "black",
    "images": "/assets/images/fashion/product/65.jpg"
  }]
},
{
  "id": 34,
  "name": "Fitted Jeans",
  "price": 300.00,
  "salePrice": 600.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/76.jpg", "/assets/images/fashion/product/60.jpg", "/assets/images/fashion/product/66.jpg", "/assets/images/fashion/product/67.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": true,
  "sale": true,
  "category": "men",
  "ingredients": ["black", "red"],
  "size": ["M", "L", "XL"],
  "tags": ["lifestyle", "nike"],
  "rating": 5,
  "variants": [
  {
    "color": "black",
    "images": "/assets/images/fashion/product/76.jpg"
  },
  {
    "color": "red",
    "images": "/assets/images/fashion/product/60.jpg"
  }]
},
{
  "id": 35,
  "name": "Printed Shirt",
  "price": 200.00,
  "salePrice": 400.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/67.jpg", "/assets/images/fashion/product/77.jpg", "/assets/images/fashion/product/71.jpg", "/assets/images/fashion/product/72.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": false,
  "sale": false,
  "category": "men",
  "ingredients": ["pink", "gray"],
  "size": ["M", "L", "XL"],
  "tags": ["lifestyle", "nike"],
  "rating": 4,
  "variants": [
  {
    "color": "pink",
    "images": "/assets/images/fashion/product/67.jpg"
  },
  {
    "color": "gray",
    "images": "/assets/images/fashion/product/77.jpg"
  }]
},
{
  "id": 36,
  "name": "Fitted Danim Jeans",
  "price": 100.00,
  "salePrice": 200.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/61.jpg", "/assets/images/fashion/product/75.jpg", "/assets/images/fashion/product/56.jpg", "/assets/images/fashion/product/42.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": false,
  "sale": false,
  "category": "men",
  "ingredients": ["blue", "black", "white"],
  "size": ["M", "L", "XL"],
  "tags": ["lifestyle", "nike"],
  "rating": 4,
  "variants": [
  {
    "color": "blue",
    "images": "/assets/images/fashion/product/61.jpg"
  },
  {
    "color": "black",
    "images": "/assets/images/fashion/product/75.jpg"
  },
  {
    "color": "white",
    "images": "/assets/images/fashion/product/56.jpg"
  }]
},
{
  "id": 37,
  "name": "Casual Jeans",
  "price": 160.00,
  "salePrice": 320.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/66.jpg", "/assets/images/fashion/product/75.jpg", "/assets/images/fashion/product/78.jpg", "/assets/images/fashion/product/80.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": false,
  "sale": false,
  "category": "men",
  "ingredients": ["red", "white"],
  "size": ["M", "L", "XL"],
  "tags": ["lifestyle", "nike"],
  "rating": 4,
  "variants": [
  {
    "color": "red",
    "images": "/assets/images/fashion/product/66.jpg"
  },
  {
    "color": "white",
    "images": "/assets/images/fashion/product/75.jpg"
  }]
},
{
  "id": 38,
  "name": "Full Sleeve",
  "price": 450.00,
  "salePrice": 900.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/60.jpg", "/assets/images/fashion/product/74.jpg", "/assets/images/fashion/product/47.jpg", "/assets/images/fashion/product/72.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": false,
  "sale": true,
  "category": "men",
  "ingredients": ["orange", "gray", "green"],
  "size": ["M", "L", "XL"],
  "tags": ["lifestyle", "nike"],
  "rating": 4,
  "variants": [
  {
    "color": "orange",
    "images": "/assets/images/fashion/product/60.jpg"
  },
  {
    "color": "gray",
    "images": "/assets/images/fashion/product/74.jpg"
  },
  {
    "color": "green",
    "images": "/assets/images/fashion/product/47.jpg"
  }]
},
{
  "id": 39,
  "name": "Fitted T-Shirt",
  "price": 115.00,
  "salePrice": 230.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/70.jpg", "/assets/images/fashion/product/67.jpg", "/assets/images/fashion/product/64.jpg", "/assets/images/fashion/product/65.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": false,
  "sale": false,
  "category": "men",
  "ingredients": ["pink", "white"],
  "size": ["M", "L", "XL"],
  "tags": ["lifestyle", "nike"],
  "rating": 4,
  "variants": [
  {
    "color": "white",
    "images": "/assets/images/fashion/product/70.jpg"
  },
  {
    "color": "pink",
    "images": "/assets/images/fashion/product/67.jpg"
  }]
},
{
  "id": 40,
  "name": "Track Jeans",
  "price": 480.00,
  "salePrice": 240.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/69.jpg", "/assets/images/fashion/product/55.jpg", "/assets/images/fashion/product/57.jpg", "/assets/images/fashion/product/75.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": true,
  "sale": true,
  "category": "men",
  "ingredients": ["black", "gray", "orange"],
  "size": ["M", "L", "XL"],
  "tags": ["lifestyle", "nike"],
  "rating": 4,
  "variants": [
  {
    "color": "black",
    "images": "/assets/images/fashion/product/69.jpg"
  }]
},
{
  "id": 41,
  "name": "Fitted T-Shirt",
  "price": 110.00,
  "salePrice": 220.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/49.jpg", "/assets/images/fashion/product/65.jpg", "/assets/images/fashion/product/68.jpg", "/assets/images/fashion/product/69.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"stock": 10,
  "new": true,
  "sale": true,
  "category": "men",
  "ingredients": ["blue", "black"],
  "size": ["M", "L", "XL"],
  "tags": ["lifestyle", "nike"],
  "rating": 4,
  "variants": [
  {
    "color": "blue",
    "images": "/assets/images/fashion/product/49.jpg"
  },
  {
    "color": "black",
    "images": "/assets/images/fashion/product/65.jpg"
  }]
},
{
  "id": 42,
  "name": "Half Sleeve",
  "price": 200.00,
  "salePrice": 400.00,
  "discount": 50,
  "pictures": ["/assets/images/fashion/product/62.jpg", "/assets/images/fashion/product/45.jpg", "/assets/images/fashion/product/48.jpg", "/assets/images/fashion/product/49.jpg"],
  "shortDetails": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "stock": 10,
  "new": false,
  "sale": true,
  "category": "men",
  "ingredients": ["gray", "black", "white"],
  "size": ["M", "L", "XL"],
  "tags": ["lifestyle", "nike"],
  "rating": 4,
  "variants": [
  {
    "color": "gray",
    "images": "/assets/images/fashion/product/62.jpg"
  },
  {
    "color": "black",
    "images": "/assets/images/fashion/product/45.jpg"
  },
  {
    "color": "white",
    "images": "/assets/images/fashion/product/48.jpg"
  }]
}
]
export default allItems