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
var section = selector("our_section");


// Search recipes by title and git pictures
addlistener("form_id", "submit", function(e) {
  e.preventDefault();

  var search_input = selector("search_input");
  var search_text = search_input.value;
  section.innerHTML = '';

  var url = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q="
  url = url.concat(search_text);

  fetch(url, function(response) {
    var filtered_response = filteredResponse(response);

    if (filtered_response.length !== 0) {
      var newTitleArr = recipTitle(filtered_response);

      for (let i of newTitleArr) {
        var figure = creatationElements("our_section", 'figure');
        var id_figure = newTitleArr.indexOf(i);
        figure.setAttribute("id", id_figure);
        figure.setAttribute("class", "figure_style");
        const recipe_img = creatationElements(id_figure, "img");
        const img_src = recipPic(filtered_response)[id_figure];
        recipe_img.src = img_src;
        recipe_img.addEventListener("click", function() {});
        var tag = creatationElements(id_figure, "figcaption");
        tag.textContent = i;

        addlistener(id_figure, "click", function(e) {
          e.preventDefault();
          render_ingredients(e.target, newTitleArr);
        });
      }
    }else{
      var h2 = creatationElements("our_section", 'h2');
      h2.textContent = "SORRY !, No Resipes For This Word";
      h2.setAttribute("class" , "h2_style");
    }
  });
});

// Show ingredients
function render_ingredients(target, newTitleArr) {
  section.innerHTML = '';
  target.setAttribute("class", "active")
  var div_ingredient = create("div");
  div_ingredient.setAttribute("id", "container");
  var title = create("h1");
  title.textContent = newTitleArr[target.id];
  var clicked_title = newTitleArr[target.id].split(" ").join("+");
  var url2 = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=" + clicked_title + "&app_id=54d5d928&app_key=bbf4d50ad16c2fe3f5afd35390497458&from=0&to=10";
  fetch(url2, function(response) {
    var arr_another_recipes = another_recipes(response);
    var arr_img_recipes = img_recipes(response);
    var arr_another_title_recipes = another_title_recipes(response);
    for (var i = 0; i < arr_img_recipes.length; i++) {
      var figure2 = create("figure");
      var img2 = create("img");
      var caption2 = create("figcaption");
      var link_view_more = create("a");
      figure2.setAttribute("class", "figure_style");
      link_view_more.setAttribute("class", "link_style");
      caption2.textContent = arr_another_title_recipes[i];
      link_view_more.textContent = "View full recipe ...";
      link_view_more.setAttribute('href', arr_another_recipes[i]);
      img2.src = arr_img_recipes[i];
      figure2.appendChild(img2);
      figure2.appendChild(caption2);
      figure2.appendChild(link_view_more);
      section.appendChild(figure2);
    }
  });
}
