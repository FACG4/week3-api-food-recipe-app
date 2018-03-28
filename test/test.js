var test = require('tape');
var logic = require('../public/logic.js');

var filtered_response = [
  {
  title: "BBQ Chicken Pizza",
  href: "http://www.recipezaar.com/BBQ-Chicken-Pizza-144689",
  ingredients: "chicken, brown sugar, cayenne, garlic salt, green pepper, honey, italian cheese blend, salad dressing, margarine, molasses, onions, barbecue sauce, black pepper, prepared pizza crust, provolone cheese, ranch dressing, salt",
  thumbnail: ""
  },
  {
  title: "Basic Chicago-style Pizza Recipe",
  href: "http://www.grouprecipes.com/65487/basic-chicago-style-pizza.html",
  ingredients: "pizza, vegetable oil, cornmeal, water, flour, sausage, provolone cheese, olive oil, tomato, yeast, pepperoni, salt, salt, sugar, basil, oregano",
  thumbnail: ""
  },
  {
  title: "BBQ'd Cheeseburger Pizza",
  href: "http://www.recipezaar.com/BBQd-Cheeseburger-Pizza-299376",
  ingredients: "barbecue sauce, cheddar cheese, onions, tomato, dill pickle, dill relish, parsley, french dressing, garlic powder, ground beef, lettuce, mayonnaise, mozzarella cheese, pizza dough, mustard",
  thumbnail: "http://img.recipepuppy.com/152332.jpg"
  },
  {
  title: "Healthy Italian Bread Sticks or Pizza Crust",
  href: "http://www.recipezaar.com/Healthy-Italian-Bread-Sticks-or-Pizza-Crust-252423",
  ingredients: "brown sugar, garlic powder, italian seasoning, olive oil, onion powder, salt, flour, water, flour, yeast",
  thumbnail: "http://img.recipepuppy.com/623733.jpg"
  },
  {
  title: "Bacon Cheeseburger Pizza",
  href: "http://www.recipezaar.com/Bacon-Cheeseburger-Pizza-205270",
  ingredients: "bacon, black pepper, cheddar cheese, garlic, ground beef, mozzarella cheese, onions, parmesan cheese, pizza sauce, salt",
  thumbnail: ""
  },
  {
  title: "Cinnamon Pizza Sticks With Dipping Glaze",
  href: "http://www.recipezaar.com/Cinnamon-Pizza-Sticks-With-Dipping-Glaze-167598",
  ingredients: "butter, cinnamon, pizza dough, sugar",
  thumbnail: ""
  },
  {
  title: "Gluten Free Pepperoni Pizza Quesadilla",
  href: "http://www.recipezaar.com/Gluten-Free-Pepperoni-Pizza-Quesadilla-302814",
  ingredients: "mozzarella cheese, nonstick cooking spray, pizza sauce, tortilla, pepperoni",
  thumbnail: ""
  },
  {
  title: "Italian Escarole Pizza",
  href: "http://allrecipes.com/Recipe/Italian-Escarole-Pizza/Detail.aspx",
  ingredients: "garlic, escarole, mozzarella cheese, olive oil, pizza sauce, salt",
  thumbnail: ""
  },
  {
  title: "Goat Cheese Arugula Pizza - No Red Sauce!",
  href: "http://allrecipes.com/Recipe/Goat-Cheese-Arugula-Pizza---No-Red-Sauce/Detail.aspx",
  ingredients: "arugula, garlic, olive oil, pesto, roma tomato, pizza crust",
  thumbnail: "http://img.recipepuppy.com/8938.jpg"
  },
  {
  title: "Easy Peezy Pizza Dough (Bread Machine Pizza Dough)",
  href: "http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805",
  ingredients: "bread flour, yeast, olive oil, salt, sugar, water, water",
  thumbnail: "http://img.recipepuppy.com/34541.jpg"
  }
  ];

const titleExpected = [ 'BBQ Chicken Pizza',
        'Basic Chicago-style Pizza Recipe',
        'BBQ\'d Cheeseburger Pizza',
        'Healthy Italian Bread Sticks or Pizza Crust',
        'Bacon Cheeseburger Pizza',
        'Cinnamon Pizza Sticks With Dipping Glaze',
        'Gluten Free Pepperoni Pizza Quesadilla',
        'Italian Escarole Pizza',
        'Goat Cheese Arugula Pizza - No Red Sauce!',
        'Easy Peezy Pizza Dough (Bread Machine Pizza Dough)' ]
