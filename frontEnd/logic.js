function ingimg(response) {
return response.hits[0].largeImageURL;
}
if(typeof module !=="undefined"){
module.exports=ingimg;
}
