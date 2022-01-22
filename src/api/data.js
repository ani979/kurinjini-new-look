import allProducts from '../constants/ProductConstants'
import { ROSEMARY, TEATREE, LEMON, SWEET_ALMOND, VITAMIN_E, FRANKINCENSE, GERANIUM, GRAPESEED, SHEA_BUTTER, SAFFLOWER, HEMP, 
  CUCUMBER_SEED, ARGAN, VIRGIN_COCONUT, MORINGA, JOJOBA, BEESWAX, MANGO_BUTTER, APRICOT, AVOCADO, VIRIN_OLIVE, COCOA_BUTTER, 
  COCONUT, PURE_AFRICAN_SHEA_BUTTER, EUCALYPTUS, UNREFINED_BEESWAX, CASTER_SUGAR, KOKUM_BUTTER, ROSE_ESSENTIALS, SANDALWOOD, 
  HELICHRYSUM, ROSEHIP, ALOVE, LAVENDER, CARROT_SEED, SAFFRON, LEMON_GRASS, NEEM, HIBISCUS, FLAVOUR_OILS, GLYCERINE, 
  VANILLA_FRAGRANCE, COCOA_POWDER, CASHMERE, CHERRY_BLOSSOM_FRAGRANCE, MANGA_MANDARIN_FRAGRANCE, 
  THYME_LEAVES, BASIL_ESSENTIALS, WHEAT_GERM, UNREFINED_SHEA_BUTTER, FRESH_MINT, FRESH_CUCUMBER, BESAN, TURMERIC, 
  LEMON_EXTRACT, GOAT_MILK, FURTHER_CUSTOMIZATION, RASPBERRY_SEED, SUNFLOWER_WAX, CHAMOMILE, WILD_ALMONDS, CANNABIS_SATIVA, 
  WALNUT_COFFEE, VEGETABLE_GLYCERINE, HONEY, NEEM_POWDER, NEEM_OIL, COCONUT_BUTTER, KAOLIN_CLAY, DEAD_SEA_MUD, GREEN_TEA, 
  CUCUMBER_GEL, CINNAMON_POWDER, KHUS_KHUS, JAU_FLOUR, ORANGE_PEEL, CHANA, MASOOR_DAL, 
  OATMEAL, METHI, HALDI, BADAAM, ONION_SEED_OIL, CITRONELLA_OIL, CHIKMAGLAUR_RAW_COFFEE, COLD_PRESSED_COCONUT_OIL, RICE_BRAN_OIL, TURMERIC_OIL, RAW_TURMERIC, COCONUT_CREAM } from '../constants/Ingredients';
import { AGEING, DRYNESS, SUBCATEGORY_KIDS, ACNE, DRYLIPS, FLAKYLIPS, DULLSKIN, DARK_CIRCLES, BLEMISHES, PIGMENTATION, DANDRUFF, SPLIT_ENDS, HAIR_FALL, HARD_HEELS, DEAD_SKIN_BODY, FRESH_BATH, SENSITIVE_SKIN, TANNEDSKIN, SUNPROTECTION, SCARS, DARKLIPS, DETOX, DARK_SPOTS, MOSQUITO_BITES } from '../constants/Tags';
import { SIXTY, ONETWENTY, ROUND_FIVEGM, STICK_FIVEGM, TWENTY, FIFTEEN, EIGHTY, HUNDRED_GMS, EIGHTY_GMS, FORTY_GMS, FIFTY_GMS, FIFTY_ML, CLOSE_TO_HUNDRED, APPROX_ONETWENTY, ONE_TWENTY_GM, HUNDRED_ML, ROUND_TENGM } from '../constants/Prices-Quantity';
import React from 'react'
import { LIPBALM_ONE,LIPBALM_THREE, LIPBALM_FIVE } from '../constants/ImageConstants';
import { FLAVOUR_MOISTURIZING_CREAMS, ROSE_PETALS, FLAVOUR_LIP_BALMS, FLAVOUR_LIP_BALMS_KIDS, FLAVOUR_LIP_SCRUBS, VEGAN_LIP_SCRUBS, VARIANTS_RENAISSANCE, VARIANTS_LOOFAH_SCRUBBER, VARIANTS_CASTER_SUGAR_SCRUBBER, VARIANTS_BODY_SCRUBBER, ANTI_AGEING, VARIANTS_UBTAN_SOAPS, VARIANTS_FACESCRUBBER, FLAVOUR_FACE_MASK, VARIANTS_BODY_BUTTER, SPEARMINT, VARITIES_MOSQUITO_REPELLANT } from '../constants/variants';