;
const responseAPI1 = {
  title: "Recipe Puppy",
  version: 0.1,
  href: "http://www.recipepuppy.com/",
  results: [
    {
      title: "Baked Omelet With Broccoli &amp; Tomato",
      href: "http://www.recipezaar.com/Baked-Omelet-With-Broccoli-Tomato-325014",
      ingredients: "milk, cottage cheese, broccoli, cheddar cheese, basil, onion powder, eggs, garlic powder, roma tomato, salt",
      thumbnail: "http://img.recipepuppy.com/123889.jpg"
    },
    {
      title: "Mild Curry Omelet",
      href: "http://allrecipes.com/Recipe/Mild-Curry-Omelet/Detail.aspx",
      ingredients: "coriander, cumin, eggs, garlic, green onion, vegetable oil, onions, red pepper, salt, turmeric",
      thumbnail: ""
    },
    {
      title: "Light Italian Feta Omelet",
      href: "http://www.recipezaar.com/Light-Italian-Feta-Omelet-281901",
      ingredients: "egg substitute, feta cheese, basil, roma tomato, salt",
      thumbnail: "http://img.recipepuppy.com/36027.jpg"
    },
    {
      title: "Awesome Cajun Omelet",
      href: "http://www.recipezaar.com/Awesome-Cajun-Omelet-83278",
      ingredients: "bacon, butter, cajun seasoning, cheddar cheese, eggs, heavy cream, salsa, marsala wine, tomato, white mushroom, onions",
      thumbnail: ""
    },
    {
      title: "Blue Cheese Omelet",
      href: "http://www.recipezaar.com/Blue-Cheese-Omelet-81266",
      ingredients: "blue cheese, butter, cinnamon, eggs, black pepper, salt, apple, walnut, water",
      thumbnail: "http://img.recipepuppy.com/177663.jpg"
    },
    {
      title: "Canadian Bacon Omelet",
      href: "http://www.recipezaar.com/Canadian-Bacon-Omelet-309202",
      ingredients: "butter, canadian bacon, cheddar cheese, eggs, garlic, onions, potato, red pepper, sour cream",
      thumbnail: ""
    },
    {
      title: "Cauliflower and Feta Omelet",
      href: "http://www.recipezaar.com/Cauliflower-and-Feta-Omelet-301887",
      ingredients: "black pepper, nonstick cooking spray, red pepper flakes, eggs, olive oil, feta cheese, parsley, garlic, cauliflower, salt",
      thumbnail: ""
    },
    {
      title: "Chef Joey's Low Cal Breakfast Omelet",
      href: "http://www.recipezaar.com/Chef-Joeys-Low-Cal-Breakfast-Omelet-272748",
      ingredients: "egg substitute, olive oil, herbes de provence, peppers, salt, shallot, bacon",
      thumbnail: ""
    },
    {
      title: "Vegan Omelet For One Recipe",
      href: "http://www.grouprecipes.com/18772/vegan-omelet-for-one.html",
      ingredients: "salt, chipotle pepper, yeast, onion powder, potato starch, soy milk, tahini, turmeric",
      thumbnail: "http://img.recipepuppy.com/328574.jpg"
    },
    {
      title: "Tomato Omelet Recipe",
      href: "http://www.grouprecipes.com/22564/tomato-omelet.html",
      ingredients: "chilli, onions, eggs, tomato, mint, green olive, olive oil, tea, tea",
      thumbnail: ""
    }
  ]
};
const responseAPI2 = {
    q: "fish",
    from: 0,
    to: 10,
    params: {
    sane: [ ],
    q: [
    "fish"
    ],
    from: [
    "0"
    ],
    app_key: [
    "bbf4d50ad16c2fe3f5afd35390497458"
    ],
    to: [
    "10"
    ],
    app_id: [
    "54d5d928"
    ]
    },
    more: true,
    count: 22272,
    hits: [
    {
    recipe: {
    uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_3f0ce55d11f4a075bb39c2091e59e261",
    label: "Deep Fried Fish Bones",
    image: "https://www.edamam.com/web-img/c8c/c8ccf12e2aa2c78b94817f18cd4eaff2.jpg",
    source: "Serious Eats",
    url: "http://www.seriouseats.com/recipes/2011/03/deep-fried-fish-bones-recipe.html",
    shareAs: "http://www.edamam.com/recipe/deep-fried-fish-bones-3f0ce55d11f4a075bb39c2091e59e261/fish",
    yield: 4,
    dietLabels: [
    "Low-Carb"
    ],
    healthLabels: [
    "Sugar-Conscious",
    "Peanut-Free",
    "Tree-Nut-Free",
    "Alcohol-Free"
    ],
    cautions: [ ],
    ingredientLines: [
    "8 small whiting fish or smelt",
    "4 cups vegetable oil"
    ],
    ingredients: [
    {
    text: "8 small whiting fish or smelt",
    weight: 1136
    },
    {
    text: "4 cups vegetable oil",
    weight: 896
    }
    ],
    calories: 2608.256,
    totalWeight: 1306.4,
    totalTime: 31,
    totalNutrients: {
    ENERC_KCAL: {
    label: "Energy",
    quantity: 2608.2560000000003,
    unit: "kcal"
    },
    FAT: {
    label: "Fat",
    quantity: 197.8912,
    unit: "g"
    },
    FASAT: {
    label: "Saturated",
    quantity: 16.229464,
    unit: "g"
    },
    FATRN: {
    label: "Trans",
    quantity: 1.3069680000000001,
    unit: "g"
    },
    FAMS: {
    label: "Monounsaturated",
    quantity: 129.95442400000002,
    unit: "g"
    },
    FAPU: {
    label: "Polyunsaturated",
    quantity: 39.188592,
    unit: "g"
    },
    PROCNT: {
    label: "Protein",
    quantity: 200.27679999999998,
    unit: "g"
    },
    CHOLE: {
    label: "Cholesterol",
    quantity: 795.1999999999999,
    unit: "mg"
    },
    NA: {
    label: "Sodium",
    quantity: 681.5999999999999,
    unit: "mg"
    },
    CA: {
    label: "Calcium",
    quantity: 681.5999999999999,
    unit: "mg"
    },
    MG: {
    label: "Magnesium",
    quantity: 340.79999999999995,
    unit: "mg"
    },
    K: {
    label: "Potassium",
    quantity: 3294.3999999999996,
    unit: "mg"
    },
    FE: {
    label: "Iron",
    quantity: 10.224,
    unit: "mg"
    },
    ZN: {
    label: "Zinc",
    quantity: 18.744,
    unit: "mg"
    },
    P: {
    label: "Phosphorus",
    quantity: 2612.7999999999997,
    unit: "mg"
    },
    VITA_RAE: {
    label: "Vitamin A",
    quantity: 170.39999999999998,
    unit: "µg"
    },
    THIA: {
    label: "Thiamin (B1)",
    quantity: 0.11359999999999999,
    unit: "mg"
    },
    RIBF: {
    label: "Riboflavin (B2)",
    quantity: 1.3632,
    unit: "mg"
    },
    NIA: {
    label: "Niacin (B3)",
    quantity: 16.471999999999998,
    unit: "mg"
    },
    VITB6A: {
    label: "Vitamin B6",
    quantity: 1.704,
    unit: "mg"
    },
    FOLDFE: {
    label: "Folate equivalent (total)",
    quantity: 45.44,
    unit: "µg"
    },
    FOLFD: {
    label: "Folate (food)",
    quantity: 45.44,
    unit: "µg"
    },
    VITB12: {
    label: "Vitamin B12",
    quantity: 39.078399999999995,
    unit: "µg"
    },
    VITD: {
    label: "Vitamin D",
    quantity: 9.088,
    unit: "µg"
    },
    TOCPHA: {
    label: "Vitamin E",
    quantity: 42.827200000000005,
    unit: "mg"
    },
    VITK1: {
    label: "Vitamin K",
    quantity: 1.136,
    unit: "µg"
    }
    },
    totalDaily: {
    ENERC_KCAL: {
    label: "Energy",
    quantity: 130.4128,
    unit: "%"
    },
    FAT: {
    label: "Fat",
    quantity: 304.448,
    unit: "%"
    },
    FASAT: {
    label: "Saturated",
    quantity: 81.14732000000001,
    unit: "%"
    },
    PROCNT: {
    label: "Protein",
    quantity: 400.55359999999996,
    unit: "%"
    },
    CHOLE: {
    label: "Cholesterol",
    quantity: 265.06666666666666,
    unit: "%"
    },
    NA: {
    label: "Sodium",
    quantity: 28.399999999999995,
    unit: "%"
    },
    CA: {
    label: "Calcium",
    quantity: 68.15999999999998,
    unit: "%"
    },
    MG: {
    label: "Magnesium",
    quantity: 85.19999999999999,
    unit: "%"
    },
    K: {
    label: "Potassium",
    quantity: 94.12571428571427,
    unit: "%"
    },
    FE: {
    label: "Iron",
    quantity: 56.8,
    unit: "%"
    },
    ZN: {
    label: "Zinc",
    quantity: 124.96000000000001,
    unit: "%"
    },
    P: {
    label: "Phosphorus",
    quantity: 373.2571428571428,
    unit: "%"
    },
    VITA_RAE: {
    label: "Vitamin A",
    quantity: 18.93333333333333,
    unit: "%"
    },
    THIA: {
    label: "Thiamin (B1)",
    quantity: 7.573333333333333,
    unit: "%"
    },
    RIBF: {
    label: "Riboflavin (B2)",
    quantity: 80.18823529411765,
    unit: "%"
    },
    NIA: {
    label: "Niacin (B3)",
    quantity: 82.35999999999999,
    unit: "%"
    },
    VITB6A: {
    label: "Vitamin B6",
    quantity: 85.2,
    unit: "%"
    },
    FOLDFE: {
    label: "Folate equivalent (total)",
    quantity: 11.36,
    unit: "%"
    },
    VITB12: {
    label: "Vitamin B12",
    quantity: 651.3066666666666,
    unit: "%"
    },
    VITD: {
    label: "Vitamin D",
    quantity: 2.272,
    unit: "%"
    },
    TOCPHA: {
    label: "Vitamin E",
    quantity: 214.13600000000002,
    unit: "%"
    },
    VITK1: {
    label: "Vitamin K",
    quantity: 1.42,
    unit: "%"
    }
    },
    digest: [
    {
    label: "Fat",
    tag: "FAT",
    schemaOrgTag: "fatContent",
    total: 197.8912,
    hasRDI: true,
    daily: 304.448,
    unit: "g",
    sub: [
    {
    label: "Saturated",
    tag: "FASAT",
    schemaOrgTag: "saturatedFatContent",
    total: 16.229464,
    hasRDI: true,
    daily: 81.14732000000001,
    unit: "g"
    },
    {
    label: "Trans",
    tag: "FATRN",
    schemaOrgTag: "transFatContent",
    total: 1.3069680000000001,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Monounsaturated",
    tag: "FAMS",
    schemaOrgTag: null,
    total: 129.95442400000002,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Polyunsaturated",
    tag: "FAPU",
    schemaOrgTag: null,
    total: 39.188592,
    hasRDI: false,
    daily: 0,
    unit: "g"
    }
    ]
    },
    {
    label: "Carbs",
    tag: "CHOCDF",
    schemaOrgTag: "carbohydrateContent",
    total: 0,
    hasRDI: false,
    daily: 0,
    unit: "g",
    sub: [
    {
    label: "Carbs (net)",
    tag: "CHOCDF.net",
    schemaOrgTag: null,
    total: 0,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Fiber",
    tag: "FIBTG",
    schemaOrgTag: "fiberContent",
    total: 0,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Sugars",
    tag: "SUGAR",
    schemaOrgTag: "sugarContent",
    total: 0,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Sugars, added",
    tag: "SUGAR.added",
    schemaOrgTag: null,
    total: 0,
    hasRDI: false,
    daily: 0,
    unit: "g"
    }
    ]
    },
    {
    label: "Protein",
    tag: "PROCNT",
    schemaOrgTag: "proteinContent",
    total: 200.27679999999998,
    hasRDI: true,
    daily: 400.55359999999996,
    unit: "g"
    },
    {
    label: "Cholesterol",
    tag: "CHOLE",
    schemaOrgTag: "cholesterolContent",
    total: 795.1999999999999,
    hasRDI: true,
    daily: 265.06666666666666,
    unit: "mg"
    },
    {
    label: "Sodium",
    tag: "NA",
    schemaOrgTag: "sodiumContent",
    total: 681.5999999999999,
    hasRDI: true,
    daily: 28.399999999999995,
    unit: "mg"
    },
    {
    label: "Calcium",
    tag: "CA",
    schemaOrgTag: null,
    total: 681.5999999999999,
    hasRDI: true,
    daily: 68.15999999999998,
    unit: "mg"
    },
    {
    label: "Magnesium",
    tag: "MG",
    schemaOrgTag: null,
    total: 340.79999999999995,
    hasRDI: true,
    daily: 85.19999999999999,
    unit: "mg"
    },
    {
    label: "Potassium",
    tag: "K",
    schemaOrgTag: null,
    total: 3294.3999999999996,
    hasRDI: true,
    daily: 94.12571428571427,
    unit: "mg"
    },
    {
    label: "Iron",
    tag: "FE",
    schemaOrgTag: null,
    total: 10.224,
    hasRDI: true,
    daily: 56.8,
    unit: "mg"
    },
    {
    label: "Zinc",
    tag: "ZN",
    schemaOrgTag: null,
    total: 18.744,
    hasRDI: true,
    daily: 124.96000000000001,
    unit: "mg"
    },
    {
    label: "Phosphorus",
    tag: "P",
    schemaOrgTag: null,
    total: 2612.7999999999997,
    hasRDI: true,
    daily: 373.2571428571428,
    unit: "mg"
    },
    {
    label: "Vitamin A",
    tag: "VITA_RAE",
    schemaOrgTag: null,
    total: 170.39999999999998,
    hasRDI: true,
    daily: 18.93333333333333,
    unit: "µg"
    },
    {
    label: "Vitamin C",
    tag: "VITC",
    schemaOrgTag: null,
    total: 0,
    hasRDI: false,
    daily: 0,
    unit: "mg"
    },
    {
    label: "Thiamin (B1)",
    tag: "THIA",
    schemaOrgTag: null,
    total: 0.11359999999999999,
    hasRDI: true,
    daily: 7.573333333333333,
    unit: "mg"
    },
    {
    label: "Riboflavin (B2)",
    tag: "RIBF",
    schemaOrgTag: null,
    total: 1.3632,
    hasRDI: true,
    daily: 80.18823529411765,
    unit: "mg"
    },
    {
    label: "Niacin (B3)",
    tag: "NIA",
    schemaOrgTag: null,
    total: 16.471999999999998,
    hasRDI: true,
    daily: 82.35999999999999,
    unit: "mg"
    },
    {
    label: "Vitamin B6",
    tag: "VITB6A",
    schemaOrgTag: null,
    total: 1.704,
    hasRDI: true,
    daily: 85.2,
    unit: "mg"
    },
    {
    label: "Folate equivalent (total)",
    tag: "FOLDFE",
    schemaOrgTag: null,
    total: 45.44,
    hasRDI: true,
    daily: 11.36,
    unit: "µg"
    },
    {
    label: "Folate (food)",
    tag: "FOLFD",
    schemaOrgTag: null,
    total: 45.44,
    hasRDI: false,
    daily: 0,
    unit: "µg"
    },
    {
    label: "Folic acid",
    tag: "FOLAC",
    schemaOrgTag: null,
    total: 0,
    hasRDI: false,
    daily: 0,
    unit: "µg"
    },
    {
    label: "Vitamin B12",
    tag: "VITB12",
    schemaOrgTag: null,
    total: 39.078399999999995,
    hasRDI: true,
    daily: 651.3066666666666,
    unit: "µg"
    },
    {
    label: "Vitamin D",
    tag: "VITD",
    schemaOrgTag: null,
    total: 9.088,
    hasRDI: true,
    daily: 2.272,
    unit: "µg"
    },
    {
    label: "Vitamin E",
    tag: "TOCPHA",
    schemaOrgTag: null,
    total: 42.827200000000005,
    hasRDI: true,
    daily: 214.13600000000002,
    unit: "mg"
    },
    {
    label: "Vitamin K",
    tag: "VITK1",
    schemaOrgTag: null,
    total: 1.136,
    hasRDI: true,
    daily: 1.42,
    unit: "µg"
    }
    ]
    },
    bookmarked: false,
    bought: false
    },
    {
    recipe: {
    uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_137074f2366fc27424f0a6c7ea7ed785",
    label: "Fish Veracruz",
    image: "https://www.edamam.com/web-img/3b8/3b8e16423e91011abe89322659ecf908.jpg",
    source: "No Recipes",
    url: "http://norecipes.com/fish-veracruz-recipe-pescado-veracruzana",
    shareAs: "http://www.edamam.com/recipe/fish-veracruz-137074f2366fc27424f0a6c7ea7ed785/fish",
    yield: 4,
    dietLabels: [
    "High-Protein",
    "Low-Carb"
    ],
    healthLabels: [
    "Sugar-Conscious",
    "Peanut-Free",
    "Tree-Nut-Free",
    "Alcohol-Free"
    ],
    cautions: [ ],
    ingredientLines: [
    "4 pieces of fish (snapper, salmon, halibut or swordfish all work great)",
    "1 small onion diced",
    "4 large cloves of garlic minced",
    "3 medium tomatoes diced",
    "1 serrano chili minced",
    "1/2 c pitted green olives sliced in half",
    "1/3 c capers in brine drained",
    "1/2 tsp mexican oregano",
    "1/4 tsp marjoram",
    "1 california bay leaf",
    "1/2 tsp kosher salt (halve if using table salt)",
    "2 tbs cilantro minced",
    "Lime wedges"
    ],
    ingredients: [
    {
    text: "4 pieces of fish (snapper, salmon, halibut or swordfish all work great)",
    weight: 640
    },
    {
    text: "1 small onion diced",
    weight: 70
    },
    {
    text: "4 large cloves of garlic minced",
    weight: 20
    },
    {
    text: "3 medium tomatoes diced",
    weight: 369
    },
    {
    text: "1 serrano chili minced",
    weight: 6.1
    },
    {
    text: "1/2 c pitted green olives sliced in half",
    weight: 60
    },
    {
    text: "1/3 c capers in brine drained",
    weight: 37.86666666666666
    },
    {
    text: "1/2 tsp mexican oregano",
    weight: 0.5
    },
    {
    text: "1/4 tsp marjoram",
    weight: 0.15
    },
    {
    text: "1 california bay leaf",
    weight: 0.6
    },
    {
    text: "1/2 tsp kosher salt (halve if using table salt)",
    weight: 2.4270833333333335
    },
    {
    text: "2 tbs cilantro minced",
    weight: 6
    },
    {
    text: "Lime wedges",
    weight: 8.375
    }
    ],
    calories: 843.7833333333335,
    totalWeight: 1220.2680566136883,
    totalTime: 0,
    totalNutrients: {
    ENERC_KCAL: {
    label: "Energy",
    quantity: 843.7833333333335,
    unit: "kcal"
    },
    FAT: {
    label: "Fat",
    quantity: 21.462563333333332,
    unit: "g"
    },
    FASAT: {
    label: "Saturated",
    quantity: 5.228659333333334,
    unit: "g"
    },
    FAMS: {
    label: "Monounsaturated",
    quantity: 10.159470250000002,
    unit: "g"
    },
    FAPU: {
    label: "Polyunsaturated",
    quantity: 3.6382254166666663,
    unit: "g"
    },
    CHOCDF: {
    label: "Carbs",
    quantity: 34.056665,
    unit: "g"
    },
    FIBTG: {
    label: "Fiber",
    quantity: 10.288683333333333,
    unit: "g"
    },
    SUGAR: {
    label: "Sugars",
    quantity: 13.805905833333332,
    unit: "g"
    },
    PROCNT: {
    label: "Protein",
    quantity: 135.71506833333333,
    unit: "g"
    },
    CHOLE: {
    label: "Cholesterol",
    quantity: 320,
    unit: "mg"
    },
    NA: {
    label: "Sodium",
    quantity: 2833.810549,
    unit: "mg"
    },
    CA: {
    label: "Calcium",
    quantity: 223.37775025395186,
    unit: "mg"
    },
    MG: {
    label: "Magnesium",
    quantity: 250.49626389947025,
    unit: "mg"
    },
    K: {
    label: "Potassium",
    quantity: 3100.375277862429,
    unit: "mg"
    },
    FE: {
    label: "Iron",
    quantity: 6.774180420158506,
    unit: "mg"
    },
    ZN: {
    label: "Zinc",
    quantity: 3.3332722232803547,
    unit: "mg"
    },
    P: {
    label: "Phosphorus",
    quantity: 1242.3511666666668,
    unit: "mg"
    },
    VITA_RAE: {
    label: "Vitamin A",
    quantity: 195.76866666666666,
    unit: "µg"
    },
    VITC: {
    label: "Vitamin C",
    quantity: 70.76489166666666,
    unit: "mg"
    },
    THIA: {
    label: "Thiamin (B1)",
    quantity: 0.501745,
    unit: "mg"
    },
    RIBF: {
    label: "Riboflavin (B2)",
    quantity: 0.5930206666666666,
    unit: "mg"
    },
    NIA: {
    label: "Niacin (B3)",
    quantity: 28.00010766666666,
    unit: "mg"
    },
    VITB6A: {
    label: "Vitamin B6",
    quantity: 1.7511005833333333,
    unit: "mg"
    },
    FOLDFE: {
    label: "Folate equivalent (total)",
    quantity: 241.82833333333335,
    unit: "µg"
    },
    FOLFD: {
    label: "Folate (food)",
    quantity: 241.82833333333335,
    unit: "µg"
    },
    VITB12: {
    label: "Vitamin B12",
    quantity: 10.112000000000002,
    unit: "µg"
    },
    VITD: {
    label: "Vitamin D",
    quantity: 19.840000000000003,
    unit: "µg"
    },
    TOCPHA: {
    label: "Vitamin E",
    quantity: 7.506176666666668,
    unit: "mg"
    },
    VITK1: {
    label: "Vitamin K",
    quantity: 72.29729999999999,
    unit: "µg"
    }
    },
    totalDaily: {
    ENERC_KCAL: {
    label: "Energy",
    quantity: 42.18916666666668,
    unit: "%"
    },
    FAT: {
    label: "Fat",
    quantity: 33.019328205128204,
    unit: "%"
    },
    FASAT: {
    label: "Saturated",
    quantity: 26.143296666666668,
    unit: "%"
    },
    CHOCDF: {
    label: "Carbs",
    quantity: 11.352221666666667,
    unit: "%"
    },
    FIBTG: {
    label: "Fiber",
    quantity: 41.15473333333333,
    unit: "%"
    },
    PROCNT: {
    label: "Protein",
    quantity: 271.43013666666667,
    unit: "%"
    },
    CHOLE: {
    label: "Cholesterol",
    quantity: 106.66666666666667,
    unit: "%"
    },
    NA: {
    label: "Sodium",
    quantity: 118.07543954166667,
    unit: "%"
    },
    CA: {
    label: "Calcium",
    quantity: 22.337775025395185,
    unit: "%"
    },
    MG: {
    label: "Magnesium",
    quantity: 62.62406597486756,
    unit: "%"
    },
    K: {
    label: "Potassium",
    quantity: 88.5821507960694,
    unit: "%"
    },
    FE: {
    label: "Iron",
    quantity: 37.634335667547255,
    unit: "%"
    },
    ZN: {
    label: "Zinc",
    quantity: 22.22181482186903,
    unit: "%"
    },
    P: {
    label: "Phosphorus",
    quantity: 177.47873809523813,
    unit: "%"
    },
    VITA_RAE: {
    label: "Vitamin A",
    quantity: 21.752074074074073,
    unit: "%"
    },
    VITC: {
    label: "Vitamin C",
    quantity: 117.94148611111109,
    unit: "%"
    },
    THIA: {
    label: "Thiamin (B1)",
    quantity: 33.449666666666666,
    unit: "%"
    },
    RIBF: {
    label: "Riboflavin (B2)",
    quantity: 34.88356862745098,
    unit: "%"
    },
    NIA: {
    label: "Niacin (B3)",
    quantity: 140.0005383333333,
    unit: "%"
    },
    VITB6A: {
    label: "Vitamin B6",
    quantity: 87.55502916666667,
    unit: "%"
    },
    FOLDFE: {
    label: "Folate equivalent (total)",
    quantity: 60.45708333333334,
    unit: "%"
    },
    VITB12: {
    label: "Vitamin B12",
    quantity: 168.53333333333336,
    unit: "%"
    },
    VITD: {
    label: "Vitamin D",
    quantity: 4.960000000000001,
    unit: "%"
    },
    TOCPHA: {
    label: "Vitamin E",
    quantity: 37.530883333333335,
    unit: "%"
    },
    VITK1: {
    label: "Vitamin K",
    quantity: 90.371625,
    unit: "%"
    }
    },
    digest: [
    {
    label: "Fat",
    tag: "FAT",
    schemaOrgTag: "fatContent",
    total: 21.462563333333332,
    hasRDI: true,
    daily: 33.019328205128204,
    unit: "g",
    sub: [
    {
    label: "Saturated",
    tag: "FASAT",
    schemaOrgTag: "saturatedFatContent",
    total: 5.228659333333334,
    hasRDI: true,
    daily: 26.143296666666668,
    unit: "g"
    },
    {
    label: "Trans",
    tag: "FATRN",
    schemaOrgTag: "transFatContent",
    total: 0,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Monounsaturated",
    tag: "FAMS",
    schemaOrgTag: null,
    total: 10.159470250000002,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Polyunsaturated",
    tag: "FAPU",
    schemaOrgTag: null,
    total: 3.6382254166666663,
    hasRDI: false,
    daily: 0,
    unit: "g"
    }
    ]
    },
    {
    label: "Carbs",
    tag: "CHOCDF",
    schemaOrgTag: "carbohydrateContent",
    total: 34.056665,
    hasRDI: true,
    daily: 11.352221666666667,
    unit: "g",
    sub: [
    {
    label: "Carbs (net)",
    tag: "CHOCDF.net",
    schemaOrgTag: null,
    total: 23.76798166666667,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Fiber",
    tag: "FIBTG",
    schemaOrgTag: "fiberContent",
    total: 10.288683333333333,
    hasRDI: true,
    daily: 41.15473333333333,
    unit: "g"
    },
    {
    label: "Sugars",
    tag: "SUGAR",
    schemaOrgTag: "sugarContent",
    total: 13.805905833333332,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Sugars, added",
    tag: "SUGAR.added",
    schemaOrgTag: null,
    total: 0,
    hasRDI: false,
    daily: 0,
    unit: "g"
    }
    ]
    },
    {
    label: "Protein",
    tag: "PROCNT",
    schemaOrgTag: "proteinContent",
    total: 135.71506833333333,
    hasRDI: true,
    daily: 271.43013666666667,
    unit: "g"
    },
    {
    label: "Cholesterol",
    tag: "CHOLE",
    schemaOrgTag: "cholesterolContent",
    total: 320,
    hasRDI: true,
    daily: 106.66666666666667,
    unit: "mg"
    },
    {
    label: "Sodium",
    tag: "NA",
    schemaOrgTag: "sodiumContent",
    total: 2833.810549,
    hasRDI: true,
    daily: 118.07543954166667,
    unit: "mg"
    },
    {
    label: "Calcium",
    tag: "CA",
    schemaOrgTag: null,
    total: 223.37775025395186,
    hasRDI: true,
    daily: 22.337775025395185,
    unit: "mg"
    },
    {
    label: "Magnesium",
    tag: "MG",
    schemaOrgTag: null,
    total: 250.49626389947025,
    hasRDI: true,
    daily: 62.62406597486756,
    unit: "mg"
    },
    {
    label: "Potassium",
    tag: "K",
    schemaOrgTag: null,
    total: 3100.375277862429,
    hasRDI: true,
    daily: 88.5821507960694,
    unit: "mg"
    },
    {
    label: "Iron",
    tag: "FE",
    schemaOrgTag: null,
    total: 6.774180420158506,
    hasRDI: true,
    daily: 37.634335667547255,
    unit: "mg"
    },
    {
    label: "Zinc",
    tag: "ZN",
    schemaOrgTag: null,
    total: 3.3332722232803547,
    hasRDI: true,
    daily: 22.22181482186903,
    unit: "mg"
    },
    {
    label: "Phosphorus",
    tag: "P",
    schemaOrgTag: null,
    total: 1242.3511666666668,
    hasRDI: true,
    daily: 177.47873809523813,
    unit: "mg"
    },
    {
    label: "Vitamin A",
    tag: "VITA_RAE",
    schemaOrgTag: null,
    total: 195.76866666666666,
    hasRDI: true,
    daily: 21.752074074074073,
    unit: "µg"
    },
    {
    label: "Vitamin C",
    tag: "VITC",
    schemaOrgTag: null,
    total: 70.76489166666666,
    hasRDI: true,
    daily: 117.94148611111109,
    unit: "mg"
    },
    {
    label: "Thiamin (B1)",
    tag: "THIA",
    schemaOrgTag: null,
    total: 0.501745,
    hasRDI: true,
    daily: 33.449666666666666,
    unit: "mg"
    },
    {
    label: "Riboflavin (B2)",
    tag: "RIBF",
    schemaOrgTag: null,
    total: 0.5930206666666666,
    hasRDI: true,
    daily: 34.88356862745098,
    unit: "mg"
    },
    {
    label: "Niacin (B3)",
    tag: "NIA",
    schemaOrgTag: null,
    total: 28.00010766666666,
    hasRDI: true,
    daily: 140.0005383333333,
    unit: "mg"
    },
    {
    label: "Vitamin B6",
    tag: "VITB6A",
    schemaOrgTag: null,
    total: 1.7511005833333333,
    hasRDI: true,
    daily: 87.55502916666667,
    unit: "mg"
    },
    {
    label: "Folate equivalent (total)",
    tag: "FOLDFE",
    schemaOrgTag: null,
    total: 241.82833333333335,
    hasRDI: true,
    daily: 60.45708333333334,
    unit: "µg"
    },
    {
    label: "Folate (food)",
    tag: "FOLFD",
    schemaOrgTag: null,
    total: 241.82833333333335,
    hasRDI: false,
    daily: 0,
    unit: "µg"
    },
    {
    label: "Folic acid",
    tag: "FOLAC",
    schemaOrgTag: null,
    total: 0,
    hasRDI: false,
    daily: 0,
    unit: "µg"
    },
    {
    label: "Vitamin B12",
    tag: "VITB12",
    schemaOrgTag: null,
    total: 10.112000000000002,
    hasRDI: true,
    daily: 168.53333333333336,
    unit: "µg"
    },
    {
    label: "Vitamin D",
    tag: "VITD",
    schemaOrgTag: null,
    total: 19.840000000000003,
    hasRDI: true,
    daily: 4.960000000000001,
    unit: "µg"
    },
    {
    label: "Vitamin E",
    tag: "TOCPHA",
    schemaOrgTag: null,
    total: 7.506176666666668,
    hasRDI: true,
    daily: 37.530883333333335,
    unit: "mg"
    },
    {
    label: "Vitamin K",
    tag: "VITK1",
    schemaOrgTag: null,
    total: 72.29729999999999,
    hasRDI: true,
    daily: 90.371625,
    unit: "µg"
    }
    ]
    },
    bookmarked: false,
    bought: false
    },
    {
    recipe: {
    uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_672c9e7e3fbc6240477d99152ba8f6b3",
    label: "Burnt-Scallion Fish",
    image: "https://www.edamam.com/web-img/a96/a967fbe797803dbe8418a668cf304b53.jpg",
    source: "Saveur",
    url: "http://www.saveur.com/article/Recipes/Burnt-Scallion-Fish",
    shareAs: "http://www.edamam.com/recipe/burnt-scallion-fish-672c9e7e3fbc6240477d99152ba8f6b3/fish",
    yield: 6,
    dietLabels: [
    "Low-Carb"
    ],
    healthLabels: [
    "Sugar-Conscious",
    "Peanut-Free",
    "Tree-Nut-Free",
    "Alcohol-Free"
    ],
    cautions: [ ],
    ingredientLines: [
    "2 bunches scallions",
    "8 tbsp. butter",
    "2 8-oz. fish filets"
    ],
    ingredients: [
    {
    text: "2 bunches scallions",
    weight: 226
    },
    {
    text: "8 tbsp. butter",
    weight: 113.6
    },
    {
    text: "2 8-oz. fish filets",
    weight: 453.59237
    }
    ],
    calories: 1322.2806752,
    totalWeight: 793.19237,
    totalTime: 0,
    totalNutrients: {
    ENERC_KCAL: {
    label: "Energy",
    quantity: 1322.2806752000001,
    unit: "kcal"
    },
    FAT: {
    label: "Fat",
    quantity: 100.28143028999999,
    unit: "g"
    },
    FASAT: {
    label: "Saturated",
    quantity: 61.0798833645,
    unit: "g"
    },
    FATRN: {
    label: "Trans",
    quantity: 3.7238079999999996,
    unit: "g"
    },
    FAMS: {
    label: "Monounsaturated",
    quantity: 26.1997660026,
    unit: "g"
    },
    FAPU: {
    label: "Polyunsaturated",
    quantity: 5.2706283031000005,
    unit: "g"
    },
    CHOCDF: {
    label: "Carbs",
    quantity: 16.65656,
    unit: "g"
    },
    FIBTG: {
    label: "Fiber",
    quantity: 5.876000000000001,
    unit: "g"
    },
    SUGAR: {
    label: "Sugars",
    quantity: 5.33396,
    unit: "g"
    },
    PROCNT: {
    label: "Protein",
    quantity: 96.182747896,
    unit: "g"
    },
    CHOLE: {
    label: "Cholesterol",
    quantity: 471.03618500000005,
    unit: "mg"
    },
    NA: {
    label: "Sodium",
    quantity: 284.5240324,
    unit: "mg"
    },
    CA: {
    label: "Calcium",
    quantity: 235.34323700000004,
    unit: "mg"
    },
    MG: {
    label: "Magnesium",
    quantity: 169.94193990000002,
    unit: "mg"
    },
    K: {
    label: "Potassium",
    quantity: 2020.8729574000004,
    unit: "mg"
    },
    FE: {
    label: "Iron",
    quantity: 5.9076372720000006,
    unit: "mg"
    },
    ZN: {
    label: "Zinc",
    quantity: 2.4804948210000006,
    unit: "mg"
    },
    P: {
    label: "Phosphorus",
    quantity: 881.9910290000001,
    unit: "mg"
    },
    VITA_RAE: {
    label: "Vitamin A",
    quantity: 890.0239999999999,
    unit: "µg"
    },
    VITC: {
    label: "Vitamin C",
    quantity: 42.48800000000001,
    unit: "mg"
    },
    THIA: {
    label: "Thiamin (B1)",
    quantity: 0.3159528717000001,
    unit: "mg"
    },
    RIBF: {
    label: "Riboflavin (B2)",
    quantity: 0.5051871931,
    unit: "mg"
    },
    NIA: {
    label: "Niacin (B3)",
    quantity: 18.9379222011,
    unit: "mg"
    },
    VITB6A: {
    label: "Vitamin B6",
    quantity: 0.8760876394000001,
    unit: "mg"
    },
    FOLDFE: {
    label: "Folate equivalent (total)",
    quantity: 256.9101688,
    unit: "µg"
    },
    FOLFD: {
    label: "Folate (food)",
    quantity: 256.9101688,
    unit: "µg"
    },
    VITB12: {
    label: "Vitamin B12",
    quantity: 7.359879446000002,
    unit: "µg"
    },
    VITD: {
    label: "Vitamin D",
    quantity: 15.76536347,
    unit: "µg"
    },
    TOCPHA: {
    label: "Vitamin E",
    quantity: 5.69288948,
    unit: "mg"
    },
    VITK1: {
    label: "Vitamin K",
    quantity: 482.12229318000004,
    unit: "µg"
    }
    },
    totalDaily: {
    ENERC_KCAL: {
    label: "Energy",
    quantity: 66.11403376000001,
    unit: "%"
    },
    FAT: {
    label: "Fat",
    quantity: 154.27912352307692,
    unit: "%"
    },
    FASAT: {
    label: "Saturated",
    quantity: 305.39941682250003,
    unit: "%"
    },
    CHOCDF: {
    label: "Carbs",
    quantity: 5.552186666666667,
    unit: "%"
    },
    FIBTG: {
    label: "Fiber",
    quantity: 23.504000000000005,
    unit: "%"
    },
    PROCNT: {
    label: "Protein",
    quantity: 192.365495792,
    unit: "%"
    },
    CHOLE: {
    label: "Cholesterol",
    quantity: 157.01206166666668,
    unit: "%"
    },
    NA: {
    label: "Sodium",
    quantity: 11.855168016666667,
    unit: "%"
    },
    CA: {
    label: "Calcium",
    quantity: 23.534323700000005,
    unit: "%"
    },
    MG: {
    label: "Magnesium",
    quantity: 42.485484975000006,
    unit: "%"
    },
    K: {
    label: "Potassium",
    quantity: 57.739227354285724,
    unit: "%"
    },
    FE: {
    label: "Iron",
    quantity: 32.82020706666667,
    unit: "%"
    },
    ZN: {
    label: "Zinc",
    quantity: 16.536632140000005,
    unit: "%"
    },
    P: {
    label: "Phosphorus",
    quantity: 125.99871842857145,
    unit: "%"
    },
    VITA_RAE: {
    label: "Vitamin A",
    quantity: 98.89155555555556,
    unit: "%"
    },
    VITC: {
    label: "Vitamin C",
    quantity: 70.81333333333335,
    unit: "%"
    },
    THIA: {
    label: "Thiamin (B1)",
    quantity: 21.063524780000005,
    unit: "%"
    },
    RIBF: {
    label: "Riboflavin (B2)",
    quantity: 29.71689371176471,
    unit: "%"
    },
    NIA: {
    label: "Niacin (B3)",
    quantity: 94.6896110055,
    unit: "%"
    },
    VITB6A: {
    label: "Vitamin B6",
    quantity: 43.80438197000001,
    unit: "%"
    },
    FOLDFE: {
    label: "Folate equivalent (total)",
    quantity: 64.2275422,
    unit: "%"
    },
    VITB12: {
    label: "Vitamin B12",
    quantity: 122.66465743333337,
    unit: "%"
    },
    VITD: {
    label: "Vitamin D",
    quantity: 3.9413408675,
    unit: "%"
    },
    TOCPHA: {
    label: "Vitamin E",
    quantity: 28.4644474,
    unit: "%"
    },
    VITK1: {
    label: "Vitamin K",
    quantity: 602.6528664750001,
    unit: "%"
    }
    },
    digest: [
    {
    label: "Fat",
    tag: "FAT",
    schemaOrgTag: "fatContent",
    total: 100.28143028999999,
    hasRDI: true,
    daily: 154.27912352307692,
    unit: "g",
    sub: [
    {
    label: "Saturated",
    tag: "FASAT",
    schemaOrgTag: "saturatedFatContent",
    total: 61.0798833645,
    hasRDI: true,
    daily: 305.39941682250003,
    unit: "g"
    },
    {
    label: "Trans",
    tag: "FATRN",
    schemaOrgTag: "transFatContent",
    total: 3.7238079999999996,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Monounsaturated",
    tag: "FAMS",
    schemaOrgTag: null,
    total: 26.1997660026,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Polyunsaturated",
    tag: "FAPU",
    schemaOrgTag: null,
    total: 5.2706283031000005,
    hasRDI: false,
    daily: 0,
    unit: "g"
    }
    ]
    },
    {
    label: "Carbs",
    tag: "CHOCDF",
    schemaOrgTag: "carbohydrateContent",
    total: 16.65656,
    hasRDI: true,
    daily: 5.552186666666667,
    unit: "g",
    sub: [
    {
    label: "Carbs (net)",
    tag: "CHOCDF.net",
    schemaOrgTag: null,
    total: 10.780559999999998,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Fiber",
    tag: "FIBTG",
    schemaOrgTag: "fiberContent",
    total: 5.876000000000001,
    hasRDI: true,
    daily: 23.504000000000005,
    unit: "g"
    },
    {
    label: "Sugars",
    tag: "SUGAR",
    schemaOrgTag: "sugarContent",
    total: 5.33396,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Sugars, added",
    tag: "SUGAR.added",
    schemaOrgTag: null,
    total: 0,
    hasRDI: false,
    daily: 0,
    unit: "g"
    }
    ]
    },
    {
    label: "Protein",
    tag: "PROCNT",
    schemaOrgTag: "proteinContent",
    total: 96.182747896,
    hasRDI: true,
    daily: 192.365495792,
    unit: "g"
    },
    {
    label: "Cholesterol",
    tag: "CHOLE",
    schemaOrgTag: "cholesterolContent",
    total: 471.03618500000005,
    hasRDI: true,
    daily: 157.01206166666668,
    unit: "mg"
    },
    {
    label: "Sodium",
    tag: "NA",
    schemaOrgTag: "sodiumContent",
    total: 284.5240324,
    hasRDI: true,
    daily: 11.855168016666667,
    unit: "mg"
    },
    {
    label: "Calcium",
    tag: "CA",
    schemaOrgTag: null,
    total: 235.34323700000004,
    hasRDI: true,
    daily: 23.534323700000005,
    unit: "mg"
    },
    {
    label: "Magnesium",
    tag: "MG",
    schemaOrgTag: null,
    total: 169.94193990000002,
    hasRDI: true,
    daily: 42.485484975000006,
    unit: "mg"
    },
    {
    label: "Potassium",
    tag: "K",
    schemaOrgTag: null,
    total: 2020.8729574000004,
    hasRDI: true,
    daily: 57.739227354285724,
    unit: "mg"
    },
    {
    label: "Iron",
    tag: "FE",
    schemaOrgTag: null,
    total: 5.9076372720000006,
    hasRDI: true,
    daily: 32.82020706666667,
    unit: "mg"
    },
    {
    label: "Zinc",
    tag: "ZN",
    schemaOrgTag: null,
    total: 2.4804948210000006,
    hasRDI: true,
    daily: 16.536632140000005,
    unit: "mg"
    },
    {
    label: "Phosphorus",
    tag: "P",
    schemaOrgTag: null,
    total: 881.9910290000001,
    hasRDI: true,
    daily: 125.99871842857145,
    unit: "mg"
    },
    {
    label: "Vitamin A",
    tag: "VITA_RAE",
    schemaOrgTag: null,
    total: 890.0239999999999,
    hasRDI: true,
    daily: 98.89155555555556,
    unit: "µg"
    },
    {
    label: "Vitamin C",
    tag: "VITC",
    schemaOrgTag: null,
    total: 42.48800000000001,
    hasRDI: true,
    daily: 70.81333333333335,
    unit: "mg"
    },
    {
    label: "Thiamin (B1)",
    tag: "THIA",
    schemaOrgTag: null,
    total: 0.3159528717000001,
    hasRDI: true,
    daily: 21.063524780000005,
    unit: "mg"
    },
    {
    label: "Riboflavin (B2)",
    tag: "RIBF",
    schemaOrgTag: null,
    total: 0.5051871931,
    hasRDI: true,
    daily: 29.71689371176471,
    unit: "mg"
    },
    {
    label: "Niacin (B3)",
    tag: "NIA",
    schemaOrgTag: null,
    total: 18.9379222011,
    hasRDI: true,
    daily: 94.6896110055,
    unit: "mg"
    },
    {
    label: "Vitamin B6",
    tag: "VITB6A",
    schemaOrgTag: null,
    total: 0.8760876394000001,
    hasRDI: true,
    daily: 43.80438197000001,
    unit: "mg"
    },
    {
    label: "Folate equivalent (total)",
    tag: "FOLDFE",
    schemaOrgTag: null,
    total: 256.9101688,
    hasRDI: true,
    daily: 64.2275422,
    unit: "µg"
    },
    {
    label: "Folate (food)",
    tag: "FOLFD",
    schemaOrgTag: null,
    total: 256.9101688,
    hasRDI: false,
    daily: 0,
    unit: "µg"
    },
    {
    label: "Folic acid",
    tag: "FOLAC",
    schemaOrgTag: null,
    total: 0,
    hasRDI: false,
    daily: 0,
    unit: "µg"
    },
    {
    label: "Vitamin B12",
    tag: "VITB12",
    schemaOrgTag: null,
    total: 7.359879446000002,
    hasRDI: true,
    daily: 122.66465743333337,
    unit: "µg"
    },
    {
    label: "Vitamin D",
    tag: "VITD",
    schemaOrgTag: null,
    total: 15.76536347,
    hasRDI: true,
    daily: 3.9413408675,
    unit: "µg"
    },
    {
    label: "Vitamin E",
    tag: "TOCPHA",
    schemaOrgTag: null,
    total: 5.69288948,
    hasRDI: true,
    daily: 28.4644474,
    unit: "mg"
    },
    {
    label: "Vitamin K",
    tag: "VITK1",
    schemaOrgTag: null,
    total: 482.12229318000004,
    hasRDI: true,
    daily: 602.6528664750001,
    unit: "µg"
    }
    ]
    },
    bookmarked: false,
    bought: false
    },
    {
    recipe: {
    uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_46f0285ac49d2b918bc7171142de042b",
    label: "Fish Curry",
    image: "https://www.edamam.com/web-img/5ed/5ed4915abd206364bb6ab0236811309b.jpg",
    source: "BBC Good Food",
    url: "http://www.bbcgoodfood.com/recipes/4328/",
    shareAs: "http://www.edamam.com/recipe/fish-curry-46f0285ac49d2b918bc7171142de042b/fish",
    yield: 4,
    dietLabels: [
    "Low-Carb"
    ],
    healthLabels: [
    "Peanut-Free",
    "Tree-Nut-Free",
    "Alcohol-Free"
    ],
    cautions: [ ],
    ingredientLines: [
    "450.0g white fish fillets, cut into large chunks",
    "2.0 tbsp curry paste , Madras is good for this",
    "olive oil for frying",
    "2 x 400g tins chopped tomato",
    "1 onion , finely sliced",
    "a small handful of coriander leaves"
    ],
    ingredients: [
    {
    text: "450.0g white fish fillets, cut into large chunks",
    weight: 450
    },
    {
    text: "2.0 tbsp curry paste , Madras is good for this",
    weight: 32
    },
    {
    text: "olive oil for frying",
    weight: 19.1964
    },
    {
    text: "2 x 400g tins chopped tomato",
    weight: 800
    },
    {
    text: "1 onion , finely sliced",
    weight: 125
    },
    {
    text: "a small handful of coriander leaves",
    weight: 4.5
    }
    ],
    calories: 2520.9738251127865,
    totalWeight: 1623.225,
    totalTime: 0,
    totalNutrients: {
    ENERC_KCAL: {
    label: "Energy",
    quantity: 2520.9738251127865,
    unit: "kcal"
    },
    FAT: {
    label: "Fat",
    quantity: 223.29400410494287,
    unit: "g"
    },
    FASAT: {
    label: "Saturated",
    quantity: 32.42864855629658,
    unit: "g"
    },
    FAMS: {
    label: "Monounsaturated",
    quantity: 157.90781727321956,
    unit: "g"
    },
    FAPU: {
    label: "Polyunsaturated",
    quantity: 25.296621708248807,
    unit: "g"
    },
    CHOCDF: {
    label: "Carbs",
    quantity: 45.15140001246726,
    unit: "g"
    },
    FIBTG: {
    label: "Fiber",
    quantity: 18.849034826333543,
    unit: "g"
    },
    SUGAR: {
    label: "Sugars",
    quantity: 26.190871446405403,
    unit: "g"
    },
    PROCNT: {
    label: "Protein",
    quantity: 99.8113545602305,
    unit: "g"
    },
    CHOLE: {
    label: "Cholesterol",
    quantity: 227.9438996377227,
    unit: "mg"
    },
    NA: {
    label: "Sodium",
    quantity: 1327.389766536074,
    unit: "mg"
    },
    CA: {
    label: "Calcium",
    quantity: 372.15365058722824,
    unit: "mg"
    },
    MG: {
    label: "Magnesium",
    quantity: 231.94079682030198,
    unit: "mg"
    },
    K: {
    label: "Potassium",
    quantity: 3228.6634380251494,
    unit: "mg"
    },
    FE: {
    label: "Iron",
    quantity: 10.027593962805032,
    unit: "mg"
    },
    ZN: {
    label: "Zinc",
    quantity: 3.0722765886702144,
    unit: "mg"
    },
    P: {
    label: "Phosphorus",
    quantity: 973.1638690960413,
    unit: "mg"
    },
    VITA_RAE: {
    label: "Vitamin A",
    quantity: 201.70171197880953,
    unit: "µg"
    },
    VITC: {
    label: "Vitamin C",
    quantity: 115.67537118247911,
    unit: "mg"
    },
    THIA: {
    label: "Thiamin (B1)",
    quantity: 4.88229505021392,
    unit: "mg"
    },
    RIBF: {
    label: "Riboflavin (B2)",
    quantity: 0.7979929569320823,
    unit: "mg"
    },
    NIA: {
    label: "Niacin (B3)",
    quantity: 24.041508622022896,
    unit: "mg"
    },
    VITB6A: {
    label: "Vitamin B6",
    quantity: 1.8508115661824869,
    unit: "mg"
    },
    FOLDFE: {
    label: "Folate equivalent (total)",
    quantity: 211.38120859501285,
    unit: "µg"
    },
    FOLFD: {
    label: "Folate (food)",
    quantity: 211.38120859501285,
    unit: "µg"
    },
    VITB12: {
    label: "Vitamin B12",
    quantity: 7.1186447846504555,
    unit: "µg"
    },
    VITD: {
    label: "Vitamin D",
    quantity: 13.950000000000001,
    unit: "µg"
    },
    TOCPHA: {
    label: "Vitamin E",
    quantity: 37.625771819322246,
    unit: "mg"
    },
    VITK1: {
    label: "Vitamin K",
    quantity: 171.70932105390557,
    unit: "µg"
    }
    },
    totalDaily: {
    ENERC_KCAL: {
    label: "Energy",
    quantity: 126.04869125563933,
    unit: "%"
    },
    FAT: {
    label: "Fat",
    quantity: 343.5292370845275,
    unit: "%"
    },
    FASAT: {
    label: "Saturated",
    quantity: 162.1432427814829,
    unit: "%"
    },
    CHOCDF: {
    label: "Carbs",
    quantity: 15.050466670822422,
    unit: "%"
    },
    FIBTG: {
    label: "Fiber",
    quantity: 75.39613930533417,
    unit: "%"
    },
    PROCNT: {
    label: "Protein",
    quantity: 199.622709120461,
    unit: "%"
    },
    CHOLE: {
    label: "Cholesterol",
    quantity: 75.9812998792409,
    unit: "%"
    },
    NA: {
    label: "Sodium",
    quantity: 55.307906939003075,
    unit: "%"
    },
    CA: {
    label: "Calcium",
    quantity: 37.215365058722824,
    unit: "%"
    },
    MG: {
    label: "Magnesium",
    quantity: 57.985199205075496,
    unit: "%"
    },
    K: {
    label: "Potassium",
    quantity: 92.24752680071856,
    unit: "%"
    },
    FE: {
    label: "Iron",
    quantity: 55.70885534891684,
    unit: "%"
    },
    ZN: {
    label: "Zinc",
    quantity: 20.481843924468095,
    unit: "%"
    },
    P: {
    label: "Phosphorus",
    quantity: 139.02340987086305,
    unit: "%"
    },
    VITA_RAE: {
    label: "Vitamin A",
    quantity: 22.411301330978837,
    unit: "%"
    },
    VITC: {
    label: "Vitamin C",
    quantity: 192.79228530413184,
    unit: "%"
    },
    THIA: {
    label: "Thiamin (B1)",
    quantity: 325.486336680928,
    unit: "%"
    },
    RIBF: {
    label: "Riboflavin (B2)",
    quantity: 46.940762172475424,
    unit: "%"
    },
    NIA: {
    label: "Niacin (B3)",
    quantity: 120.20754311011449,
    unit: "%"
    },
    VITB6A: {
    label: "Vitamin B6",
    quantity: 92.54057830912434,
    unit: "%"
    },
    FOLDFE: {
    label: "Folate equivalent (total)",
    quantity: 52.84530214875322,
    unit: "%"
    },
    VITB12: {
    label: "Vitamin B12",
    quantity: 118.64407974417425,
    unit: "%"
    },
    VITD: {
    label: "Vitamin D",
    quantity: 3.4875,
    unit: "%"
    },
    TOCPHA: {
    label: "Vitamin E",
    quantity: 188.12885909661122,
    unit: "%"
    },
    VITK1: {
    label: "Vitamin K",
    quantity: 214.636651317382,
    unit: "%"
    }
    },
    digest: [
    {
    label: "Fat",
    tag: "FAT",
    schemaOrgTag: "fatContent",
    total: 223.29400410494287,
    hasRDI: true,
    daily: 343.5292370845275,
    unit: "g",
    sub: [
    {
    label: "Saturated",
    tag: "FASAT",
    schemaOrgTag: "saturatedFatContent",
    total: 32.42864855629658,
    hasRDI: true,
    daily: 162.1432427814829,
    unit: "g"
    },
    {
    label: "Trans",
    tag: "FATRN",
    schemaOrgTag: "transFatContent",
    total: 0,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Monounsaturated",
    tag: "FAMS",
    schemaOrgTag: null,
    total: 157.90781727321956,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Polyunsaturated",
    tag: "FAPU",
    schemaOrgTag: null,
    total: 25.296621708248807,
    hasRDI: false,
    daily: 0,
    unit: "g"
    }
    ]
    },
    {
    label: "Carbs",
    tag: "CHOCDF",
    schemaOrgTag: "carbohydrateContent",
    total: 45.15140001246726,
    hasRDI: true,
    daily: 15.050466670822422,
    unit: "g",
    sub: [
    {
    label: "Carbs (net)",
    tag: "CHOCDF.net",
    schemaOrgTag: null,
    total: 26.30236518613372,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Fiber",
    tag: "FIBTG",
    schemaOrgTag: "fiberContent",
    total: 18.849034826333543,
    hasRDI: true,
    daily: 75.39613930533417,
    unit: "g"
    },
    {
    label: "Sugars",
    tag: "SUGAR",
    schemaOrgTag: "sugarContent",
    total: 26.190871446405403,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Sugars, added",
    tag: "SUGAR.added",
    schemaOrgTag: null,
    total: 0,
    hasRDI: false,
    daily: 0,
    unit: "g"
    }
    ]
    },
    {
    label: "Protein",
    tag: "PROCNT",
    schemaOrgTag: "proteinContent",
    total: 99.8113545602305,
    hasRDI: true,
    daily: 199.622709120461,
    unit: "g"
    },
    {
    label: "Cholesterol",
    tag: "CHOLE",
    schemaOrgTag: "cholesterolContent",
    total: 227.9438996377227,
    hasRDI: true,
    daily: 75.9812998792409,
    unit: "mg"
    },
    {
    label: "Sodium",
    tag: "NA",
    schemaOrgTag: "sodiumContent",
    total: 1327.389766536074,
    hasRDI: true,
    daily: 55.307906939003075,
    unit: "mg"
    },
    {
    label: "Calcium",
    tag: "CA",
    schemaOrgTag: null,
    total: 372.15365058722824,
    hasRDI: true,
    daily: 37.215365058722824,
    unit: "mg"
    },
    {
    label: "Magnesium",
    tag: "MG",
    schemaOrgTag: null,
    total: 231.94079682030198,
    hasRDI: true,
    daily: 57.985199205075496,
    unit: "mg"
    },
    {
    label: "Potassium",
    tag: "K",
    schemaOrgTag: null,
    total: 3228.6634380251494,
    hasRDI: true,
    daily: 92.24752680071856,
    unit: "mg"
    },
    {
    label: "Iron",
    tag: "FE",
    schemaOrgTag: null,
    total: 10.027593962805032,
    hasRDI: true,
    daily: 55.70885534891684,
    unit: "mg"
    },
    {
    label: "Zinc",
    tag: "ZN",
    schemaOrgTag: null,
    total: 3.0722765886702144,
    hasRDI: true,
    daily: 20.481843924468095,
    unit: "mg"
    },
    {
    label: "Phosphorus",
    tag: "P",
    schemaOrgTag: null,
    total: 973.1638690960413,
    hasRDI: true,
    daily: 139.02340987086305,
    unit: "mg"
    },
    {
    label: "Vitamin A",
    tag: "VITA_RAE",
    schemaOrgTag: null,
    total: 201.70171197880953,
    hasRDI: true,
    daily: 22.411301330978837,
    unit: "µg"
    },
    {
    label: "Vitamin C",
    tag: "VITC",
    schemaOrgTag: null,
    total: 115.67537118247911,
    hasRDI: true,
    daily: 192.79228530413184,
    unit: "mg"
    },
    {
    label: "Thiamin (B1)",
    tag: "THIA",
    schemaOrgTag: null,
    total: 4.88229505021392,
    hasRDI: true,
    daily: 325.486336680928,
    unit: "mg"
    },
    {
    label: "Riboflavin (B2)",
    tag: "RIBF",
    schemaOrgTag: null,
    total: 0.7979929569320823,
    hasRDI: true,
    daily: 46.940762172475424,
    unit: "mg"
    },
    {
    label: "Niacin (B3)",
    tag: "NIA",
    schemaOrgTag: null,
    total: 24.041508622022896,
    hasRDI: true,
    daily: 120.20754311011449,
    unit: "mg"
    },
    {
    label: "Vitamin B6",
    tag: "VITB6A",
    schemaOrgTag: null,
    total: 1.8508115661824869,
    hasRDI: true,
    daily: 92.54057830912434,
    unit: "mg"
    },
    {
    label: "Folate equivalent (total)",
    tag: "FOLDFE",
    schemaOrgTag: null,
    total: 211.38120859501285,
    hasRDI: true,
    daily: 52.84530214875322,
    unit: "µg"
    },
    {
    label: "Folate (food)",
    tag: "FOLFD",
    schemaOrgTag: null,
    total: 211.38120859501285,
    hasRDI: false,
    daily: 0,
    unit: "µg"
    },
    {
    label: "Folic acid",
    tag: "FOLAC",
    schemaOrgTag: null,
    total: 0,
    hasRDI: false,
    daily: 0,
    unit: "µg"
    },
    {
    label: "Vitamin B12",
    tag: "VITB12",
    schemaOrgTag: null,
    total: 7.1186447846504555,
    hasRDI: true,
    daily: 118.64407974417425,
    unit: "µg"
    },
    {
    label: "Vitamin D",
    tag: "VITD",
    schemaOrgTag: null,
    total: 13.950000000000001,
    hasRDI: true,
    daily: 3.4875,
    unit: "µg"
    },
    {
    label: "Vitamin E",
    tag: "TOCPHA",
    schemaOrgTag: null,
    total: 37.625771819322246,
    hasRDI: true,
    daily: 188.12885909661122,
    unit: "mg"
    },
    {
    label: "Vitamin K",
    tag: "VITK1",
    schemaOrgTag: null,
    total: 171.70932105390557,
    hasRDI: true,
    daily: 214.636651317382,
    unit: "µg"
    }
    ]
    },
    bookmarked: false,
    bought: false
    },
    {
    recipe: {
    uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_0ee607257f03d7dfa92c0e556d842fcd",
    label: "Fish In Parchment",
    image: "https://www.edamam.com/web-img/486/486efa8b581b771ccca7bf60f08bbb3c.jpg",
    source: "Leite's Culinaria",
    url: "http://leitesculinaria.com/81276/recipes-fish-in-parchment.html",
    shareAs: "http://www.edamam.com/recipe/fish-in-parchment-0ee607257f03d7dfa92c0e556d842fcd/fish",
    yield: 4,
    dietLabels: [
    "Low-Carb"
    ],
    healthLabels: [
    "Sugar-Conscious",
    "Peanut-Free",
    "Tree-Nut-Free"
    ],
    cautions: [ ],
    ingredientLines: [
    "1 scallion, trimmed and thinly sliced",
    "1 summer squash, trimmed and thinly sliced (about 1/4-inch thick)",
    "1 green zucchini, trimmed and thinly sliced (about 1/4-inch thick)",
    "2 ounces black olives, pitted and halved",
    "1 small bunch of basil",
    "Salt and freshly ground black pepper",
    "1 tablespoon olive oil",
    "3 fillets lemon sole (or other mild, delicate white fish, such as flounder), each skinned and cut into 4 portions",
    "1/4 cup (4 tablespoons) butter, cold, cut into small pieces",
    "3 tablespoons white wine"
    ],
    ingredients: [
    {
    text: "1 scallion, trimmed and thinly sliced",
    weight: 15
    },
    {
    text: "1 summer squash, trimmed and thinly sliced (about 1/4-inch thick)",
    weight: 196
    },
    {
    text: "1 green zucchini, trimmed and thinly sliced (about 1/4-inch thick)",
    weight: 196
    },
    {
    text: "2 ounces black olives, pitted and halved",
    weight: 56.69904625
    },
    {
    text: "1 small bunch of basil",
    weight: 37.5
    },
    {
    text: "Salt and freshly ground black pepper",
    weight: 6.6272942775
    },
    {
    text: "Salt and freshly ground black pepper",
    weight: 3.31364713875
    },
    {
    text: "1 tablespoon olive oil",
    weight: 13.5
    },
    {
    text: "3 fillets lemon sole (or other mild, delicate white fish, such as flounder), each skinned and cut into 4 portions",
    weight: 489
    },
    {
    text: "1/4 cup (4 tablespoons) butter, cold, cut into small pieces",
    weight: 56.75
    },
    {
    text: "3 tablespoons white wine",
    weight: 44.099999999999994
    }
    ],
    calories: 1056.3256575057624,
    totalWeight: 1109.6152459375305,
    totalTime: 0,
    totalNutrients: {
    ENERC_KCAL: {
    label: "Energy",
    quantity: 1056.3256575057624,
    unit: "kcal"
    },
    FAT: {
    label: "Fat",
    quantity: 76.37960803622325,
    unit: "g"
    },
    FASAT: {
    label: "Saturated",
    quantity: 34.2913824726089,
    unit: "g"
    },
    FATRN: {
    label: "Trans",
    quantity: 1.914055,
    unit: "g"
    },
    FAMS: {
    label: "Monounsaturated",
    quantity: 28.982181120555367,
    unit: "g"
    },
    FAPU: {
    label: "Polyunsaturated",
    quantity: 6.035741009782225,
    unit: "g"
    },
    CHOCDF: {
    label: "Carbs",
    quantity: 21.605437640480623,
    unit: "g"
    },
    FIBTG: {
    label: "Fiber",
    quantity: 7.75872220610375,
    unit: "g"
    },
    SUGAR: {
    label: "Sugars",
    quantity: 10.152617341688002,
    unit: "g"
    },
    PROCNT: {
    label: "Protein",
    quantity: 68.21765492621613,
    unit: "g"
    },
    CHOLE: {
    label: "Cholesterol",
    quantity: 342.0625,
    unit: "mg"
    },
    NA: {
    label: "Sodium",
    quantity: 2576.31253622167,
    unit: "mg"
    },
    CA: {
    label: "Calcium",
    quantity: 323.34423013636984,
    unit: "mg"
    },
    MG: {
    label: "Magnesium",
    quantity: 197.11682398275028,
    unit: "mg"
    },
    K: {
    label: "Potassium",
    quantity: 2053.28549837789,
    unit: "mg"
    },
    FE: {
    label: "Iron",
    quantity: 6.106777086833602,
    unit: "mg"
    },
    ZN: {
    label: "Zinc",
    quantity: 3.3925678552499057,
    unit: "mg"
    },
    P: {
    label: "Phosphorus",
    quantity: 1436.284533866725,
    unit: "mg"
    },
    VITA_RAE: {
    label: "Vitamin A",
    quantity: 595.0044939774625,
    unit: "µg"
    },
    VITC: {
    label: "Vitamin C",
    quantity: 78.48429141624999,
    unit: "mg"
    },
    THIA: {
    label: "Thiamin (B1)",
    quantity: 0.32118221029735,
    unit: "mg"
    },
    RIBF: {
    label: "Riboflavin (B2)",
    quantity: 0.63273456484975,
    unit: "mg"
    },
    NIA: {
    label: "Niacin (B3)",
    quantity: 7.4713966339084115,
    unit: "mg"
    },
    VITB6A: {
    label: "Vitamin B6",
    quantity: 1.3317531273362622,
    unit: "mg"
    },
    FOLDFE: {
    label: "Folate equivalent (total)",
    quantity: 166.13682001358745,
    unit: "µg"
    },
    FOLFD: {
    label: "Folate (food)",
    quantity: 166.13682001358745,
    unit: "µg"
    },
    VITB12: {
    label: "Vitamin B12",
    quantity: 5.622174999999999,
    unit: "µg"
    },
    VITD: {
    label: "Vitamin D",
    quantity: 14.543249999999999,
    unit: "µg"
    },
    TOCPHA: {
    label: "Vitamin E",
    quantity: 8.157446193368,
    unit: "mg"
    },
    VITK1: {
    label: "Vitamin K",
    quantity: 219.89112701363376,
    unit: "µg"
    }
    },
    totalDaily: {
    ENERC_KCAL: {
    label: "Energy",
    quantity: 52.81628287528812,
    unit: "%"
    },
    FAT: {
    label: "Fat",
    quantity: 117.5070892864973,
    unit: "%"
    },
    FASAT: {
    label: "Saturated",
    quantity: 171.45691236304452,
    unit: "%"
    },
    CHOCDF: {
    label: "Carbs",
    quantity: 7.201812546826874,
    unit: "%"
    },
    FIBTG: {
    label: "Fiber",
    quantity: 31.034888824415,
    unit: "%"
    },
    PROCNT: {
    label: "Protein",
    quantity: 136.43530985243225,
    unit: "%"
    },
    CHOLE: {
    label: "Cholesterol",
    quantity: 114.02083333333333,
    unit: "%"
    },
    NA: {
    label: "Sodium",
    quantity: 107.34635567590293,
    unit: "%"
    },
    CA: {
    label: "Calcium",
    quantity: 32.334423013636986,
    unit: "%"
    },
    MG: {
    label: "Magnesium",
    quantity: 49.27920599568757,
    unit: "%"
    },
    K: {
    label: "Potassium",
    quantity: 58.66529995365399,
    unit: "%"
    },
    FE: {
    label: "Iron",
    quantity: 33.926539371297785,
    unit: "%"
    },
    ZN: {
    label: "Zinc",
    quantity: 22.61711903499937,
    unit: "%"
    },
    P: {
    label: "Phosphorus",
    quantity: 205.18350483810357,
    unit: "%"
    },
    VITA_RAE: {
    label: "Vitamin A",
    quantity: 66.11161044194029,
    unit: "%"
    },
    VITC: {
    label: "Vitamin C",
    quantity: 130.80715236041664,
    unit: "%"
    },
    THIA: {
    label: "Thiamin (B1)",
    quantity: 21.412147353156666,
    unit: "%"
    },
    RIBF: {
    label: "Riboflavin (B2)",
    quantity: 37.21968028527941,
    unit: "%"
    },
    NIA: {
    label: "Niacin (B3)",
    quantity: 37.35698316954206,
    unit: "%"
    },
    VITB6A: {
    label: "Vitamin B6",
    quantity: 66.5876563668131,
    unit: "%"
    },
    FOLDFE: {
    label: "Folate equivalent (total)",
    quantity: 41.53420500339686,
    unit: "%"
    },
    VITB12: {
    label: "Vitamin B12",
    quantity: 93.70291666666664,
    unit: "%"
    },
    VITD: {
    label: "Vitamin D",
    quantity: 3.6358124999999997,
    unit: "%"
    },
    TOCPHA: {
    label: "Vitamin E",
    quantity: 40.78723096684,
    unit: "%"
    },
    VITK1: {
    label: "Vitamin K",
    quantity: 274.86390876704223,
    unit: "%"
    }
    },
    digest: [
    {
    label: "Fat",
    tag: "FAT",
    schemaOrgTag: "fatContent",
    total: 76.37960803622325,
    hasRDI: true,
    daily: 117.5070892864973,
    unit: "g",
    sub: [
    {
    label: "Saturated",
    tag: "FASAT",
    schemaOrgTag: "saturatedFatContent",
    total: 34.2913824726089,
    hasRDI: true,
    daily: 171.45691236304452,
    unit: "g"
    },
    {
    label: "Trans",
    tag: "FATRN",
    schemaOrgTag: "transFatContent",
    total: 1.914055,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Monounsaturated",
    tag: "FAMS",
    schemaOrgTag: null,
    total: 28.982181120555367,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Polyunsaturated",
    tag: "FAPU",
    schemaOrgTag: null,
    total: 6.035741009782225,
    hasRDI: false,
    daily: 0,
    unit: "g"
    }
    ]
    },
    {
    label: "Carbs",
    tag: "CHOCDF",
    schemaOrgTag: "carbohydrateContent",
    total: 21.605437640480623,
    hasRDI: true,
    daily: 7.201812546826874,
    unit: "g",
    sub: [
    {
    label: "Carbs (net)",
    tag: "CHOCDF.net",
    schemaOrgTag: null,
    total: 13.846715434376874,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Fiber",
    tag: "FIBTG",
    schemaOrgTag: "fiberContent",
    total: 7.75872220610375,
    hasRDI: true,
    daily: 31.034888824415,
    unit: "g"
    },
    {
    label: "Sugars",
    tag: "SUGAR",
    schemaOrgTag: "sugarContent",
    total: 10.152617341688002,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Sugars, added",
    tag: "SUGAR.added",
    schemaOrgTag: null,
    total: 0,
    hasRDI: false,
    daily: 0,
    unit: "g"
    }
    ]
    },
    {
    label: "Protein",
    tag: "PROCNT",
    schemaOrgTag: "proteinContent",
    total: 68.21765492621613,
    hasRDI: true,
    daily: 136.43530985243225,
    unit: "g"
    },
    {
    label: "Cholesterol",
    tag: "CHOLE",
    schemaOrgTag: "cholesterolContent",
    total: 342.0625,
    hasRDI: true,
    daily: 114.02083333333333,
    unit: "mg"
    },
    {
    label: "Sodium",
    tag: "NA",
    schemaOrgTag: "sodiumContent",
    total: 2576.31253622167,
    hasRDI: true,
    daily: 107.34635567590293,
    unit: "mg"
    },
    {
    label: "Calcium",
    tag: "CA",
    schemaOrgTag: null,
    total: 323.34423013636984,
    hasRDI: true,
    daily: 32.334423013636986,
    unit: "mg"
    },
    {
    label: "Magnesium",
    tag: "MG",
    schemaOrgTag: null,
    total: 197.11682398275028,
    hasRDI: true,
    daily: 49.27920599568757,
    unit: "mg"
    },
    {
    label: "Potassium",
    tag: "K",
    schemaOrgTag: null,
    total: 2053.28549837789,
    hasRDI: true,
    daily: 58.66529995365399,
    unit: "mg"
    },
    {
    label: "Iron",
    tag: "FE",
    schemaOrgTag: null,
    total: 6.106777086833602,
    hasRDI: true,
    daily: 33.926539371297785,
    unit: "mg"
    },
    {
    label: "Zinc",
    tag: "ZN",
    schemaOrgTag: null,
    total: 3.3925678552499057,
    hasRDI: true,
    daily: 22.61711903499937,
    unit: "mg"
    },
    {
    label: "Phosphorus",
    tag: "P",
    schemaOrgTag: null,
    total: 1436.284533866725,
    hasRDI: true,
    daily: 205.18350483810357,
    unit: "mg"
    },
    {
    label: "Vitamin A",
    tag: "VITA_RAE",
    schemaOrgTag: null,
    total: 595.0044939774625,
    hasRDI: true,
    daily: 66.11161044194029,
    unit: "µg"
    },
    {
    label: "Vitamin C",
    tag: "VITC",
    schemaOrgTag: null,
    total: 78.48429141624999,
    hasRDI: true,
    daily: 130.80715236041664,
    unit: "mg"
    },
    {
    label: "Thiamin (B1)",
    tag: "THIA",
    schemaOrgTag: null,
    total: 0.32118221029735,
    hasRDI: true,
    daily: 21.412147353156666,
    unit: "mg"
    },
    {
    label: "Riboflavin (B2)",
    tag: "RIBF",
    schemaOrgTag: null,
    total: 0.63273456484975,
    hasRDI: true,
    daily: 37.21968028527941,
    unit: "mg"
    },
    {
    label: "Niacin (B3)",
    tag: "NIA",
    schemaOrgTag: null,
    total: 7.4713966339084115,
    hasRDI: true,
    daily: 37.35698316954206,
    unit: "mg"
    },
    {
    label: "Vitamin B6",
    tag: "VITB6A",
    schemaOrgTag: null,
    total: 1.3317531273362622,
    hasRDI: true,
    daily: 66.5876563668131,
    unit: "mg"
    },
    {
    label: "Folate equivalent (total)",
    tag: "FOLDFE",
    schemaOrgTag: null,
    total: 166.13682001358745,
    hasRDI: true,
    daily: 41.53420500339686,
    unit: "µg"
    },
    {
    label: "Folate (food)",
    tag: "FOLFD",
    schemaOrgTag: null,
    total: 166.13682001358745,
    hasRDI: false,
    daily: 0,
    unit: "µg"
    },
    {
    label: "Folic acid",
    tag: "FOLAC",
    schemaOrgTag: null,
    total: 0,
    hasRDI: false,
    daily: 0,
    unit: "µg"
    },
    {
    label: "Vitamin B12",
    tag: "VITB12",
    schemaOrgTag: null,
    total: 5.622174999999999,
    hasRDI: true,
    daily: 93.70291666666664,
    unit: "µg"
    },
    {
    label: "Vitamin D",
    tag: "VITD",
    schemaOrgTag: null,
    total: 14.543249999999999,
    hasRDI: true,
    daily: 3.6358124999999997,
    unit: "µg"
    },
    {
    label: "Vitamin E",
    tag: "TOCPHA",
    schemaOrgTag: null,
    total: 8.157446193368,
    hasRDI: true,
    daily: 40.78723096684,
    unit: "mg"
    },
    {
    label: "Vitamin K",
    tag: "VITK1",
    schemaOrgTag: null,
    total: 219.89112701363376,
    hasRDI: true,
    daily: 274.86390876704223,
    unit: "µg"
    }
    ]
    },
    bookmarked: false,
    bought: false
    },
    {
    recipe: {
    uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_3cc0aeea0709f3d8c91984992529dce0",
    label: "How to Saute Fish",
    image: "https://www.edamam.com/web-img/5b0/5b03e74a5257172a689c73c8d6318f81.jpg",
    source: "Martha Stewart",
    url: "http://www.marthastewart.com/333242/how-to-saute-fish",
    shareAs: "http://www.edamam.com/recipe/how-to-saute-fish-3cc0aeea0709f3d8c91984992529dce0/fish",
    yield: 1,
    dietLabels: [
    "Low-Carb"
    ],
    healthLabels: [
    "Sugar-Conscious",
    "Peanut-Free",
    "Tree-Nut-Free",
    "Alcohol-Free"
    ],
    cautions: [ ],
    ingredientLines: [
    "Fish fillet (such as red snapper), skin on",
    "Coarse salt and freshly ground black pepper",
    "Olive oil"
    ],
    ingredients: [
    {
    text: "Fish fillet (such as red snapper), skin on",
    weight: 116
    },
    {
    text: "Coarse salt and freshly ground black pepper",
    weight: 0.6960000000000001
    },
    {
    text: "Coarse salt and freshly ground black pepper",
    weight: 0.34800000000000003
    },
    {
    text: "Olive oil",
    weight: 1.5776
    }
    ],
    calories: 267.43382399999996,
    totalWeight: 134.55130967853862,
    totalTime: 79,
    totalNutrients: {
    ENERC_KCAL: {
    label: "Energy",
    quantity: 267.43382399999996,
    unit: "kcal"
    },
    FAT: {
    label: "Fat",
    quantity: 19.5399448,
    unit: "g"
    },
    FASAT: {
    label: "Saturated",
    quantity: 3.1076594879999995,
    unit: "g"
    },
    FAMS: {
    label: "Monounsaturated",
    quantity: 13.389722646,
    unit: "g"
    },
    FAPU: {
    label: "Polyunsaturated",
    quantity: 2.272034058,
    unit: "g"
    },
    CHOCDF: {
    label: "Carbs",
    quantity: 0.22254600000000005,
    unit: "g"
    },
    FIBTG: {
    label: "Fiber",
    quantity: 0.08804400000000001,
    unit: "g"
    },
    SUGAR: {
    label: "Sugars",
    quantity: 0.0022272000000000004,
    unit: "g"
    },
    PROCNT: {
    label: "Protein",
    quantity: 23.328957199999998,
    unit: "g"
    },
    CHOLE: {
    label: "Cholesterol",
    quantity: 57.99999999999999,
    unit: "mg"
    },
    NA: {
    label: "Sodium",
    quantity: 311.392469208,
    unit: "mg"
    },
    CA: {
    label: "Calcium",
    quantity: 13.47241632284927,
    unit: "mg"
    },
    MG: {
    label: "Magnesium",
    quantity: 31.921547096785382,
    unit: "mg"
    },
    K: {
    label: "Potassium",
    quantity: 355.17222277428306,
    unit: "mg"
    },
    FE: {
    label: "Iron",
    quantity: 0.7838419019391776,
    unit: "mg"
    },
    ZN: {
    label: "Zinc",
    quantity: 0.3875879096785386,
    unit: "mg"
    },
    P: {
    label: "Phosphorus",
    quantity: 197.74983999999998,
    unit: "mg"
    },
    VITA_RAE: {
    label: "Vitamin A",
    quantity: 0.09396000000000002,
    unit: "µg"
    },
    THIA: {
    label: "Thiamin (B1)",
    quantity: 0.04793584,
    unit: "mg"
    },
    RIBF: {
    label: "Riboflavin (B2)",
    quantity: 0.07370639999999999,
    unit: "mg"
    },
    NIA: {
    label: "Niacin (B3)",
    quantity: 4.531457639999999,
    unit: "mg"
    },
    VITB6A: {
    label: "Vitamin B6",
    quantity: 0.18893268,
    unit: "mg"
    },
    FOLDFE: {
    label: "Folate equivalent (total)",
    quantity: 27.899159999999995,
    unit: "µg"
    },
    FOLFD: {
    label: "Folate (food)",
    quantity: 27.899159999999995,
    unit: "µg"
    },
    VITB12: {
    label: "Vitamin B12",
    quantity: 1.8328,
    unit: "µg"
    },
    VITD: {
    label: "Vitamin D",
    quantity: 3.5959999999999996,
    unit: "µg"
    },
    TOCPHA: {
    label: "Vitamin E",
    quantity: 2.9869913,
    unit: "mg"
    },
    VITK1: {
    label: "Vitamin K",
    quantity: 12.7627492,
    unit: "µg"
    }
    },
    totalDaily: {
    ENERC_KCAL: {
    label: "Energy",
    quantity: 13.371691199999997,
    unit: "%"
    },
    FAT: {
    label: "Fat",
    quantity: 30.06145353846154,
    unit: "%"
    },
    FASAT: {
    label: "Saturated",
    quantity: 15.538297439999997,
    unit: "%"
    },
    CHOCDF: {
    label: "Carbs",
    quantity: 0.07418200000000001,
    unit: "%"
    },
    FIBTG: {
    label: "Fiber",
    quantity: 0.35217600000000004,
    unit: "%"
    },
    PROCNT: {
    label: "Protein",
    quantity: 46.6579144,
    unit: "%"
    },
    CHOLE: {
    label: "Cholesterol",
    quantity: 19.33333333333333,
    unit: "%"
    },
    NA: {
    label: "Sodium",
    quantity: 12.974686217000002,
    unit: "%"
    },
    CA: {
    label: "Calcium",
    quantity: 1.347241632284927,
    unit: "%"
    },
    MG: {
    label: "Magnesium",
    quantity: 7.980386774196345,
    unit: "%"
    },
    K: {
    label: "Potassium",
    quantity: 10.147777793550945,
    unit: "%"
    },
    FE: {
    label: "Iron",
    quantity: 4.3546772329954315,
    unit: "%"
    },
    ZN: {
    label: "Zinc",
    quantity: 2.583919397856924,
    unit: "%"
    },
    P: {
    label: "Phosphorus",
    quantity: 28.249977142857137,
    unit: "%"
    },
    VITA_RAE: {
    label: "Vitamin A",
    quantity: 0.010440000000000001,
    unit: "%"
    },
    THIA: {
    label: "Thiamin (B1)",
    quantity: 3.1957226666666667,
    unit: "%"
    },
    RIBF: {
    label: "Riboflavin (B2)",
    quantity: 4.335670588235294,
    unit: "%"
    },
    NIA: {
    label: "Niacin (B3)",
    quantity: 22.657288199999996,
    unit: "%"
    },
    VITB6A: {
    label: "Vitamin B6",
    quantity: 9.446634,
    unit: "%"
    },
    FOLDFE: {
    label: "Folate equivalent (total)",
    quantity: 6.974789999999998,
    unit: "%"
    },
    VITB12: {
    label: "Vitamin B12",
    quantity: 30.546666666666667,
    unit: "%"
    },
    VITD: {
    label: "Vitamin D",
    quantity: 0.8989999999999999,
    unit: "%"
    },
    TOCPHA: {
    label: "Vitamin E",
    quantity: 14.934956500000002,
    unit: "%"
    },
    VITK1: {
    label: "Vitamin K",
    quantity: 15.9534365,
    unit: "%"
    }
    },
    digest: [
    {
    label: "Fat",
    tag: "FAT",
    schemaOrgTag: "fatContent",
    total: 19.5399448,
    hasRDI: true,
    daily: 30.06145353846154,
    unit: "g",
    sub: [
    {
    label: "Saturated",
    tag: "FASAT",
    schemaOrgTag: "saturatedFatContent",
    total: 3.1076594879999995,
    hasRDI: true,
    daily: 15.538297439999997,
    unit: "g"
    },
    {
    label: "Trans",
    tag: "FATRN",
    schemaOrgTag: "transFatContent",
    total: 0,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Monounsaturated",
    tag: "FAMS",
    schemaOrgTag: null,
    total: 13.389722646,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Polyunsaturated",
    tag: "FAPU",
    schemaOrgTag: null,
    total: 2.272034058,
    hasRDI: false,
    daily: 0,
    unit: "g"
    }
    ]
    },
    {
    label: "Carbs",
    tag: "CHOCDF",
    schemaOrgTag: "carbohydrateContent",
    total: 0.22254600000000005,
    hasRDI: true,
    daily: 0.07418200000000001,
    unit: "g",
    sub: [
    {
    label: "Carbs (net)",
    tag: "CHOCDF.net",
    schemaOrgTag: null,
    total: 0.13450200000000004,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Fiber",
    tag: "FIBTG",
    schemaOrgTag: "fiberContent",
    total: 0.08804400000000001,
    hasRDI: true,
    daily: 0.35217600000000004,
    unit: "g"
    },
    {
    label: "Sugars",
    tag: "SUGAR",
    schemaOrgTag: "sugarContent",
    total: 0.0022272000000000004,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Sugars, added",
    tag: "SUGAR.added",
    schemaOrgTag: null,
    total: 0,
    hasRDI: false,
    daily: 0,
    unit: "g"
    }
    ]
    },
    {
    label: "Protein",
    tag: "PROCNT",
    schemaOrgTag: "proteinContent",
    total: 23.328957199999998,
    hasRDI: true,
    daily: 46.6579144,
    unit: "g"
    },
    {
    label: "Cholesterol",
    tag: "CHOLE",
    schemaOrgTag: "cholesterolContent",
    total: 57.99999999999999,
    hasRDI: true,
    daily: 19.33333333333333,
    unit: "mg"
    },
    {
    label: "Sodium",
    tag: "NA",
    schemaOrgTag: "sodiumContent",
    total: 311.392469208,
    hasRDI: true,
    daily: 12.974686217000002,
    unit: "mg"
    },
    {
    label: "Calcium",
    tag: "CA",
    schemaOrgTag: null,
    total: 13.47241632284927,
    hasRDI: true,
    daily: 1.347241632284927,
    unit: "mg"
    },
    {
    label: "Magnesium",
    tag: "MG",
    schemaOrgTag: null,
    total: 31.921547096785382,
    hasRDI: true,
    daily: 7.980386774196345,
    unit: "mg"
    },
    {
    label: "Potassium",
    tag: "K",
    schemaOrgTag: null,
    total: 355.17222277428306,
    hasRDI: true,
    daily: 10.147777793550945,
    unit: "mg"
    },
    {
    label: "Iron",
    tag: "FE",
    schemaOrgTag: null,
    total: 0.7838419019391776,
    hasRDI: true,
    daily: 4.3546772329954315,
    unit: "mg"
    },
    {
    label: "Zinc",
    tag: "ZN",
    schemaOrgTag: null,
    total: 0.3875879096785386,
    hasRDI: true,
    daily: 2.583919397856924,
    unit: "mg"
    },
    {
    label: "Phosphorus",
    tag: "P",
    schemaOrgTag: null,
    total: 197.74983999999998,
    hasRDI: true,
    daily: 28.249977142857137,
    unit: "mg"
    },
    {
    label: "Vitamin A",
    tag: "VITA_RAE",
    schemaOrgTag: null,
    total: 0.09396000000000002,
    hasRDI: true,
    daily: 0.010440000000000001,
    unit: "µg"
    },
    {
    label: "Vitamin C",
    tag: "VITC",
    schemaOrgTag: null,
    total: 0,
    hasRDI: false,
    daily: 0,
    unit: "mg"
    },
    {
    label: "Thiamin (B1)",
    tag: "THIA",
    schemaOrgTag: null,
    total: 0.04793584,
    hasRDI: true,
    daily: 3.1957226666666667,
    unit: "mg"
    },
    {
    label: "Riboflavin (B2)",
    tag: "RIBF",
    schemaOrgTag: null,
    total: 0.07370639999999999,
    hasRDI: true,
    daily: 4.335670588235294,
    unit: "mg"
    },
    {
    label: "Niacin (B3)",
    tag: "NIA",
    schemaOrgTag: null,
    total: 4.531457639999999,
    hasRDI: true,
    daily: 22.657288199999996,
    unit: "mg"
    },
    {
    label: "Vitamin B6",
    tag: "VITB6A",
    schemaOrgTag: null,
    total: 0.18893268,
    hasRDI: true,
    daily: 9.446634,
    unit: "mg"
    },
    {
    label: "Folate equivalent (total)",
    tag: "FOLDFE",
    schemaOrgTag: null,
    total: 27.899159999999995,
    hasRDI: true,
    daily: 6.974789999999998,
    unit: "µg"
    },
    {
    label: "Folate (food)",
    tag: "FOLFD",
    schemaOrgTag: null,
    total: 27.899159999999995,
    hasRDI: false,
    daily: 0,
    unit: "µg"
    },
    {
    label: "Folic acid",
    tag: "FOLAC",
    schemaOrgTag: null,
    total: 0,
    hasRDI: false,
    daily: 0,
    unit: "µg"
    },
    {
    label: "Vitamin B12",
    tag: "VITB12",
    schemaOrgTag: null,
    total: 1.8328,
    hasRDI: true,
    daily: 30.546666666666667,
    unit: "µg"
    },
    {
    label: "Vitamin D",
    tag: "VITD",
    schemaOrgTag: null,
    total: 3.5959999999999996,
    hasRDI: true,
    daily: 0.8989999999999999,
    unit: "µg"
    },
    {
    label: "Vitamin E",
    tag: "TOCPHA",
    schemaOrgTag: null,
    total: 2.9869913,
    hasRDI: true,
    daily: 14.934956500000002,
    unit: "mg"
    },
    {
    label: "Vitamin K",
    tag: "VITK1",
    schemaOrgTag: null,
    total: 12.7627492,
    hasRDI: true,
    daily: 15.9534365,
    unit: "µg"
    }
    ]
    },
    bookmarked: false,
    bought: false
    },
    {
    recipe: {
    uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_f409975af3c0902fbb9f0a6a95336e0a",
    label: "Fish Stock",
    image: "https://www.edamam.com/web-img/b88/b88b913b87c58a952d15b04b2a4909c0.jpg",
    source: "Cookstr",
    url: "http://www.cookstr.com/recipes/fish-stock-4",
    shareAs: "http://www.edamam.com/recipe/fish-stock-f409975af3c0902fbb9f0a6a95336e0a/fish",
    yield: 3,
    dietLabels: [
    "High-Protein",
    "Low-Carb"
    ],
    healthLabels: [
    "Sugar-Conscious",
    "Peanut-Free",
    "Tree-Nut-Free"
    ],
    cautions: [ ],
    ingredientLines: [
    "¼ pound mushrooms , light parts only, sliced (optional, see Notes)",
    "10 sprigs parsley",
    "2 tablespoons butter",
    "¾ cup dry white wine",
    "3 cups water",
    "2 pounds fish bones and heads (avoid oily, strong-flavored fish such as mackerel and bluefish)",
    "1 onion , sliced"
    ],
    ingredients: [
    {
    text: "¼ pound mushrooms , light parts only, sliced (optional, see Notes)",
    weight: 113.3980925
    },
    {
    text: "10 sprigs parsley",
    weight: 10
    },
    {
    text: "2 tablespoons butter",
    weight: 28.4
    },
    {
    text: "¾ cup dry white wine",
    weight: 110.25
    },
    {
    text: "3 cups water",
    weight: 711
    },
    {
    text: "2 pounds fish bones and heads (avoid oily, strong-flavored fish such as mackerel and bluefish)",
    weight: 907.18474
    },
    {
    text: "2 pounds fish bones and heads (avoid oily, strong-flavored fish such as mackerel and bluefish)",
    weight: 0
    },
    {
    text: "2 pounds fish bones and heads (avoid oily, strong-flavored fish such as mackerel and bluefish)",
    weight: 0
    },
    {
    text: "1 onion , sliced",
    weight: 125
    }
    ],
    calories: 87.84087631,
    totalWeight: 656.1193133,
    totalTime: 0,
    totalNutrients: {
    ENERC_KCAL: {
    label: "Energy",
    quantity: 87.84087631,
    unit: "kcal"
    },
    FAT: {
    label: "Fat",
    quantity: 3.8116955189799997,
    unit: "g"
    },
    FASAT: {
    label: "Saturated",
    quantity: 0.5884364418499999,
    unit: "g"
    },
    FATRN: {
    label: "Trans",
    quantity: 0.03723807999999999,
    unit: "g"
    },
    FAMS: {
    label: "Monounsaturated",
    quantity: 0.24062855999999996,
    unit: "g"
    },
    FAPU: {
    label: "Polyunsaturated",
    quantity: 0.043171957920000004,
    unit: "g"
    },
    CHOCDF: {
    label: "Carbs",
    quantity: 0.75553271262,
    unit: "g"
    },
    FIBTG: {
    label: "Fiber",
    quantity: 0.143559237,
    unit: "g"
    },
    SUGAR: {
    label: "Sugars",
    quantity: 0.34822888926000006,
    unit: "g"
    },
    PROCNT: {
    label: "Protein",
    quantity: 11.976897272730001,
    unit: "g"
    },
    CHOLE: {
    label: "Cholesterol",
    quantity: 2.4423999999999997,
    unit: "mg"
    },
    NA: {
    label: "Sodium",
    quantity: 242.894593785,
    unit: "mg"
    },
    CA: {
    label: "Calcium",
    quantity: 9019.910738511,
    unit: "mg"
    },
    MG: {
    label: "Magnesium",
    quantity: 134.62131673300001,
    unit: "mg"
    },
    K: {
    label: "Potassium",
    quantity: 110.804973446,
    unit: "mg"
    },
    FE: {
    label: "Iron",
    quantity: 0.7595742209,
    unit: "mg"
    },
    ZN: {
    label: "Zinc",
    quantity: 2.2077848000400007,
    unit: "mg"
    },
    P: {
    label: "Phosphorus",
    quantity: 6538.379462382,
    unit: "mg"
    },
    VITA_RAE: {
    label: "Vitamin A",
    quantity: 9.454239999999999,
    unit: "µg"
    },
    VITC: {
    label: "Vitamin C",
    quantity: 0.9972543977000001,
    unit: "mg"
    },
    THIA: {
    label: "Thiamin (B1)",
    quantity: 0.006595398197,
    unit: "mg"
    },
    RIBF: {
    label: "Riboflavin (B2)",
    quantity: 0.021024153274,
    unit: "mg"
    },
    NIA: {
    label: "Niacin (B3)",
    quantity: 0.17990268785900004,
    unit: "mg"
    },
    VITB6A: {
    label: "Vitamin B6",
    quantity: 0.013316440648,
    unit: "mg"
    },
    FOLDFE: {
    label: "Folate equivalent (total)",
    quantity: 2.407287029,
    unit: "µg"
    },
    FOLFD: {
    label: "Folate (food)",
    quantity: 2.407287029,
    unit: "µg"
    },
    VITB12: {
    label: "Vitamin B12",
    quantity: 0.00374556948,
    unit: "µg"
    },
    VITD: {
    label: "Vitamin D",
    quantity: 0.0261118474,
    unit: "µg"
    },
    TOCPHA: {
    label: "Vitamin E",
    quantity: 0.030808792369999997,
    unit: "mg"
    },
    VITK1: {
    label: "Vitamin K",
    quantity: 6.67716,
    unit: "µg"
    }
    },
    totalDaily: {
    ENERC_KCAL: {
    label: "Energy",
    quantity: 4.3920438155,
    unit: "%"
    },
    FAT: {
    label: "Fat",
    quantity: 5.864146952276922,
    unit: "%"
    },
    FASAT: {
    label: "Saturated",
    quantity: 2.9421822092499994,
    unit: "%"
    },
    CHOCDF: {
    label: "Carbs",
    quantity: 0.25184423753999996,
    unit: "%"
    },
    FIBTG: {
    label: "Fiber",
    quantity: 0.574236948,
    unit: "%"
    },
    PROCNT: {
    label: "Protein",
    quantity: 23.953794545460006,
    unit: "%"
    },
    CHOLE: {
    label: "Cholesterol",
    quantity: 0.8141333333333333,
    unit: "%"
    },
    NA: {
    label: "Sodium",
    quantity: 10.120608074375,
    unit: "%"
    },
    CA: {
    label: "Calcium",
    quantity: 901.9910738511,
    unit: "%"
    },
    MG: {
    label: "Magnesium",
    quantity: 33.655329183250004,
    unit: "%"
    },
    K: {
    label: "Potassium",
    quantity: 3.1658563841714287,
    unit: "%"
    },
    FE: {
    label: "Iron",
    quantity: 4.219856782777779,
    unit: "%"
    },
    ZN: {
    label: "Zinc",
    quantity: 14.718565333600004,
    unit: "%"
    },
    P: {
    label: "Phosphorus",
    quantity: 934.0542089117143,
    unit: "%"
    },
    VITA_RAE: {
    label: "Vitamin A",
    quantity: 1.050471111111111,
    unit: "%"
    },
    VITC: {
    label: "Vitamin C",
    quantity: 1.6620906628333334,
    unit: "%"
    },
    THIA: {
    label: "Thiamin (B1)",
    quantity: 0.4396932131333333,
    unit: "%"
    },
    RIBF: {
    label: "Riboflavin (B2)",
    quantity: 1.2367148984705882,
    unit: "%"
    },
    NIA: {
    label: "Niacin (B3)",
    quantity: 0.8995134392950002,
    unit: "%"
    },
    VITB6A: {
    label: "Vitamin B6",
    quantity: 0.6658220323999999,
    unit: "%"
    },
    FOLDFE: {
    label: "Folate equivalent (total)",
    quantity: 0.60182175725,
    unit: "%"
    },
    VITB12: {
    label: "Vitamin B12",
    quantity: 0.062426158,
    unit: "%"
    },
    VITD: {
    label: "Vitamin D",
    quantity: 0.006527961849999999,
    unit: "%"
    },
    TOCPHA: {
    label: "Vitamin E",
    quantity: 0.15404396184999997,
    unit: "%"
    },
    VITK1: {
    label: "Vitamin K",
    quantity: 8.34645,
    unit: "%"
    }
    },
    digest: [
    {
    label: "Fat",
    tag: "FAT",
    schemaOrgTag: "fatContent",
    total: 3.8116955189799997,
    hasRDI: true,
    daily: 5.864146952276922,
    unit: "g",
    sub: [
    {
    label: "Saturated",
    tag: "FASAT",
    schemaOrgTag: "saturatedFatContent",
    total: 0.5884364418499999,
    hasRDI: true,
    daily: 2.9421822092499994,
    unit: "g"
    },
    {
    label: "Trans",
    tag: "FATRN",
    schemaOrgTag: "transFatContent",
    total: 0.03723807999999999,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Monounsaturated",
    tag: "FAMS",
    schemaOrgTag: null,
    total: 0.24062855999999996,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Polyunsaturated",
    tag: "FAPU",
    schemaOrgTag: null,
    total: 0.043171957920000004,
    hasRDI: false,
    daily: 0,
    unit: "g"
    }
    ]
    },
    {
    label: "Carbs",
    tag: "CHOCDF",
    schemaOrgTag: "carbohydrateContent",
    total: 0.75553271262,
    hasRDI: true,
    daily: 0.25184423753999996,
    unit: "g",
    sub: [
    {
    label: "Carbs (net)",
    tag: "CHOCDF.net",
    schemaOrgTag: null,
    total: 0.6119734756199999,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Fiber",
    tag: "FIBTG",
    schemaOrgTag: "fiberContent",
    total: 0.143559237,
    hasRDI: true,
    daily: 0.574236948,
    unit: "g"
    },
    {
    label: "Sugars",
    tag: "SUGAR",
    schemaOrgTag: "sugarContent",
    total: 0.34822888926000006,
    hasRDI: false,
    daily: 0,
    unit: "g"
    },
    {
    label: "Sugars, added",
    tag: "SUGAR.added",
    schemaOrgTag: null,
    total: 0,
    hasRDI: false,
    daily: 0,
    unit: "g"
    }
    ]
    },
    {
    label: "Protein",
    tag: "PROCNT",
    schemaOrgTag: "proteinContent",
    total: 11.976897272730001,
    hasRDI: true,
    daily: 23.953794545460006,
    unit: "g"
    },
    {
    label: "Cholesterol",
    tag: "CHOLE",
    schemaOrgTag: "cholesterolContent",
    total: 2.4423999999999997,
    hasRDI: true,
    daily: 0.8141333333333333,
    unit: "mg"
    },
    {
    label: "Sodium",
    tag: "NA",
    schemaOrgTag: "sodiumContent",
    total: 242.894593785,
    hasRDI: true,
    daily: 10.120608074375,
    unit: "mg"
    },
    {
    label: "Calcium",
    tag: "CA",
    schemaOrgTag: null,
    total: 9019.910738511,
    hasRDI: true,
    daily: 901.9910738511,
    unit: "mg"
    },
    {
    label: "Magnesium",
    tag: "MG",
    schemaOrgTag: null,
    total: 134.62131673300001,
    hasRDI: true,
    daily: 33.655329183250004,
    unit: "mg"
    },
    {
    label: "Potassium",
    tag: "K",
    schemaOrgTag: null,
    total: 110.804973446,
    hasRDI: true,
    daily: 3.1658563841714287,
    unit: "mg"
    },
    {
    label: "Iron",
    tag: "FE",
    schemaOrgTag: null,
    total: 0.7595742209,
    hasRDI: true,
    daily: 4.219856782777779,
    unit: "mg"
    },
    {
    label: "Zinc",
    tag: "ZN",
    schemaOrgTag: null,
    total: 2.2077848000400007,
    hasRDI: true,
    daily: 14.718565333600004,
    unit: "mg"
    },
    {
    label: "Phosphorus",
    tag: "P",
    schemaOrgTag: null,
    total: 6538.379462382,
    hasRDI: true,
    daily: 934.0542089117143,
    unit: "mg"
    },
    {
    label: "Vitamin A",
    tag: "VITA_RAE",
    schemaOrgTag: null,
    total: 9.454239999999999,
    hasRDI: true,
    daily: 1.050471111111111,
    unit: "µg"
    },
    {
    label: "Vitamin C",
    tag: "VITC",
    schemaOrgTag: null,
    total: 0.9972543977000001,
    hasRDI: true,
    daily: 1.6620906628333334,
    unit: "mg"
    },
    {
    label: "Thiamin (B1)",
    tag: "THIA",
    schemaOrgTag: null,
    total: 0.006595398197,
    hasRDI: true,
    daily: 0.4396932131333333,
    unit: "mg"
    },
    {
    label: "Riboflavin (B2)",
    tag: "RIBF",
    schemaOrgTag: null,
    total: 0.021024153274,
    hasRDI: true,
    daily: 1.2367148984705882,
    unit: "mg"
    },
    {
    label: "Niacin (B3)",
    tag: "NIA",
    schemaOrgTag: null,
    total: 0.17990268785900004,
    hasRDI: true,
    daily: 0.8995134392950002,
    unit: "mg"
    },
    {
    label: "Vitamin B6",
    tag: "VITB6A",
    schemaOrgTag: null,
    total: 0.013316440648,
    hasRDI: true,
    daily: 0.6658220323999999,
    unit: "mg"
    },
    {
    label: "Folate equivalent (total)",
    tag: "FOLDFE",
    schemaOrgTag: null,
    total: 2.407287029,
    hasRDI: true,
    daily: 0.60182175725,
    unit: "µg"
    },
    {
    label: "Folate (food)",
    tag: "FOLFD",
    schemaOrgTag: null,
    total: 2.407287029,
    hasRDI: false,
    daily: 0,
    unit: "µg"
    },
    {
    label: "Folic acid",
    tag: "FOLAC",
    schemaOrgTag: null,
    total: 0,
    hasRDI: false,
    daily: 0,
    unit: "µg"
    },
    {
    label: "Vitamin B12",
    tag: "VITB12",
    schemaOrgTag: null,
    total: 0.00374556948,
    hasRDI: true,
    daily: 0.062426158,
    unit: "µg"
    },
    {
    label: "Vitamin D",
    tag: "VITD",
    schemaOrgTag: null,
    total: 0.0261118474,
    hasRDI: true,
    daily: 0.006527961849999999,
    unit: "µg"
    },
    {
    label: "Vitamin E",
    tag: "TOCPHA",
    schemaOrgTag: null,
    total: 0.030808792369999997,
    hasRDI: true,
    daily: 0.15404396184999997,
    unit: "mg"
    },
    {
    label: "Vitamin K",
    tag: "VITK1",
    schemaOrgTag: null,
    total: 6.67716,
    hasRDI: true,
    daily: 8.34645,
    unit: "µg"
    }
    ]
    },
    bookmarked: false,
    bought: false
    }
    ]
    };

