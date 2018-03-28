function selector(element_id) {
  return document.getElementById(element_id);
}

function addlistener(element_id, event_listener, callback) {
  return document.getElementById(element_id).addEventListener(event_listener, callback);
}

function create(element) {
  return document.createElement(element);
}

function creatationElements(element_id, tag_name) {
  var parent = selector(element_id);
  var tag = document.createElement(tag_name);
  parent.appendChild(tag);
  return tag;
}

var search_input = selector("search_input");

// Search recipes by title and git pictures
addlistener("form_id", "submit", function(e) {
  e.preventDefault();
  var url = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q="
  var search_text = search_input.value;
  var section = selector("our_divs");
  section.innerHTML = '';
  url = url.concat(search_text);
  fetch(url, function(response) {
    const filtered = filteredResponse(response);
    var newTitleArr = recipTitle(filtered);
    var arrayinged = recipIngredients(filtered);
    for (let i of newTitleArr) {
      var figure = creatationElements("our_divs", 'figure');
      var id_figure = newTitleArr.indexOf(i);
      figure.setAttribute("id", id_figure);
      figure.setAttribute("class", "figure_style");
      const recipe_img = creatationElements(id_figure, "img");
      const img_src = recipPic(filtered)[id_figure];
      recipe_img.src = img_src;
      var tag = creatationElements(id_figure, "figcaption");
      tag.textContent = i;

      addlistener(id_figure, "click", function(e) {
        e.preventDefault();
        renderingre(e.target, newTitleArr, arrayinged)

      })





    }

  });
});

// Show ingredients




function renderingre(target, titlearray, arrayinged) {
  var parent = selector(target.parentNode.id);

  parent.setAttribute("class", "active");
  var diving = create("div");
  diving.setAttribute("id", "container");

  var title = create("h1");
  // array from ahmad dom
  title.textContent = titlearray[target.id];
  // arrayinged it is an array contains ingredient from ahmed
  for (var i = 0; i < arrayinged[target.id].split(",").length; i++) {
    var figure2 = create("figure")
    figure2.setAttribute("id", i);
    figure2.setAttribute("class", "ingrfigures");
    var caption2 = create("figcaption")
    caption2.setAttribute("class", "captiontxt");
    var inged = arrayinged[target.id].split(",")[i];
    caption2.textContent = inged;
    inged = inged.split(" ").join("+")
    var url2 = "https://pixabay.com/api/?username=mjweaver01&key=1631539-db8210cabd2636c6df59812df&q=" + inged + "&image_type=photo"
    var src2 = '';
    var img = create("img");
    img.setAttribute("id", i);
    fetch(url2, function(response) {
      src2 = ingimg(response);
      img.setAttribute("class", "ingredimges")
      img.src = src2;
      // console.log(img);

    });
    figure2.appendChild(img);
    figure2.appendChild(caption2)
    console.log(img);
    // console.log(img);



  }

}



// Show indegredients pictures