const allItems = [
{
  "id": "moisturizing-creams",
  "name": allProducts.moisturizingCreams,
  "type":allProducts.skin,
  "price": 200,
  "salePrice": 200,
  "discount": 0,
  "pictures": ["/assets/images/moisturizingCreams/frenchLavender_1.jpg", "/assets/images/moisturizingCreams/frenchLavender_2.jpg", "/assets/images/moisturizingCreams/rose_big.jpg"],
  "shortDetails": "Moisturizing cream for daily use",
  "description": <div><p>Daily moisturizing is vital for a healthy skin. Leaving skin without a moisturizer means compromising the protective skin barrier. Kurinjini brings to you a Shea, Mango butter based moisturizer that also has the anti-oxidant properties brought by Vitamin-E. Along with these, we have also added Jojoba and Sweet Almond oils provide that extra nourishment to the skin. We also take customized orders for your specific requirement on fragrance.</p><br/>
                <h4>About Vegan Winter Bloom moisturizer</h4><p>Moisturizing winter cream that hydrates the skin and works against winter flaking. Mild fragrannce of essential oils added with goodnness of cocoa butter that repairs chapped skin too. Vitamin-E in this cream gves your skin deep nourishhment keeping it soft and supple. <br/><b>Its a vegan version of our moisturizer and doesn't contain beeswax.</b></p></div>,
  "stock": 10,
  "new": false,
  "sale": false,
  "quantity":"60 ml",
  "category": allProducts.faceCare,
  "subCategory":[allProducts.moisturizingCreams],
  "ingredients": [JOJOBA, SWEET_ALMOND, VITAMIN_E, MANGO_BUTTER, TEATREE, ROSEMARY,COCONUT,VIRIN_OLIVE, BEESWAX, AVOCADO, SUNFLOWER_WAX, FRANKINCENSE],
  "size": [SIXTY],
  "tags": [DRYNESS],
  "rating": 4,
  "variants": FLAVOUR_MOISTURIZING_CREAMS,
  "goodFor":[allProducts.allKindsOfSkin],
  "precaution":"All our moisturizing creams should be kept away from sunlight as it may lose its consistency"
},
{
  "id": "winter-bloom-vegan",
  "name": allProducts.veganMoisturizingCream,
  "type":allProducts.skin,
  "pricePerSize":[{size:SIXTY,price:200.00}, {size:ONETWENTY,price:400.00}],
  "price": 200,
  "salePrice": 200,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/FaceCare/MoisturizingCreams/winterBloom.jpg"],
  "shortDetails": "Moisturizing cream for daily use",
  "description": <div><p>Daily moisturizing is vital for a healthy skin. Leaving skin without a moisturizer means compromising the protective skin barrier. Kurinjini brings to you a Shea, Mango butter based moisturizer that also has the anti-oxidant properties brought by Vitamin-E. Along with these, we have also added Jojoba and Sweet Almond oils provide that extra nourishment to the skin. We also take customized orders for your specific requirement on fragrance.</p><br/>
                <h4>About Vegan Winter Bloom moisturizer</h4><p>Moisturizing winter cream that hydrates the skin and works against winter flaking. Mild fragrannce of essential oils added with goodnness of cocoa butter that repairs chapped skin too. Vitamin-E in this cream gves your skin deep nourishhment keeping it soft and supple. <br/><b>Its a vegan version of our moisturizer and doesn't contain beeswax.</b></p></div>,
  "stock": 10,
  "new": false,
  "sale": false,
  "category": allProducts.faceCare,
  "subCategory":[allProducts.moisturizingCreams, allProducts.vegan],
  "ingredients": [JOJOBA, SWEET_ALMOND, VITAMIN_E, MANGO_BUTTER, TEATREE, ROSEMARY,COCONUT,VIRIN_OLIVE, AVOCADO, SUNFLOWER_WAX, FRANKINCENSE],
  "tags": [DRYNESS],
  "rating": 4,
  "variants":[],
  "size": [SIXTY, ONETWENTY],
  "goodFor":[allProducts.allKindsOfSkin],
  "precaution":"All our moisturizing creams should be kept away from sunlight as it may lose its consistency"
},
{
  "id": "immortal",
  "name": "Immortal",
  "type":allProducts.skin,
  "price": 300.00,
  "salePrice": 300.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/FaceCare/SpecialNeeds/Immortal_three.jpg", "/assets/images/kurinjini-images/FaceCare/SpecialNeeds/Immortal_two.jpg"],
  "shortDetails": "Immortal is our most popular face cream.",
  "description": "Cellular regeneration is the key to a youthful skin, and essential oils provide a way of doing this which is far more pleasant and safe than methods involving synthetic chemicals.Immortal is not only an anti-ageing cream but it also helps fight hyperpigmentation. It has ingredients that stimualte skin cells into reproducing at a quicker rate, thus reducing the time-lag between new skin growth and the elimination of old cells. Immortal has essentials that are considered to be anti-wrinkle, act as a skin tightening agent, helping in reducing dark spots and blemishes. It is high in Vitamin-A and Vitamin-E oil that prevents formation of free radicals that are scientifically proven to be one of the reasons of pre-mature ageing. Immortal is our most popular face cream. Lot of people have given a great feedback on this cream.",
  "stock": 10,
  "new": false,
  "sale": false,
  "category": allProducts.faceCare,
  "ingredients": [FRANKINCENSE, GERANIUM, AVOCADO, MORINGA, ARGAN, JOJOBA, GRAPESEED, TEATREE, ROSEMARY, HEMP, CUCUMBER_SEED,  COCONUT, BEESWAX, SWEET_ALMOND, VITAMIN_E, MANGO_BUTTER, PURE_AFRICAN_SHEA_BUTTER, APRICOT],
  "size": [SIXTY],
  "tags": [AGEING, DULLSKIN, DRYNESS, BLEMISHES],
  "rating": 5,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.moisturizingCreams, ANTI_AGEING]
},
{
  "id": "fluffy",
  "name": "Fluffy",
  "type":allProducts.skin,
  "price": 300.00,
  "salePrice": 300.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/FaceCare/SpecialNeeds/fluffy_two.jpg","/assets/images/kurinjini-images/FaceCare/SpecialNeeds/fluffy_one.jpg"],
  "shortDetails": "A cream for Kids",
  "description": "Very mild cream with combination of kids skin friendly oil like Jojoba, Argan and Almond. The essential oils fight infection and promote healing thus providing parents some relaxation in caring for their child.",
  "stock": 10,
  "new": false,
  "sale": false,
  "category": allProducts.faceCare,
  "ingredients": [JOJOBA, VITAMIN_E, SWEET_ALMOND, ARGAN, AVOCADO, VIRGIN_COCONUT, VIRIN_OLIVE, COCOA_BUTTER, MANGO_BUTTER, SHEA_BUTTER],
  "size": [SIXTY],
  "tags": [DRYNESS],
  "rating": 5,
  "variants": [],
  "goodFor":[allProducts.kidsSpecial],
  "subCategory":[allProducts.moisturizingCreams, SUBCATEGORY_KIDS]
},
{
  "id": "pacific",
  "name": "Pacific",
  "type":allProducts.skin,
  "price": 300.00,
  "salePrice": 300.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/FaceCare/SpecialNeeds/pacific_big.jpg"],
  "shortDetails": "A cream for sensitive skin",
  "description": "Pacific has speciality of soothing sensitive skin. It has ingredients like Rosemary, Tea tree and safflower oil that refresh oily skin without causing excess dryness. Tea tree and Rosemary are considered to be a natural antiseptic and has astringent properties. It is effective in lightening scars, soothing pimples apart from being anti-blemish, anti-microbial agents.",
  "stock": 0,
  "new": false,
  "sale": false,
  "category": allProducts.faceCare,
  "ingredients": [ROSEMARY, TEATREE, EUCALYPTUS, SAFFLOWER, LEMON, HEMP, CUCUMBER_SEED, ARGAN, VIRGIN_COCONUT, SWEET_ALMOND, VITAMIN_E, FRANKINCENSE, GERANIUM, MORINGA, JOJOBA, GRAPESEED, BEESWAX, MANGO_BUTTER, PURE_AFRICAN_SHEA_BUTTER, APRICOT],
  "size": [SIXTY],
  "tags": [ACNE],
  "rating": 3,
  "variants": [],
  "goodFor":[allProducts.acneproneSkin, allProducts.allKindsOfSkin, allProducts.oilySkin],
  "subCategory":[allProducts.moisturizingCreams, SENSITIVE_SKIN]
},
{
  "id": "lip-balms",
  "name": "Lip Balms",
  "type":allProducts.skin,
  "price": 200.00,
  "salePrice": 200.00,
  "discount": 0,
  "pictures": [LIPBALM_ONE,LIPBALM_THREE, LIPBALM_FIVE],
  "shortDetails": "Lip care for all seasons",
  "description": "Lip balms are made of cocoa butter which is a natural, meltable oil extracted from the cocoa bean. Cocoa butter is great for naturally healing dry, sensitive skin. it has a mild fragrance, a smooth texture and is ultra-hydrating. Unrefined beeswax, consisting of naturally produced vitamins makes it healthier and prevents from further dryness and chapping of the lips.",
  "stock": 20,
  "new": false,
  "sale": false,
  "category": allProducts.lipCare,
  "ingredients": [UNREFINED_BEESWAX, COCOA_BUTTER, JOJOBA, SWEET_ALMOND, VITAMIN_E, AVOCADO],
  "size": [ROUND_FIVEGM, STICK_FIVEGM],
  "tags": [DRYLIPS],
  "rating": 4,
  "variants": FLAVOUR_LIP_BALMS,
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.lipbalm]
},
{
  "id": "lip-blams-kids",
  "name": "Lip Balms for kids",
  "type":allProducts.skin,
  "price": 200.00,
  "salePrice": 200.00,
  "discount": 0,
  "pictures": [LIPBALM_ONE,LIPBALM_THREE, LIPBALM_FIVE],
  "shortDetails": "Lip care especially for kids",
  "description": "Give your kids the freedom from dry and chapped lips. Strawberry and Chocolate flavoured lip balm made primarily out of Cocoa Butter, Avocado oil & Sweet Almond oil. The added oils provide the necessary hydration and softness.",
  "stock": 20,
  "new": false,
  "sale": false,
  "category": allProducts.lipCare,
  "ingredients": [UNREFINED_BEESWAX, COCOA_BUTTER, SWEET_ALMOND, VITAMIN_E, AVOCADO],
  "size": [ROUND_FIVEGM, STICK_FIVEGM],
  "tags": [DRYLIPS],
  "rating": 4,
  "variants": FLAVOUR_LIP_BALMS_KIDS,
  "goodFor":[allProducts.kidsSpecial, allProducts.allKindsOfSkin],
  "subCategory":[allProducts.lipbalm, SUBCATEGORY_KIDS]
},
{
  "id": "lip-scrubs",
  "name": "Lip Scrubs",
  "type":allProducts.skin,
  "price": 250.00,
  "salePrice": 250.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/LipCare/lipScrub4_small.jpg"],
  "shortDetails": "Lip scrub that peels off dry and flaky skin",
  "description": "Sugar-based exfoliator that peels off dry and flaky skin from your lips along with providing the needed hydration and nourishment. It has a sweet sugary flavour through caster sugar blended with raw unbleached beeswax and Cocoa butter. The nourishing oils used are Sweet Almond, Jojoba and Vitamin-E.",
  "stock": 20,
  "new": false,
  "sale": false,
  "category": allProducts.lipCare,
  "ingredients": [CASTER_SUGAR, UNREFINED_BEESWAX, COCOA_BUTTER, SWEET_ALMOND, VITAMIN_E],
  "size": [ROUND_TENGM],
  "tags": [DRYLIPS, FLAKYLIPS],
  "rating": 4,
  "variants": FLAVOUR_LIP_SCRUBS,
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.lipScrubs],
  "howToUse":"Rub gently on the lips and after some continuous rounds of rubbing, wipe off with towel or rinse with water"
},
{
  "id": "vegan-lip-scrubs",
  "name": "Vegan Lip Scrubs",
  "type":allProducts.skin,
  "price": 250.00,
  "salePrice": 250.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/LipCare/lipScrub4_small.jpg"],
  "shortDetails": "Lip scrub that peels off dry and flaky skin",
  "description": "Natural fragrance and colour derived from powder like rose, chocolate strawberry powder that is made at home. Along with keeping skin soft and smooth, it is also rich in Vitamin-C and other anti-oxidants that strengthens skin cells and tissues. Other ingredients like Kokum butter has properties that rejuvenates damaged skin cells which makes it ideal for lip scrub. Kokum butter has properties that rejuvenates damaged skin cells which makes it ideal for lip scrub. <b> Doesn’t contain any beeswax</b>",
  "stock": 20,
  "new": false,
  "sale": false,
  "category": allProducts.lipCare,
  "ingredients": [KOKUM_BUTTER, COCOA_BUTTER, ROSE_ESSENTIALS],
  "size": [ROUND_TENGM],
  "tags": [DRYLIPS, FLAKYLIPS],
  "rating": 4,
  "variants": VEGAN_LIP_SCRUBS,
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.lipScrubsVegan, allProducts.vegan, allProducts.lipScrubs],
  "howToUse":"Rub gently on the lips and after some continuous rounds of rubbing, wipe off with towel or rinse with water"
},
{
  "id": "sparkle",
  "name": "Sparkle",
  "type":allProducts.skin,
  "price": 350.00,
  "salePrice": 350.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/Oils/Serums/sparkle_big.jpg", "/assets/images/kurinjini-images/Oils/Serums/sparkleTwo_big.jpg"],
  "shortDetails": "Skin brightening serum",
  "description": "As the name suggests, it's a silicone free skin brightening overnight serum that absorbs quickly in the skin and gives a radiating effect over a period of time. Pores are tiny openings in the skin that release oil and sweat. When pores are clogged, it can result in blackheads or acne. This serum aims to unclog the pores. It also has Helichrysum essential oil that helps smooth both skin tone and texture, reduces the appearance of fine lines, and its emollient properties help keep skin hydrated. Helichrysum is also known to be beneficial for treating sunburns. Along with it is also added few drops of Mysore Sandalwood oil that acts as an antiseptic and anti-inflammatory agent too apart from being a brightening agent. Also added is Rosehip that tightens the pores and brightens your skin. Mixed with other essentials and carrier oils, this brightening skin serum is good for all kinds of skin.",
  "stock": 5,
  "new": false,
  "sale": false,
  "category": allProducts.oilsAndSerums,
  "ingredients": [SANDALWOOD, HELICHRYSUM, ROSEHIP, FRANKINCENSE, VITAMIN_E, JOJOBA, SWEET_ALMOND, HEMP, AVOCADO, MORINGA, ALOVE],
  "size": [TWENTY],
  "tags": [DULLSKIN, DRYNESS],
  "rating": 5,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.faceSerum, allProducts.oilsAndSerums],
  "howToUse":"It's a night application cream. Take a small quantity on your finger tip and apply gently after a face wash on your face."
},
{
  "id": "moonstone",
  "name": "Moonstone",
  "type":allProducts.skin,
  "price": 350.00,
  "salePrice": 350.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/Oils/Serums/moonstone_big.jpg"],
  "shortDetails": "An under eye serum to get rid of dark circles",
  "description": "Moonstone is an under eye serum, an attempt from us to come up with something that can reduce the dark circles. Apart from some of the ingredients already present in “Sparkle”, there is also cucumber seed and carrot seed oil that reduces stress and tiredness from the eyes, keeping it cool. With its high content of vitamin C, beta-carotene and manganese, cucumber oil can stimulate collagen production, too. Collagen is the protein that provides the structure of your skin. It helps boosting your body’s natural collagen synthesis without having to rely on chemicals and synthetic ingredients. Carrot seed essential oil, a skin lightening agent, improves moisture retention, reduce the look of tired skin, and help nourish dry areas. Another essential added is Lavender, that helps enhance blood circulation and a natural healer along with reducing stress and anxiety. All these added with carrier oils forms this natural healer Moonstone.",
  "stock": 5,
  "new": false,
  "sale": false,
  "category": allProducts.oilsAndSerums,
  "ingredients": [SANDALWOOD, HELICHRYSUM, GERANIUM, LAVENDER, CARROT_SEED, CUCUMBER_SEED, ROSEHIP, VITAMIN_E, JOJOBA, SWEET_ALMOND, HEMP, ALOVE],
  "size": [TWENTY],
  "tags": [DARK_CIRCLES],
  "rating": 4,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.darkCirclesRemoval, allProducts.oilsAndSerums],
  "howToUse":"It's a night application cream. Take a small quantity on your finger tip and massage gently under your eyes so that it improves blood circulation."
},
{
  "id": "renaissance",
  "name": "Renaissance",
  "type":allProducts.skin,
  "price": 200.00,
  "salePrice": 200.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/Oils/hairandface/renaissance_1.jpg", "/assets/images/kurinjini-images/Oils/hairandface/renaissance_2.jpg"],
  "shortDetails": "Extra-hydrating night application oil",
  "description": <p>Extra-hydrating night application oil that has quick absorption quality. Its a combination of oils and essential oils having properties of skin brightening, removal of hyper-pigmentation, even removing blemishes. The basic component is Vitamin-E oil and along with carrier oils as Sweet Almond oil.
  <br/><br/>
  Additionally we also support specific customized needs:
  <ul>
    <li>For glowing skin </li>
    <li> Anti-ageing </li>
    <li> Acne control </li>
  </ul>  
  <br/>
  <b><i> it is available in more convenient to use glass droppers.</i></b></p>,
  "stock": 20,
  "new": true,
  "sale": false,
  "category": allProducts.oilsAndSerums,
  "ingredients": [SAFFRON, ARGAN, MORINGA, TEATREE, GERANIUM, ROSEMARY, JOJOBA, GRAPESEED, CUCUMBER_SEED, HEMP, AVOCADO, FRANKINCENSE, LEMON_GRASS, COCONUT],
  "size": [FIFTEEN],
  "tags": [DARK_CIRCLES, BLEMISHES, PIGMENTATION, ACNE, DRYNESS, DULLSKIN, AGEING],
  "rating": 5,
  "variants": VARIANTS_RENAISSANCE,
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.nightOil, allProducts.oilsAndSerums, ANTI_AGEING],
  "howToUse":"Apply after a face wash during night before going to bed."
},
{
  "id": "resurgence-intensive",
  "name": "Resurgence - Intensive hair oil treatment",
  "type":allProducts.hair,
  "price": 350.00,
  "salePrice": 350.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/Oils/hairandface/hair.jpg"],
  "shortDetails": "An intenstive hair oil treatment",
  "description": <p> Our hair is just as sensitive as our skin. The basic substance of hair is keratin, a strong protein. When we lose our hair as each one comes to the end, a new hair should grow in its place. This should happen instantaneously but because of our lifestyle and synthetic chemicals that we apply with shampoo or conditioners, the time between a hair getting lost and new one coming up can extend so that our hair begins to thin. “Resurgence” is an intense hair treatment oil. It consists of Argan, Grapeseed essential oils that consists of Vitamin-E, a natural anti-oxidant that nourishes dry damaged hair, repairs and rejuvenates, thereby protecting it and giving it the needed shine. Hemp oil is a great oil for scalp and helps grow hair faster, thicker and longer. Avocado oil present acts as a carrier oil stimulating the blood flow and unclog blocked follicles.</p>,
  "stock": 10,
  "new": false,
  "sale": false,
  "category": allProducts.oilsAndSerums,
  "ingredients": [ARGAN, MORINGA, GRAPESEED, JOJOBA, HEMP, FRANKINCENSE, SWEET_ALMOND, VITAMIN_E],
  "size": [EIGHTY],
  "tags": [DANDRUFF, SPLIT_ENDS, HAIR_FALL],
  "rating": 5,
  "variants": [],
  "goodFor":[allProducts.allKindsOfHair],
  "subCategory":[allProducts.hairOilIntensive, allProducts.hairOilAntiDandruff],
  "howToUse":"Direct application on your hair and scalp"
},
{
  "id": "resurgence-anti-dandruff",
  "name": "Resurgence - Anti-Dandruff treatment",
  "type":allProducts.hair,
  "price": 350.00,
  "salePrice": 350.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/Oils/hairandface/hair.jpg"],
  "shortDetails": "Anti-dandruff treatment",
  "description": <p> The little white flakes scattered on shoulders shout out loudly that someone’s head and hair are in bad condition. But with essential oils, you can get to the root of the problem and get rid of this once and for all. Essential Oils like Rosemary, Tea Tree and oils like Jojoba, Hibiscus and Neem are effective in treating dandruff and split ends.</p>,
  "stock": 10,
  "new": false,
  "sale": false,
  "category": allProducts.oilsAndSerums,
  "ingredients": [ARGAN, TEATREE, NEEM, HIBISCUS, MORINGA, ROSEMARY, GRAPESEED, AVOCADO, JOJOBA, HEMP, FRANKINCENSE],
  "size": [EIGHTY],
  "tags": [DANDRUFF],
  "rating": 4,
  "variants": [],
  "goodFor":[allProducts.allKindsOfHair],
  "subCategory":[allProducts.hairOilIntensive, allProducts.hairOilAntiDandruff],
  "howToUse":"Direct application on your hair and scalp"
},
{
  "id": "resurgence-kids",
  "name": "Resurgence - Hair treatment for kids",
  "type":allProducts.hair,
  "price": 300.00,
  "salePrice": 300.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/Oils/hairandface/hair.jpg"],
  "shortDetails": "Hair oil for your kids",
  "description": <p>Kids hair oil is gentle in nature and consist of Argan and Jojoba mixed with most effective natural cold pressed oils like Coconut and Virgin Olive. It helps keep small ones' hair hydrated & moisturized while it also serves to nourish & soften the scalp. </p>,
  "stock": 10,
  "new": false,
  "sale": false,
  "category": allProducts.oilsAndSerums,
  "ingredients": [ARGAN, JOJOBA, HEMP, SWEET_ALMOND, AVOCADO, VIRIN_OLIVE, COCONUT],
  "size": [EIGHTY],
  "tags": [DANDRUFF, HAIR_FALL],
  "rating": 4,
  "variants": [],
  "goodFor":[allProducts.kidsSpecial],
  "subCategory":[allProducts.hairOilKids, SUBCATEGORY_KIDS],
  "howToUse":"Direct application on your hair and scalp"
},
{
  "id": "scrubber-looafh",
  "name": "Scrubber - Loofah based",
  "type":allProducts.skin,
  "price": 100.00,
  "salePrice": 100.00,
  "discount": 0,
  "pictures": [],
  "shortDetails": "Hard scrubber for your heels",
  "description": <p> Loofahs are made from the dried fruit of a tropical plant called Loofah. Loofah is strong and suitable for hard heels. 
  Available with addition of some essential oils or fragrance that are proven to be not only beneficial on your skin but also your life. They have properties to reducing stress, anxiety, bringing calmness and soothing on skin too.</p>,
  "stock": 10,
  "new": false,
  "sale": false,
  "category": allProducts.scrubbing,
  "ingredients": [UNREFINED_BEESWAX, COCOA_BUTTER, SWEET_ALMOND, JOJOBA, VITAMIN_E],
  "size": [HUNDRED_GMS],
  "tags": [HARD_HEELS],
  "rating": 4,
  "variants": VARIANTS_LOOFAH_SCRUBBER,
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.footScrubbers, allProducts.soaps],
  "howToUse":"After applying the scrubber, keep it on a dry surface"
},
{
  "id": "scrubber-caster-sugar",
  "name": "Scrubber - Caster Sugar based",
  "type":allProducts.skin,
  "price": 70.00,
  "salePrice": 70.00,
  "discount": 0,
  "pictures": [],
  "shortDetails": "A normal scrubber for your heels",
  "description": <p> A soap that removes dry skin from your feet making it smooth and clean. Currently in two variants, caster sugar is fine-grained sugar that helps to maintain moisture in the skin and makes a gentle scrub, removing dead cells to brighten, smooth and moisturise the skin.
  Available with addition of some essential oils or fragrance that are proven to be not only beneficial on your skin but also your life. They have properties to reducing stress, anxiety, bringing calmness and soothing on skin too.
  </p>,
  "stock": 0,
  "new": false,
  "sale": false,
  "category": allProducts.scrubbing,
  "ingredients": [CASTER_SUGAR, SWEET_ALMOND, VITAMIN_E, FLAVOUR_OILS],
  "size": [EIGHTY_GMS],
  "tags": [HARD_HEELS],
  "rating": 4,
  "variants": VARIANTS_CASTER_SUGAR_SCRUBBER,
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.footScrubbers, allProducts.soaps],
  "howToUse":"After applying the scrubber, keep it on a dry surface"
},
{
  "id": "mild-scrubbers",
  "name": "Mild scrubbers",
  "type":allProducts.skin,
  "price": 100.00,
  "salePrice": 100.00,
  "discount": 0,
  "pictures": [],
  "shortDetails": "Gentle scrubbing soap for your body",
  "description": <p> These are gentle exfoliators that gently remove the dead skin cells and nourishes the layer below. These are very gentle, deeply penetrates into skin, flushes out toxins and removes dead skin cells making skin soft and supple.</p>,
  "stock": 10,
  "new": false,
  "sale": false,
  "category": allProducts.scrubbing,
  "ingredients": [COCONUT, GLYCERINE, FLAVOUR_OILS],
  "size": [HUNDRED_GMS],
  "tags": [DEAD_SKIN_BODY],
  "rating": 4,
  "variants": VARIANTS_BODY_SCRUBBER,
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.scrubbers, allProducts.soaps],
  "howToUse":"After applying the scrubber, keep it on a dry surface"
},
{
  "id": "soap-chocolate",
  "name": "Soap - Vanilla Chocolate",
  "type":allProducts.skin,
  "price": 80.00,
  "salePrice": 80.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/Soaps/vanilla_choc_3.jpg", "/assets/images/kurinjini-images/Soaps/vanilla_choc_4.jpg", "/assets/images/kurinjini-images/Soaps/vanilla_choc_2.jpg"],
  "shortDetails": "For a chocolaty bath",
  "description": <p>Remember when bath time used to be fun for the kids, when they enjoyed their time in bubbles, and getting clean was a joy? Somewhere along the way bath and/or shower time has become just another routine. So let’s bring back the giggles with a delicious smelling Chocolate and Vanilla. The kids will not only enjoy bathing but will have a feeling of freshness at the start of the day.</p>,
  "stock": 10,
  "new": false,
  "sale": false,
  "category": allProducts.soaps,
  "ingredients": [COCONUT, SHEA_BUTTER, GLYCERINE, COCOA_POWDER, VANILLA_FRAGRANCE],
  "size": [EIGHTY_GMS],
  "tags": [FRESH_BATH],
  "rating": 4,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin, allProducts.kidsSpecial],
  "subCategory":[allProducts.normalSoaps, SUBCATEGORY_KIDS]
},
{
  "id": "shea-cashmere",
  "name": "Soap - Shea Cashmere",
  "type":allProducts.skin,
  "price": 100.00,
  "salePrice": 100.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/Soaps/shea_cashmere_1.jpg"],
  "shortDetails": "For a fragrant bath",
  "description": <p>A fragrance balanced perfectly between sweet, warm and comforting. A rich buttery opening note combined with warm coconut leaves a fascinating scent. A soft moisturising soaping bar made with Shea Butter, Coconut oil base, Cashmere & Cherry blossom fragrance.</p>,
  "stock": 0,
  "new": false,
  "sale": false,
  "category": allProducts.soaps,
  "ingredients": [SHEA_BUTTER, COCONUT, CASHMERE, CHERRY_BLOSSOM_FRAGRANCE],
  "size": [HUNDRED_GMS],
  "tags": [FRESH_BATH],
  "rating": 4,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.normalSoaps]
},
{
  "id": "mango-mandarin",
  "name": "Soap - Mango Mandarin",
  "type":allProducts.skin,
  "price": 100.00,
  "salePrice": 100.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/Soaps/shea_punch_mango_one.jpg", "/assets/images/kurinjini-images/Soaps/shea_punch_mango_two.jpg"],
  "shortDetails": "For a fragrant bath",
  "description": <p>A fragrance balanced with combination of Mango and Mandarin Orange. A coconut oil base soap that is soft moisturising with the presence of Shea Butter.</p>,
  "stock": 0,
  "new": false,
  "sale": false,
  "category": allProducts.soaps,
  "ingredients": [SHEA_BUTTER, COCONUT, MANGA_MANDARIN_FRAGRANCE],
  "size": [HUNDRED_GMS],
  "tags": [FRESH_BATH],
  "rating": 4,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.normalSoaps]
},
{
  "id": "basily-thyme",
  "name": "Soap - Basil and Thyme soap",
  "type":allProducts.skin,
  "price": 80.00,
  "salePrice": 80.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/Soaps/basil_thyme_1.jpg"],
  "shortDetails": "For a fragrant bath",
  "description": <p>A slightly sweet and spicy aromatic soap that consists in it Basil Essential oil which is found to be stimulating, promoting mental clarity and alertness. Thyme provides a herbal culinary note along with acting as something that is anti-bacterial, anti-septic. Found to be useful to manage body odour naturally. Extremely effective for an energising bath during the daytime hours.</p>,
  "stock": 10,
  "new": false,
  "sale": false,
  "category": allProducts.soaps,
  "ingredients": [THYME_LEAVES, BASIL_ESSENTIALS, COCONUT],
  "size": [EIGHTY_GMS],
  "tags": [FRESH_BATH],
  "rating": 4,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.normalSoaps]
},
{
  "id": "silk-route",
  "name": "Silk Route",
  "type":allProducts.skin,
  "price": 200.00,
  "salePrice": 200.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/FootCare/footScrub1.jpg"],
  "shortDetails": "A solution for cracked heels",
  "description": <p> One of the most common foot issues found in most of us is the issue of “cracked heels”. And, do we pay attention to it! 
  I think its even one of the most neglected skin problem. 
  But it does matter, these skin cracks apart from being painful, can allow bacteria and viruses to enter the body, leading to infection and illness. 
  And, if you are diabetic, it is important to examine your feet frequently for signs of cracks or infection. 
  Foot Healer has Rosemary essentials that saves from any fungal or bacterial infection. Cucumber seed oil being rich in Vitamin-B and Vitamin-C provides hydration to the skin and also is a healer to the dry and cracked skin.</p>,
  "stock": 0,
  "new": false,
  "sale": false,
  "category": allProducts.moisturizingCreams,
  "ingredients": [UNREFINED_SHEA_BUTTER, COCOA_BUTTER, BEESWAX, ROSEMARY, HEMP, MORINGA,  GRAPESEED, VITAMIN_E, SWEET_ALMOND, WHEAT_GERM],
  "size": [FORTY_GMS],
  "tags": [HARD_HEELS],
  "rating": 3,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.footHealer],
  "howToUse": "Apply on your heels. Put it in the night as absorption in the skin is better in the night.",
  "precaution": "All our moisturizing creams should be kept away from sunlight as it may lose its consistency"
},
{
  "id": "rose-mist",
  "name": "Rose Mist",
  "type":allProducts.skin,
  "price": 100.00,
  "salePrice": 100.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/rosewater/common.jpg", "/assets/images/kurinjini-images/rosewater/rose_mist.jpg"],
  "shortDetails": "A fresh water for your face",
  "description":  <p>
    A few seconds of spritzing, to dress the air or your skin, could change your day. Rose water isn’t new. It has been around for almost 14 centuries, originated in Iran as part of their medical and spiritual practices.
    <br/>
    <br/>
    Rose mist is a powerful beauty potion made by distilling rose-infused water. The product is a collected mist that hydrates the inside while leaving the surface toned and smooth. Being an anti-inflammatory agent and anti-oxidant, it can be used as a natural treatment for your skin related issues. 
    Due to the astringent like properties it possesses, rose mist helps clean pores and tone the skin.
    
    <br/>
    <ul>
        <li> Can also use it with coconut oil to remove the make-up. </li>
        <li> Spray it on your scalp so that it penetrates in transporting nutrients. They make an excellent complement to hair oils, shampoos and conditioners. </li>
        <li> Spray it for a better, more relaxed sleep.</li>
    </ul>

  </p>,
  "stock": 0,
  "new": false,
  "sale": false,
  "category": allProducts.hydrosols,
  "ingredients": [ROSE_PETALS],
  "size": [FIFTY_ML],
  "tags": [DRYNESS],
  "rating": 4,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.roseHydrosol],
  "howToUse": "Use anytime of the day you want to hydrate your skin. Spray it on your face or hair roots for better results.",
  "video":"https://www.youtube.com/embed/NaNhsof3LtY"
},
{
  "id": "rose-arka",
  "name": "Rose Arka",
  "type":allProducts.skin,
  "price": 80.00,
  "salePrice": 80.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/rosewater/rose_arka.jpg","/assets/images/kurinjini-images/rosewater/common.jpg"],
  "shortDetails": "A fresh water for your face",
  "description":  
  <p>
    Rose Arka or Rose water is a fragrant, rose-colored water having similar qualities as Rose Mist and it can be used to complement face packs or ubtan. 
    <br/>
    <br/>
    Soak cotton pad in Rose arka and dab it all over the face for extra-hydration. The cotton pad can also be chilled in fridge and used on eyes for tired and puffy eyes.
  </p>,
  "stock": 0,
  "new": false,
  "sale": false,
  "category": allProducts.hydrosols,
  "ingredients": [ROSE_PETALS],
  "size": [FIFTY_ML],
  "tags": [DRYNESS],
  "rating": 4,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.roseWater],
  "howToUse": "Soak cotton pad in Rose arka and dab it all over the face for extra-hydration. The cotton pad can also be chilled in fridge and used on eyes for tired and puffy eyes.",
  "video":"https://www.youtube.com/embed/NaNhsof3LtY"
},
{
  "id": "mint-cucumber",
  "name": "Mint Cucumber Mist",
  "type":allProducts.skin,
  "price": 100.00,
  "salePrice": 100.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/rosewater/mintMist_1.jpg","/assets/images/kurinjini-images/rosewater/mintMist_2.jpg"],
  "shortDetails": "A fresh water for your face",
  "description":  
    <p>
      Toners or face mists generally are an essential part of our daily skin care.
      <br/>
      The spray freshens up the face by removing dirt and cleansing pores. Active herbs like Mint, & Cucumber protect the skin from germs and makes skin soft and fresh instantly. Fresh cucumber water contains Vitamin C and caffeic acid, both of which soothe skin irritations, reduce swelling, and prevent water retention. Cucumber has the same pH level as the skin. It restores the protective acid mantle which keeps bacteria and other contaminants from being absorbed. It has hydrating, nourishing, and astringent properties.
      <br/>
      <br/>
    </p>,
  "stock": 0,
  "new": false,
  "sale": false,
  "category": allProducts.hydrosols,
  "ingredients": [FRESH_MINT, FRESH_CUCUMBER],
  "size": [FIFTY_ML],
  "tags": [DRYNESS],
  "rating": 4,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.mintMist],
  "howToUse": "Use in the mornings or evenings or anytime of the day you want to hydrate your skin. Spray it on your face or hair roots for better results.",
},
{
  "id": "mint-tea-tree",
  "name": "Mint Tea Tree Mist",
  "type":allProducts.skin,
  "price": 100.00,
  "salePrice": 100.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/rosewater/mintMist_2.jpg", "/assets/images/kurinjini-images/rosewater/mintMist_1.jpg"],
  "shortDetails": "A fresh water for your face",
  "description":  
  <p>
      Toners or face mists generally are an essential part of our daily skin care.
    <br/>
    Containing antibacterial and anti-inflammatory properties, Tea Tree oil works as a natural remedy for acne and other inflammatory skin conditions like eczema and psoriasis along with soothing skin irritations. Tea tree oil has been proven very beneficial for the health of your hair and scalp, it has the ability to soothe dry, flaking scalp and remove dandruff.                <br/>
    <br/>
    <b>This particular mist can be used for solving scalp itching problem. Spray it on the hair roots and massage to spread it on the scalp. It doesn’t need any wash after that.</b>
   
  </p>,
  "stock": 0,
  "new": false,
  "sale": false,
  "category": allProducts.hydrosols,
  "ingredients": [FRESH_MINT, TEATREE],
  "size": [FIFTY_ML],
  "tags": [DRYNESS],
  "rating": 4,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.mintMist],
  "howToUse": "Use anytime of the day you want to hydrate your skin. Spray it on your face or hair roots for better results.",
},
{
  "id": "roots-normal",
  "name": "Roots - Hair mask for a normal scalp",
  "type":allProducts.hair,
  "pricePerSize":[{size:SIXTY,price:200.00}, {size:ONETWENTY,price:400.00}],
  "price": 200.00,
  "salePrice": 200.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/hairCare/roots_1.jpg", "/assets/images/kurinjini-images/hairCare/roots_2.jpg"],
  "shortDetails": "A natural hair cream",
  "description":  
  <p>
        A natural hair cream made out of oils, butter and other hydrating ingredients. It provides treatment for primarily hair fall and split ends along with giving your hair a shiny and bouncy look. 
        <br/>
        <ul class = "item-desc">
            <li>Ingredients like Brahmi, Bhringraj and Hibiscus strengthens the root follicles promotes hair growth, treats dry, itchy scalp and makes hair bouncy.</li>
            <li>Argan oil has a number of benefits when used on hair. It can act as a moisturiser for the scalp to fight dandruff and dry scalp. </li>
            <li>Along with it is added Rosemary that stimulates hair growth, prevents dandruff. </li>
            <li>Avacodo butter and oil both not only provide lustrous hair but also prevent premature greying.</li>
            <li>Moringa oil is a natural hair cleanser.  It rejuvenates your hair from deep within and the minerals and vitamins make your hair stronger and fight dandruff and split ends. It has great healing properties which makes it ideal for hair care.</li>
        </ul>
        
        <p> Begin with using more frequently, weekly application and then move on to monthly application.</p>
        <b>A regular use of hair mask is recommended for healthy hair and healthy root.</b>
    </p>,
  "stock": 10,
  "new": false,
  "sale": false,
  "category": allProducts.hairCare,
  "ingredients": [],
  "size": [SIXTY, ONETWENTY],
  "tags": [HAIR_FALL, SPLIT_ENDS, DANDRUFF],
  "rating": 4,
  "variants": [],
  "goodFor":[allProducts.hairMaskNormal],
  "subCategory":[allProducts.hairMaskNormal],
  "howToUse": ["Wash and towel dry your hair", "Apply good amount of mask from hair roots to tips", "Keep it like that for an hour", "Do a shampoo wash after that"],
  "video": "https://www.youtube.com/embed/wGjqT1T-Lk0"           
},

