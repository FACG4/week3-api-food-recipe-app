function selector(element_id) {
  return document.getElementById(element_id);
}

function addlistener(element_id, event_listener, callback) {
  return document.getElementById(element_id).addEventListener(event_listener, callback);
}

function creatationElements(element_id ,tag_name) {
  var parent = selector(element_id);
  var tag = document.createElement(tag_name);
  parent.appendChild(tag);
  return tag;
}

var search_input = selector("search_input");
var btn_search = selector("submit_button");


// Search recipes by title and git pictures
addlistener("form_id", "submit", function(e) {
  e.preventDefault();

  var url = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q="
  var search_text = search_input.value;
  var section = selector("our_section");

  url = url.concat(search_text);
  fetch(url, function(response) {
    var newTitleArr = recipTitle(response);

    for (let i of newTitleArr) {
      var figure = creatationElements("our_section", 'figure');
      var id_figure = newTitleArr.indexOf(i);
      figure.setAttribute("id" ,id_figure );
      figure.setAttribute("class" , "figure_style");
      creatationElements(id_figure, "img");
      var tag = creatationElements(id_figure, "figcaption");
      tag.textContent = i ;
    }

  });
});

// Show ingredients

// Show indegredients pictures
