var test = require('tape');
var logic = require('./logic.js');

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
  const ingredientsExpected = [ 'chicken, brown sugar, cayenne, garlic salt, green pepper, honey, italian cheese blend, salad dressing, margarine, molasses, onions, barbecue sauce, black pepper, prepared pizza crust, provolone cheese, ranch dressing, salt',
        'pizza, vegetable oil, cornmeal, water, flour, sausage, provolone cheese, olive oil, tomato, yeast, pepperoni, salt, salt, sugar, basil, oregano',
        'barbecue sauce, cheddar cheese, onions, tomato, dill pickle, dill relish, parsley, french dressing, garlic powder, ground beef, lettuce, mayonnaise, mozzarella cheese, pizza dough, mustard',
        'brown sugar, garlic powder, italian seasoning, olive oil, onion powder, salt, flour, water, flour, yeast',
        'bacon, black pepper, cheddar cheese, garlic, ground beef, mozzarella cheese, onions, parmesan cheese, pizza sauce, salt',
        'butter, cinnamon, pizza dough, sugar',
        'mozzarella cheese, nonstick cooking spray, pizza sauce, tortilla, pepperoni',
        'garlic, escarole, mozzarella cheese, olive oil, pizza sauce, salt',
        'arugula, garlic, olive oil, pesto, roma tomato, pizza crust',
        'bread flour, yeast, olive oil, salt, sugar, water, water' ]
        ;
//recipInfo function test
test('reaserch title', function(t) {
  const titleActual = logic[0](filtered_response);
  t.deepEqual(titleActual, titleExpected, 'should return titles');
  t.end();

});

test('reaserch ingredients', function(t) {
  const ingredientsActual = logic[1](filtered_response);
  t.deepEqual(ingredientsActual, ingredientsExpected, 'should return ingredients');
  t.end();

});


test('filteredResponse function', function(t){
  const response = {
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
  }
  const actual = logic[2](response);
  const expected = [{ title: 'Baked Omelet With Broccoli &amp; Tomato', href: 'http://www.recipezaar.com/Baked-Omelet-With-Broccoli-Tomato-325014', ingredients: 'milk, cottage cheese, broccoli, cheddar cheese, basil, onion powder, eggs, garlic powder, roma tomato, salt', thumbnail: 'http://img.recipepuppy.com/123889.jpg' }, { title: 'Light Italian Feta Omelet', href: 'http://www.recipezaar.com/Light-Italian-Feta-Omelet-281901', ingredients: 'egg substitute, feta cheese, basil, roma tomato, salt', thumbnail: 'http://img.recipepuppy.com/36027.jpg' }, { title: 'Blue Cheese Omelet', href: 'http://www.recipezaar.com/Blue-Cheese-Omelet-81266', ingredients: 'blue cheese, butter, cinnamon, eggs, black pepper, salt, apple, walnut, water', thumbnail: 'http://img.recipepuppy.com/177663.jpg' }, { title: 'Vegan Omelet For One Recipe', href: 'http://www.grouprecipes.com/18772/vegan-omelet-for-one.html', ingredients: 'salt, chipotle pepper, yeast, onion powder, potato starch, soy milk, tahini, turmeric', thumbnail: 'http://img.recipepuppy.com/328574.jpg' }];
  t.deepEquals(actual, expected, 'should return the result that have thumbnails');
  t.end();
});

test('ingr fun', function(t) {
  var response = {
                  totalHits: 500,
                  hits: [
                  {
                  largeImageURL: "https://pixabay.com/get/ea35b70f28fd023ed1584d05fb1d4790e076e7d610ac104497f2c07da3eab2bc_1280.jpg",
                  webformatHeight: 426,
                  webformatWidth: 640,
                  likes: 355,
                  imageWidth: 7626,
                  id: 3060093,
                  user_id: 7201644,
                  views: 98461,
                  comments: 46,
                  pageURL: "https://pixabay.com/en/salt-hon-khoi-vietnam-field-3060093/",
                  imageHeight: 5087,
                  webformatURL: "https://pixabay.com/get/ea35b70f28fd023ed1584d05fb1d4790e076e7d610ac104497f2c07da3eab2bc_640.jpg",
                  type: "photo",
                  previewHeight: 99,
                  tags: "salt, hon khoi, vietnam",
                  downloads: 63763,
                  user: "Quangpraha",
                  favorites: 261,
                  imageSize: 6830647,
                  previewWidth: 150,
                  userImageURL: "https://cdn.pixabay.com/user/2017/11/28/12-45-12-473_250x250.jpg",
                  previewURL: "https://cdn.pixabay.com/photo/2018/01/04/07/59/salt-3060093_150.jpg"
                }]};
  var actual = logic[3](response);
  var expected = "https://pixabay.com/get/ea35b70f28fd023ed1584d05fb1d4790e076e7d610ac104497f2c07da3eab2bc_1280.jpg";
  t.equal(actual, expected);
  t.end();
});