{
  "id": "roots-oily",
  "name": "Roots - Hair mask for oily scalp",
  "type":allProducts.hair,
  "pricePerSize":[{size:SIXTY,price:200.00}, {size:ONETWENTY,price:400.00}],
  "price": 200.00,
  "salePrice": 200.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/hairCare/roots_2.jpg", "/assets/images/kurinjini-images/hairCare/roots_1.jpg"],
  "shortDetails": "A natural hair cream",
  "description":  
  <p>
                A hair cream specifically made for an oily scalp. Consists of Aloe-Vera and other hydrating ingredients. It provides treatment primarily for hair fall and split ends along with giving your hair a shiny and bouncy look. 
                <br/>
                <ul class = "item-desc">
                    <li>Ingredients like Brahmi, Bhringraj and Hibiscus strengthens the root follicles promotes hair growth, treats dry, itchy scalp and makes hair bouncy.</li>
                    <li>Argan oil has a number of benefits when used on hair. It can act as a moisturiser for the scalp to fight dandruff and dry scalp. </li>
                    <li>Along with it is added Rosemary that stimulates hair growth, prevents dandruff. </li>
                    <li>Aloe Vera give your hair the strength and sheen. Contains enzyme which stimulate hair growth. </li>
                    <li>Moringa oil is a natural hair cleanser.  It rejuvenates your hair from deep within and the minerals and vitamins make your hair stronger and fight dandruff and split ends. It has great healing properties which makes it ideal for hair care.</li>
                </ul>
                
                <p> Begin with using more frequently, weekly application and then move on to monthly application.</p>
                <b>A regular use of hair mask is recommended for healthy hair and healthy root.</b>
    </p>,
  "stock": 10,
  "new": false,
  "sale": false,
  "category": allProducts.hairCare,
  "ingredients": [],
  "size": [SIXTY, ONETWENTY],
  "tags": [HAIR_FALL, SPLIT_ENDS, DANDRUFF],
  "rating": 3,
  "variants": [],
  "goodFor":[allProducts.hairMaskNormal],
  "subCategory":[allProducts.hairMaskNormal],
  "howToUse": ["Wash and towel dry your hair", "Apply good amount of mask from hair roots to tips", "Keep it like that for an hour", "Do a shampoo wash after that"],
  "video": "https://www.youtube.com/embed/wGjqT1T-Lk0"           
},

