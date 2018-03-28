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


// Search recipes by title and git pictures
addlistener("form_id", "submit", function(e) {
  e.preventDefault();

  var search_input = selector("search_input");
  var search_text = search_input.value;
  var section = selector("our_section");
  section.innerHTML = '';

  var url = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q="
  url = url.concat(search_text);

  fetch(url, function(response) {
    var filtered_response = filteredResponse(response);
    var newTitleArr = recipTitle(filtered_response);

    for (let i of newTitleArr) {
      var figure = creatationElements("our_section", 'figure');
      var id_figure = newTitleArr.indexOf(i);
      figure.setAttribute("id", id_figure);
      figure.setAttribute("class", "figure_style");
      const recipe_img = creatationElements(id_figure, "img");
      const img_src = recipPic(filtered_response)[id_figure];
      recipe_img.src = img_src;
      recipe_img.addEventListener("click" , function () {
        var newIngreArr = recipIngredients(filtered_response);
        console.log(newIngreArr);
      });
      var tag = creatationElements(id_figure, "figcaption");
      tag.textContent = i;
    }

  });
});

// Show ingredients




function renderingre(target) {
  var parent = selector(target.id);
  parent.setAttribute("class", "active")
  var diving = create("div");
  diving.setAttribute("id", "container");
  var title = create("h1");
  // array from ahmad dom
  title.textContent = titlearray[target.id];

  // arrayinged it is an array contains ingredient from ahmed
  for (var i = 0; i < arrayinged.length; i++) {
    var figure2 = create("figure")
    figure2.setAttribute("class", "ingrfigures")
    var caption2 = create("figcaption")
    caption2.setAttribute("class", "captiontxt")
    var inged = arrayinged[i];
    caption2.textContent(inged);
    var url2 = "https://pixabay.com/api/?username=mjweaver01&key=1631539-db8210cabd2636c6df59812df&q=" + inged + "&image_type=photo"
    var src2 = fetch(url2, ingimg);
    var img = create("img");
    img.setAttribute("class", "ingredimges")
    img.src = src2;
    figure2.appendChiled(img);
    figure2.appendChiled(caption2);


  }

}



// Show indegredients pictures
