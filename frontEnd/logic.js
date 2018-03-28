//function return the title of recipes from the api
function recipTitle(filteredrponse) {
  var titleArr = [];
  for (let i of filteredrponse) {
    titleArr.push(i.title);
  }
  return titleArr;
};

//filtered response
function filteredResponse(response) {
  const result = response.results.filter(function(item) {
    return item.thumbnail != '';
  });
  return result;
}

//function return the thumbnail of recipes from the api
function recipPic(filteredrponse) {
  return filteredrponse.map((item) => item.thumbnail);
}

//function return the image
function another_recipes(response) {
  let new_link = [];
  for (let i of response.hits) {
    new_link.push(i.recipe.url);
  }
  return new_link;
}

//imges
function img_recipes(response) {
  let new_img = [];
  for (let i of response.hits) {
    new_img.push(i.recipe.image);
  }
  return new_img;
}

//titles
function another_title_recipes(response) {
  let new_title = [];
  for (let i of response.hits) {
    new_title.push(i.recipe.label);
  }
  return new_title;
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
  xhr.open('GET', url, false)
  xhr.send();
};

if (typeof module !== 'undefined') {
  module.exports = [recipTitle, recipIngredients, filteredResponse];
}