{
  "id": "ubtan-soap",
  "name": "Soap - Ubtan soap",
  "type":allProducts.skin,
  "price": 80.00,
  "salePrice": 80.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/Soaps/ubtan_1.jpg", "/assets/images/kurinjini-images/Soaps/ubtan_2.jpg"],
  "shortDetails": "For a fragrant bath",
  "description": <p>A soap with simple yet powerful ingredients.  This soap is made using turmeric(Haldi), gram flour(besan), lemon extract and goat milk. Without any artificial colorant, this home made soap is made using natural ingredients that keep your skin clear, soft and glowing. This soap is excellent for de-tanning. </p>,
  "stock": 10,
  "new": true,
  "sale": false,
  "category": allProducts.soaps,
  "ingredients": [TURMERIC, BESAN, LEMON_EXTRACT, GOAT_MILK, FURTHER_CUSTOMIZATION],
  "size": [CLOSE_TO_HUNDRED],
  "tags": [DULLSKIN, TANNEDSKIN],
  "rating": 4,
  "variants": VARIANTS_UBTAN_SOAPS,
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.normalSoaps]
},
{
  "id": "natural-spf",
  "name": "Natural SPF Cream",
  "type":allProducts.skin,
  "price": 250.00,
  "salePrice": 250.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/spf-cream/spf_1.jpg", "/assets/images/kurinjini-images/spf-cream/spf_2.jpg", "/assets/images/kurinjini-images/spf-cream/spf_3.jpg"],
  "shortDetails": "A natural sun protection",
  "description": <p>An effort from us to make a natural SPF cream. We have done this by clubbing all those oils that are supposed to contain natural SPF ranging between 20-40. Research done on Raspberry oil and carrot seed oil in the past years have proven to contain the natural SPF (*Details can be provided if needed). This cream can be used as regular cream and body butter as its also extra-nourishing.<br/><br/> Apart from UV protection, Red raspberry oil is supposed to be a good moisturiser, prevents anti-ageing, reduces wrinkles and fine lines. It consists of Phytosterols that prevents skin damage and also possible protections against cancer.<br/><br/><i><b>We don't claim that it is a definite replacement of your sun screen cream but its an attempt from us based on the researches done in this area. Being a natural home-made cream, it can also very well be a part of your daily routine.</b></i><br/><br/><b>Can be customized for oily skin</b></p>,
  "stock": 10,
  "new": true,
  "sale": false,
  "category": allProducts.faceCare,
  "ingredients": [RASPBERRY_SEED, CARROT_SEED, WHEAT_GERM, COCOA_BUTTER, SUNFLOWER_WAX, CHAMOMILE],
  "size": [FIFTY_ML],
  "tags": [SUNPROTECTION, AGEING],
  "rating": 4,
  "variants": [],
  "goodFor":[allProducts.drySkin],
  "subCategory":[allProducts.sunProtection]
},
{
  "id": "body-butter",
  "name": "Body Butter",
  "type":allProducts.skin,
  "price": 400.00,
  "salePrice": 400.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/BodyButter/BB_4.jpg", "/assets/images/kurinjini-images/BodyButter/BB_2.jpg", "/assets/images/kurinjini-images/BodyButter/BB_1.jpg", "/assets/images/kurinjini-images/BodyButter/BB_3.jpg"],
  "shortDetails": "A natural body butter",
  "description": <div><h4>Wild Almond Body Butter</h4><p>Bringing to you a natural body butter made of Wild green almonds that are known to be high in therapeutic value. This forest almonds oil is rich in Vitamin-E and A. Apart from soothing the skin also helps to heal sun damage and fade the scars. <br/> 
                This product is non-greasy, contains no preservatives, additives, emulsifiers or any chemicals.Complemented with Cocoa Butter, a super food for the skin loaded with natural benefits. Some of the few benefits of cocoa butter include reduce inflammations, preventing stretch marks, heal damage skin. <br/> 
                </p>
                </div>,
  "stock": 10,
  "new": true,
  "sale": false,
  "category": allProducts.bodyCare,
  "ingredients": [WILD_ALMONDS, COCOA_BUTTER, SHEA_BUTTER, SWEET_ALMOND,AVOCADO, JOJOBA],
  "size": [APPROX_ONETWENTY],
  "tags": [DRYNESS, SCARS, SUNPROTECTION],
  "rating": 4,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.sunProtection, ANTI_AGEING, allProducts.fadeScars, allProducts.moisturizingCreams]
},
{
  "id": "hemp-lip-care",
  "name": "Hemp Intensive Lip Care",
  "type":allProducts.skin,
  "price": 202.00,
  "salePrice": 220.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/LipCare/hemp_1.jpg", "/assets/images/kurinjini-images/LipCare/hemp_2.jpg"],
  "shortDetails": "Hemp Intensive Lip Care",
  "description": <p>Introducing Hemp Intensive Lip care, a non-sticky, super moisturising lip balm. Along with providing nourishment, it also acts as a strong guard against <b>lip darkening</b>.  Meant for healing super dry lips without feeling too sticky.
      <ul><li>It is colourless - can use any matte lipstick over it</li><li>Smells like distinctive pure green hemp(can hate or love) ;-)</li></ul>
      </p>,
  "stock": 10,
  "new": true,
  "sale": false,
  "category": allProducts.lipCare,
  "ingredients": [CANNABIS_SATIVA, COCOA_BUTTER],
  "size": [ROUND_FIVEGM, STICK_FIVEGM],
  "tags": [DRYLIPS, DARKLIPS],
  "rating": 5,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.lipbalm]
},
{
  "id": "velvet",
  "name": "Velvet Face Scrub",
  "type":allProducts.skin,
  "price": 150.00,
  "salePrice": 150.00,
  "discount": 0,
  "pictures": [],
  "shortDetails": "Velvet face scrub",
  "description": <p>Does pollution acts like a veil covering your face? Does your face wash makes you feel dry after a rinse? What if we pack a cleanser and moisturizer into one! 
      Yes! sharing with you our face scrub by the name "Velvet". Available in two variants, Coffee and Walnut. Infused with pure nourishing oils and walnut/coffee granules, this face scrub is a great exfoliator that doesn't leave your skin dry after a wash. 
      Gentle beads of coffee beans and walnut shell is absolutely non-abrasive and does a splendid job at removing those dead cells from your face. You won't find the need to apply any cream after a wash as this scrub already makes your skin smoother and softer.</p>,
  "stock": 10,
  "new": true,
  "sale": false,
  "category": allProducts.scrubbing,
  "ingredients": [WALNUT_COFFEE, VIRGIN_COCONUT, SUNFLOWER_WAX, VEGETABLE_GLYCERINE, HONEY],
  "size": [FIFTY_ML],
  "tags": [DEAD_SKIN_BODY, DRYNESS],
  "rating": 5,
  "variants": VARIANTS_FACESCRUBBER,
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.facecleanser],
  "howToUse": ["Cleanse your face first","Gently rub the scrub on your face for 2-3 minutes rinisng with water in between"],
  "urlCategory":"face-care",
  "urlSubCategory":"face-scrub-cleanser",
  "urlname":"velvets"
},
{
  "id": "Neem",
  "name": "Soap - Neem",
  "type":allProducts.skin,
  "price": 100.00,
  "salePrice": 100.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/Soaps/neem.jpg"],
  "shortDetails": "For a fragrant bath",
  "description": <p>Made up of edible grade of organic neem powder and neem grade 1 oil. Along with basil essential, this soap has excellent anti-bacterial properties.</p>,
  "stock": 10,
  "new": false,
  "sale": false,
  "category": allProducts.soaps,
  "ingredients": [NEEM_POWDER, NEEM_OIL, BASIL_ESSENTIALS],
  "size": [HUNDRED_GMS],
  "tags": [FRESH_BATH],
  "rating": 4,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.normalSoaps]
},
{
  "id": "forest-lavender",
  "name": "Forest Lavender",
  "type":allProducts.skin,
  "price": 200.00,
  "salePrice": 200.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/lotion/lotion_1.jpg","/assets/images/kurinjini-images/lotion/lotion_2.jpg"],
  "shortDetails": "Fresh and wild Kashmiri Lavender body lotion",
  "description": <p>Our new formulation for body lotion that melts into your skin leaving it absolutely soft and silky. Its light in weight and easily absorbed without making your skin feel greasy. 
    It has that smell of Kashmiri Lavender which actually turns into a mild lingering one after a while. Good for all kinds of skin and all seasons.
  </p>,
  "stock": 10,
  "new": true,
  "sale": false,
  "category": allProducts.bodyCare,
  "ingredients": [MANGO_BUTTER, COCONUT_BUTTER, LAVENDER, ARGAN, VITAMIN_E, SWEET_ALMOND],
  "size": [ONE_TWENTY_GM],
  "tags": [DRYNESS],
  "rating": 4,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.moisturizingCreams]
},
{
  "id": "facemask",
  "name": "Lotus Face mask",
  "type":allProducts.skin,
  "price": 250.00,
  "salePrice": 250.00,
  "discount": 0,
  "pictures": [],
  "shortDetails": "Lotus face mask - Kaolin clay and Dead sea mud based",
  "description": <p>As our cities are getting more and more polluted, the face is the one that bears the brunt. A face wash in your routine 
    alone doesn't help in fighting those impurities. A weekly dose of face mask could be something that your skin may need at these testing times.
    <br/><br/>On the same lines, Kurinjini skin care introduces a <b>purifying detox face mask</b> by the name <b>Lotus</b> for both men and women alike. 
      The powerful anti-oxidants like Green Tea extract, Neem powder pulls out the toxins and rejuvenate dull and tired skin. 
      <br/> Available for skin types : <ul><li><b>Kaolin clay (For dry skin)</b></li><li><b>Dead sea mud (For oily skin)</b></li></ul>
      <br/><b>Kaolin clay</b> is one of the gentlest clays. Unlike other clays kaolin clay doesn’t leave your skin dry after use. It softens the skin, leaving it toned and healthy.
      <br/>Naturally rich in minerals, <b>Dead Sea Mud</b> is known to have rejuvenation qualities for the skin.</p>,
  "stock": 0,
  "new": true,
  "sale": false,
  "category": allProducts.faceCare,
  "ingredients": [NEEM_POWDER, KAOLIN_CLAY, DEAD_SEA_MUD, GREEN_TEA, CUCUMBER_GEL, TEATREE, CINNAMON_POWDER],
  "size": [SIXTY],
  "tags": [DETOX],
  "rating": 4,
  "variants": FLAVOUR_FACE_MASK,
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.faceCleansers],
  "howToUse": ["Cleanse your face first","Apply a layer of mask and wait for 15 mins", "Scrub it off gently"]
},
{
  "id": "closetbar",
  "name": "Fragrance bar",
  "type":allProducts.house,
  "price": 100.00,
  "salePrice": 100.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/closet-bar/closetBar_1.jpg","/assets/images/kurinjini-images/closet-bar/closetBar_2.jpg"],
  "shortDetails": "Fragrance bar",
  "description": <p>When you clean your closet, tuck in it one of these fragrance bars that not only makes your closet and clothes smell wonderful, but also uplifts your mood and energy level everytime you open the closet.</p>,
  "stock": 10,
  "new": true,
  "sale": false,
  "category": allProducts.homeCare,
  "ingredients": [],
  "size": [FIFTY_GMS],
  "tags": [],
  "rating": 4,
  "variants": [],
  "goodFor":[],
  "subCategory":[]
},

