
var addButton = document.getElementsByClassName('add-to-favorite');
console.log(addButton);

favoriteFormArray = document.querySelectorAll('.favorite-form');

console.log(favoriteFormArray[0]);
for (let i = 0; i < addButton.length; i++) {
  addButton[i].addEventListener("click", function (e){
    
    console.log("event", e.target);
    var title = favoriteFormArray[i].title.value;
    var author = favoriteFormArray[i].author.value;
    var image = favoriteFormArray[i].image.value;
    var content = favoriteFormArray[i].article.value;
    var url = favoriteFormArray[i].url.value;
    var source = favoriteFormArray[i].source.value;
  
    
    e.preventDefault()
    axios
    .post('/home/add-to-favorite', {
      title,
      author,
      image,
      content,
      url,
      source
    })
    // document.querySelector('#layout-title').innerHTML = "yes";
    console.log("yo bro")
  })
}

// addButton.forEach((button)=>{

//   button.addEventListener("click", function (e){
//     console.log("event", e.target);
    
//     e.preventDefault()
//     axios
//     .post('/home/add-to-favorite', addToFavoriteAxios)
//     // document.querySelector('#layout-title').innerHTML = "yes";
//     console.log("yo bro")
// })
// } );