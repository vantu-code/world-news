var addButton = document.getElementsByClassName('add-to-favorite');
console.log(addButton);

var favoriteFormArray = document.querySelectorAll('.favorite-form');
var clearHistory= document.querySelectorAll('#clear-history');

// clearHistory.addEventListener("click", function (e){
//   e.preventDefault()
//     axios
//     .post('/profile')
// })



// var editInterestsButton = document.querySelectorAll('#edit-interests');


// editInterestsButton.addEventListener("click", function(e){
//   console.log("yoooooooooooooooooooo");
  
// })


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


$(document).ready(function () {
  $(window).scroll(function () {
      if ($(window).scrollTop() >= 50) {
          $(".navbar").css("background-color", "rgba(13, 12, 19, 0.65)");
          $(".nav-link").css("color", "white");
          $(".btn-outline-success").css("color", "cornflowerblue");   
          $(".btn-outline-success").css("border-color", "cornflowerblue");   
         
      } else {
          $(".navbar").css("background-color", "white");
          $(".nav-link").css("color", "black");
          $(".btn-outline-success").css("color", "#28a745");
          $(".btn-outline-success").css("border-color", "#28a745");
          
      }
  });
});




// $(function() {
//   $(window).scroll(function() {
//      //ADD CLASS
//      if ($(".navbar").offset().top > 90) {
//         $(".navbar").addClass("nav-dark");
//      } else {
//         $(".navbar").removeClass("nav-dark");
//      }
//   });
// });

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
