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

// Show indegredients pictures
