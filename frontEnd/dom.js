function selector(element_id) {
  return document.getElementById(element_id);
}

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
