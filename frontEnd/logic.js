//filtered response
function filteredResponse (response) {
  const result = response.results.filter(function (item) {
    return item.thumbnail != '';
  });
  return result;
}
//function return the title of recipes from the api
function recipTitle(filteredrponse) {
  var titleArr = [];
  for (let i of filteredrponse) {
    titleArr.push(i.title);
  }
  return titleArr;
};

//function return the ingredients of recipes from the api
function recipIngredients(filteredrponse) {
  var ingredientsArr = [];
  for (let i of filteredrponse) {
    ingredientsArr.push(i.ingredients);
  }
  return ingredientsArr;
};

//function return the thumbnail of recipes from the api
function recipPic (filteredrponse) {
  return filteredrponse.map((item) => item.thumbnail);
}


//function return the image

function ingimg(response) {
return response.hits[0].largeImageURL;
}

//function fetch a connection to the api
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

if (typeof module !== 'undefined'){
  module.exports = [recipTitle, recipIngredients, filteredResponse, ingimg];
}