//recipTitle function test
test('reaserch title', function(t) {
  const titleActual = logic[0](filtered_response);
  t.deepEqual(titleActual, titleExpected, 'should return titles');
  t.end();
});
 //filered responseAPI1 function
test('filteredResponse function', function(t){
  const actual = logic[1](responseAPI1);
  const expected = [{ title: 'Baked Omelet With Broccoli &amp; Tomato', href: 'http://www.recipezaar.com/Baked-Omelet-With-Broccoli-Tomato-325014', ingredients: 'milk, cottage cheese, broccoli, cheddar cheese, basil, onion powder, eggs, garlic powder, roma tomato, salt', thumbnail: 'http://img.recipepuppy.com/123889.jpg' }, { title: 'Light Italian Feta Omelet', href: 'http://www.recipezaar.com/Light-Italian-Feta-Omelet-281901', ingredients: 'egg substitute, feta cheese, basil, roma tomato, salt', thumbnail: 'http://img.recipepuppy.com/36027.jpg' }, { title: 'Blue Cheese Omelet', href: 'http://www.recipezaar.com/Blue-Cheese-Omelet-81266', ingredients: 'blue cheese, butter, cinnamon, eggs, black pepper, salt, apple, walnut, water', thumbnail: 'http://img.recipepuppy.com/177663.jpg' }, { title: 'Vegan Omelet For One Recipe', href: 'http://www.grouprecipes.com/18772/vegan-omelet-for-one.html', ingredients: 'salt, chipotle pepper, yeast, onion powder, potato starch, soy milk, tahini, turmeric', thumbnail: 'http://img.recipepuppy.com/328574.jpg' }];
  t.deepEquals(actual, expected, 'should return the result that have thumbnails');
  t.end();
});

test('recipes pictures', function(t){
  const actual = logic[2](filtered_response);
  const expected = [ '', '', 'http://img.recipepuppy.com/152332.jpg', 'http://img.recipepuppy.com/623733.jpg', '', '', '', '', 'http://img.recipepuppy.com/8938.jpg', 'http://img.recipepuppy.com/34541.jpg' ];
  t.deepEquals(actual, expected, 'should return list of thumbnails url');
  t.end();
});

test('another recipes', function(t){
  const actual = logic[3](responseAPI2);
  const expected =  [ 'http://www.seriouseats.com/recipes/2011/03/deep-fried-fish-bones-recipe.html', 'http://norecipes.com/fish-veracruz-recipe-pescado-veracruzana', 'http://www.saveur.com/article/Recipes/Burnt-Scallion-Fish', 'http://www.bbcgoodfood.com/recipes/4328/', 'http://leitesculinaria.com/81276/recipes-fish-in-parchment.html', 'http://www.marthastewart.com/333242/how-to-saute-fish', 'http://www.cookstr.com/recipes/fish-stock-4' ];
  t.deepEquals(actual, expected, 'should return list of thumbnails url');
  t.end();
});
