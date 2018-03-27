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
  var actual = logic(response);
  var expected = "https://pixabay.com/get/ea35b70f28fd023ed1584d05fb1d4790e076e7d610ac104497f2c07da3eab2bc_1280.jpg";
  t.equal(actual, expected);
  t.end();
});
