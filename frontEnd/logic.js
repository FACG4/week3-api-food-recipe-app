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
  let imgsrc="" ;
  for (let hit of response.hits){
    if (typeof hit !== 'undefined'){
    return (hit.largeImageURL);
    }
  }
  if (imgsrc=="") {
      imgsrc="https://cdn3.iconfinder.com/data/icons/kitchen-utensils-1/512/Pan-512.png"
  }
  return imgsrc;
  // for (var i = 0; i < response.totalHits; i++) {
  //     if(typeof (response.hits[i].largeImageURL)!== undefined ){
  //       console.log("response.hits[i].largeImageURL");
  //       return response.hits[i].largeImageURL;


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
  xhr.open('GET', url ,false)
  xhr.send();
};

if (typeof module !== 'undefined'){
  module.exports = [recipTitle, recipIngredients, filteredResponse, ingimg];
}
