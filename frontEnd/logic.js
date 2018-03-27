

//function return the title of recipes from the api
function recipTitle(response) {
  var titleArr = [];
  for (let i of response.results) {
    titleArr.push(i.title);
  }
  return titleArr;
};

//function return the ingredients of recipes from the api
function recipIngredients(response) {
  var ingredientsArr = [];
  for (let i of response.results) {
    ingredientsArr.push(i.ingredients);
  }
  return ingredientsArr;
};

function fetch(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      callback(response);
    }
  }
  xhr.open('GET', url)
  xhr.send();
};

// ramy and marwa

function ingimg(response) {
return response.hits[0].largeImageURL;
}

module.exports = [recipTitle , recipIngredients,ingimg ];
