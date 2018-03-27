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
  var section = selector("our_divs");

  url = url.concat(search_text);
  fetch(url, function(response) {
    var newTitleArr = recipTitle(response);
    for (let i of newTitleArr) {
      var figure = creatationElements("our_divs", 'figure');
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
function addlistener(element_id , event_listener, functionn){
  return document.getElementById(element_id).addEventListener(event_listener , functionn);
}

var search = selector("search_input");
var btn_searc = selector("submit_button")


// Search recipes by title and git pictures




// Show ingredients

function create(element) {
  return document.createElement(element);
}



function renderingre(target) {
  // var parent =selector(target.id);
var parent =selector(target.id);

  parent.setAttribute("class","active")
  var diving=create("div");
  diving.setAttribute("id", "container");
  var title=create("h1");
  // array from ahmad dom
  title.textContent=titlearray[target.id];

  // arrayinged it is an array contains ingredient from ahmed
  for (var i = 0; i < arrayinged.length; i++) {
    var figure2=create("figure")
    figure2.setAttribute("class", "ingrfigures")
    var caption2=create("figcaption")
    caption2.setAttribute("class", "captiontxt")
    var inged =arrayinged[i];
    caption2.textContent(inged);
    var url2="https://pixabay.com/api/?username=mjweaver01&key=1631539-db8210cabd2636c6df59812df&q="+inged+"&image_type=photo"
    var src2=fetch(url2,ingimg);
    var img=create("img");
    img.setAttribute("class", "ingredimges")
    img.src=src2;
    figure2.appendChiled(img);
    figure2.appendChiled(caption2);


  }

}



// Show indegredients pictures