{
  "id": "ubtan",
  "name": "Ubtan Face cleanser",
  "type":allProducts.skin,
  "price": 200.00,
  "salePrice": 200.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/FaceCare/ubtan/ubtan_1.jpg"],
  "shortDetails": "Face cleanser",
  "description": <p>Looking for a smooth, nourished, healthy skin tone or a blemish free look.
  <br/><br/>
  <b>Ubtan</b> is packed with lot of anti-oxidants, vitamin, minerals that contribute to a healthy skin. 
  The face pack of this ubtan(by adding your favourite fruit pulp, yogurt or milk) will intensely nourish your skin from deep within.
  <ul>
  <li><b>Jau Flour</b> - One of the very old natural ingredients known to heal and repair skin and also brightens the skin, hydrate the skin and treat clogged pores.</li>
  <li><b>Masoor dal</b> - An excellent cleanser and a natural bleaching agent, this is very effective in removing tan and softening the skin. It also makes skin oil free thereby preventing acne.</li>
  <li><b>Orange peel</b> enhances complexion</li>
  </ul>
  Overall efficiency of this pack is enhanced by gram flour, haldi and badaam.
  
  Rich in Vitamin-E, C and other minerals, khus-khus and methi seeds lightens the skin and reduces dark circle and spots</p>,
  "stock": 10,
  "new": true,
  "sale": false,
  "category": allProducts.faceCare,
  "ingredients": [KHUS_KHUS, JAU_FLOUR, ORANGE_PEEL, CHANA, MASOOR_DAL, OATMEAL, METHI, HALDI, BADAAM],
  "size": [HUNDRED_ML],
  "tags": [BLEMISHES, ACNE, DARK_SPOTS],
  "rating": 4,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.faceCleansers],
  "howToUse":"While washing gently massage with your finger tip in circular motion focusing the areas where you have black heads and wash off thoroughly with water. To lock-in moisture apply your favourite face cream"
},
{
  "id": "roots-onionSeedOil",
  "name": "Roots - Onion Seed Oil Hair Mask",
  "type":allProducts.hair,
  "pricePerSize":[{size:SIXTY,price:200.00}, {size:ONETWENTY,price:400.00}],
  "price": 200.00,
  "salePrice": 200.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/hairCare/onion-seed_1.jpg", "/assets/images/kurinjini-images/hairCare/onion-seed_2.jpg"],
  "shortDetails": "An onion seed oil hair mask",
  "description":  
  <p>
        One of the magical oils for promoting hair regrowth. It is rich in sulphur which prevents breakage, split ends and thinning of hair. Most importantly it maintains the Ph of the hair that promotes hair thickening.  Its a great product for preventing hair fall.
        <br/><b>Weekly application is recommended for healthy hair and healthy root</b>
    </p>,
  "stock": 10,
  "new": false,
  "sale": false,
  "category": allProducts.hairCare,
  "ingredients": [ONION_SEED_OIL,ARGAN, MORINGA, PURE_AFRICAN_SHEA_BUTTER],
  "size": [SIXTY, ONETWENTY],
  "tags": [HAIR_FALL, SPLIT_ENDS, DANDRUFF],
  "rating": 5,
  "variants": [],
  "goodFor":[allProducts.allKindsOfHair, allProducts.allhuman],
  "subCategory":[allProducts.hairMaskNormal],
  "howToUse": ["Apply adequate amount of mask from hair roots to tips", "Keep it like that for minimum 30 mins", "Do a shampoo wash after that"],      
},
{
  "id": "natural-mosquito-repellant",
  "name": "Anti-Buzz",
  "type":allProducts.skin,
  "price": 150.00,
  "salePrice": 150.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/hairCare/onion-seed_1.jpg", "/assets/images/kurinjini-images/hairCare/onion-seed_2.jpg"],
  "shortDetails": "Anti-Buzz, a natural mosquito repellant",
  "description":  
  <p>
       Being natural, its made out of Citrus combination of essential oils. Completely safe to use and along with acting as a repellant it also nourishes your skin. 
        <br/><b>Available in handy pocket balms and as a lotion.</b><br/>
        <p>Citronella oil, Lemon Grass oil, Eucalyptus combine together and act as a strong repellant against mosquitoes. It masks the carbon dioxide and lactic acid scents that mosquitoes search for. </p>
        <p>Antiseptic properties of Spearmint and TeaTree Oil acts against mosquito, bugs bites and in general monsoon healing.</p>
    </p>,
  "stock": 10,
  "new": true,
  "sale": false,
  "category": allProducts.bodyCare,
  "ingredients": [CITRONELLA_OIL, LEMON_GRASS, EUCALYPTUS, SPEARMINT, TEATREE],
  "tags": [MOSQUITO_BITES],
  "rating": 5,
  "variants": VARITIES_MOSQUITO_REPELLANT,
  "goodFor":[allProducts.allhuman, allProducts.allKindsOfSkin, allProducts.kidsSpecial],
  "subCategory":[allProducts.moisturizingCreams, SUBCATEGORY_KIDS, allProducts.vegan],
  "howToUse": ["Apply on your hands and legs"],      
},
{
  "id": "rose-milk",
  "name": "Rose Milk Vegan Soap",
  "type":allProducts.skin,
  "price": 200.00,
  "salePrice": 200.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/rosemilk/rose_milk_1.jpeg", "/assets/images/kurinjini-images/rosemilk/rose_milk_2.jpeg", "/assets/images/kurinjini-images/rosemilk/rose_milk_3.jpeg","/assets/images/kurinjini-images/rosemilk/rose_milk_4.jpeg"],
  "shortDetails": "100% Pure Oil Soap",
  "description":  
  <p>
       We have come out with 100% vegan pure oil based soap with a different process than usual also known as saponification or cold process. This process generally takes longer period of curing(hardening) which is somewhere around 4-6 weeks. The soap that we present you have undergone close to 6 weeks of curing.<br/>
       Low creamy lather typical of 100% pure oil soap. It has skin friendly rose essential oil that has harmonising and relaxing properties. Milk has light lactic acid that nourishes and moisturises skin.
Ph is exactly between 7 and 8. 
<br/><br/><b>Free off Paraben, SLS/Sulphate, palm Oil, artificial fragrances or preservatives.</b></p>,
  "stock": 0,
  "size": [HUNDRED_GMS],
  "new": true,
  "sale": false,
  "category": allProducts.soaps,
  "ingredients": [VIRIN_OLIVE, VIRGIN_COCONUT, SWEET_ALMOND,ROSE_ESSENTIALS],
  "tags": [FRESH_BATH],
  "rating": 5,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.normalSoaps, allProducts.vegan]
},
{
  "id": "body-scrub",
  "name": "Velvet Coffee Body Scrub",
  "type":allProducts.skin,
  "price": 300.00,
  "salePrice": 300.00,
  "discount": 0,
  "pictures": ["/assets/images/home-banner/mobile/18.jpg"],
  "shortDetails": "100% Pure Oil Soap",
  "description":  
  <p>
       A great combination of Raw Coffee, Cold Pressed Coconut oil & Butters, the body scrub exfoliates dead skin cells and helps get rid of blackheads, tan & impurities. It deeply cleanses the pores and polishes the skin.  The size of coffee particles gently scrub the skin. This body scrub doesn’t dry out the skin and smoothens superbly.</p>,
  "stock": 10,
  "size": [ONE_TWENTY_GM],
  "new": true,
  "sale": false,
  "ingredients": [CHIKMAGLAUR_RAW_COFFEE, SHEA_BUTTER, COCOA_BUTTER, COLD_PRESSED_COCONUT_OIL, SWEET_ALMOND],
  "rating": 5,
  "variants": [],
  "category": allProducts.scrubbing,
  "tags": [DEAD_SKIN_BODY, DRYNESS],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.bodyCare, allProducts.vegan],
  "howToUse":"Squeeze out a good quantity and apply with light pressure onto the skin in a circular motion, and then rinse off. No need to apply soap further."

},
{
  "id": "coffee-vanilla",
  "name": "Coffee Vanilla Soap",
  "type":allProducts.skin,
  "price": 200.00,
  "salePrice": 200.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/Soaps/coffee-vanilla.jpeg","/assets/images/home-banner/mobile/19.jpg"],
  "shortDetails": "100% Pure Oil Soap",
  "description":  
  <p>
       Coffee Vanilla handmade bathing bar. 
       <br/> This handcrafted bathing is augmented by chikmagalur coffee that has splendid fragrance. Its an amazing exfoliator and has anti-oxidant ad detoxifying properties.
<br/><br/><b>Free off Paraben, SLS/Sulphate, palm Oil, artificial fragrances or preservatives.</b>
<br/>The saponified soaps are prepared with oils like olive, coconut, rice bran with added Shea and Cocoa butter to ensure soft and gentle lather without making your skin dry. This process generally takes longer period of curing(hardening) which is somewhere around 4-6 weeks. The soap that we present you have undergone close to 6 weeks of curing. </p>,
  "stock": 10,
  "size": [HUNDRED_GMS],
  "new": true,
  "sale": false,
  "category": allProducts.soaps,
  "ingredients": [VIRIN_OLIVE, VIRGIN_COCONUT, SWEET_ALMOND,RICE_BRAN_OIL, VANILLA_FRAGRANCE, CHIKMAGLAUR_RAW_COFFEE],
  "tags": [FRESH_BATH],
  "rating": 5,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.normalSoaps, allProducts.vegan]
},
{
  "id": "lemon-grass",
  "name": "Lemon Grass Soap",
  "type":allProducts.skin,
  "price": 200.00,
  "salePrice": 200.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/Soaps/lemon-grass.jpg","/assets/images/home-banner/mobile/20.jpg"],
  "shortDetails": "100% Pure Oil Soap",
  "description":  
  <p>
       This soap made of lemon grass essential oil having purifying and detoxiying properties that keeps your skin clean and clear. 
       Being an anti-bacterial and ant-fungal it calms and soothes the irritated skin. The rich citrus smell makes your bath even more refreshing.
      <br/>Lemon Grass essential oil is edible grade 1, use for Asian Cuisines.  
<br/><br/><b>Free off Paraben, SLS/Sulphate, palm Oil, artificial fragrances or preservatives.</b>
<br/>The saponified soaps are prepared with oils like olive, coconut, rice bran with added Shea and Cocoa butter to ensure soft and gentle lather without making your skin dry. This process generally takes longer period of curing(hardening) which is somewhere around 4-6 weeks. The soap that we present you have undergone close to 6 weeks of curing. </p>,
  "stock": 10,
  "size": [HUNDRED_GMS],
  "new": true,
  "sale": false,
  "category": allProducts.soaps,
  "ingredients": [VIRIN_OLIVE, VIRGIN_COCONUT, SWEET_ALMOND,RICE_BRAN_OIL, LEMON_GRASS],
  "tags": [FRESH_BATH],
  "rating": 5,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.normalSoaps, allProducts.vegan]
},
{
  "id": "raw-turmeric",
  "name": "Raw Turmeric Soap",
  "type":allProducts.skin,
  "price": 200.00,
  "salePrice": 200.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/Soaps/raw_turmeric_two.jpg","/assets/images/home-banner/mobile/21.jpg"],
  "shortDetails": "100% Pure Oil Soap",
  "description":  
  <p>
       Made of raw turmeric and turmeric oil, this natural, pH balanced handmade herbal bar. One of Ayurveda's favourite healing herbs, Turmeric is known to contain more than 300 antioxidants that protect you from skin conditions like dark spots, adult cystic and  eczema apart from fighting with  pimples and breakout.
<br/><br/><b>Free off Paraben, SLS/Sulphate, palm Oil, artificial fragrances or preservatives.</b>
<br/>The saponified soaps are prepared with oils like olive, coconut, rice bran with added Shea and Cocoa butter to ensure soft and gentle lather without making your skin dry. This process generally takes longer period of curing(hardening) which is somewhere around 4-6 weeks. The soap that we present you have undergone close to 6 weeks of curing. </p>,
  "stock": 10,
  "size": [ONE_TWENTY_GM],
  "new": true,
  "sale": false,
  "category": allProducts.soaps,
  "ingredients": [VIRIN_OLIVE, VIRGIN_COCONUT, SWEET_ALMOND,TURMERIC_OIL, RAW_TURMERIC],
  "tags": [FRESH_BATH],
  "rating": 5,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.normalSoaps, allProducts.vegan]
},
{
  "id": "neem-soap",
  "name": "Neem Soap",
  "type":allProducts.skin,
  "price": 150.00,
  "salePrice": 150.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/Soaps/neem_soap_one.jpg","/assets/images/kurinjini-images/Soaps/neem_soap_two.jpg"],
  "shortDetails": "100% Pure Oil Soap",
  "description":  
  <p>
       A neem oil soap that contains edible quality of USDA certified organic neem powder and FDA approved neem oil. Neem as you know contains essential naturals which support our body’s natural ability to fight germs and build upon the immunity. No wonder Ayurvedic text describes it as Sarva Roga Nivarini” meaning universal reliever of all illness.
  <br/><br/><b>Free off Paraben, SLS/Sulphate, palm Oil, artificial fragrances or preservatives.</b>
  <br/>The saponified soaps are prepared with oils like olive, coconut, rice bran with added Shea and Cocoa butter to ensure soft and gentle lather without making your skin dry. This process generally takes longer period of curing(hardening) which is somewhere around 4-6 weeks. The soap that we present you have undergone close to 6 weeks of curing. </p>,
  "stock": 10,
  "size": [HUNDRED_GMS],
  "new": true,
  "sale": false,
  "category": allProducts.soaps,
  "ingredients": [VIRIN_OLIVE, VIRGIN_COCONUT, SWEET_ALMOND, NEEM_OIL, NEEM_POWDER],
  "tags": [FRESH_BATH],
  "rating": 5,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.normalSoaps, allProducts.vegan]
},
{
  "id": "oatmeal-soap",
  "name": "Oatmeal Coconut cream soap",
  "type":allProducts.skin,
  "price": 150.00,
  "salePrice": 150.00,
  "discount": 0,
  "pictures": ["/assets/images/kurinjini-images/Soaps/oatmeal_coconut_cream.jpg"],
  "shortDetails": "100% Pure Oil Soap",
  "description":  
  <p>
      Oatmeal considered to be a diet food also is found to be extremely benefical for skin. Known to control irriation, also a natural exfoliator the oatmeal in general has immense benefits in certain skin problems. 
      The coconut cream combined with this is considered to be highly moisturizing, which improves the skin elasticity.
  <br/><br/><b>Free off Paraben, SLS/Sulphate, palm Oil, artificial fragrances or preservatives.</b>
  <br/>The saponified soaps are prepared with oils like olive, coconut, rice bran with added Shea and Cocoa butter to ensure soft and gentle lather without making your skin dry. This process generally takes longer period of curing(hardening) which is somewhere around 4-6 weeks. The soap that we present you have undergone close to 6 weeks of curing. </p>,
  "stock": 10,
  "size": [HUNDRED_GMS],
  "new": true,
  "sale": false,
  "category": allProducts.soaps,
  "ingredients": [VIRIN_OLIVE, VIRGIN_COCONUT, SWEET_ALMOND, OATMEAL, COCONUT_CREAM],
  "tags": [FRESH_BATH],
  "rating": 5,
  "variants": [],
  "goodFor":[allProducts.allKindsOfSkin],
  "subCategory":[allProducts.normalSoaps, allProducts.vegan]
}

]


export default allItems