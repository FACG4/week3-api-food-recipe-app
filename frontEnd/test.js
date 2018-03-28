var test = require('tape');
var logic = require('./logic.js');

var response ={
title: "Recipe Puppy",
version: 0.1,
href: "http://www.recipepuppy.com/",
results: [
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
]
};

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
  const titleActual = logic[0](response);
  t.deepEqual(titleActual, titleExpected, 'should return titles');
  t.end();

});

test('reaserch ingredients', function(t) {
  const ingredientsActual = logic[1](response);
  t.deepEqual(ingredientsActual, ingredientsExpected, 'should return ingredients');
  t.end();

});
