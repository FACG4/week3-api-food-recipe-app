var test = require('tape');
var logic = require('./logic');

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