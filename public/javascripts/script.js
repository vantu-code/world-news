var addButton = document.getElementsByClassName('add-to-favorite');
console.log(addButton);

var favoriteFormArray = document.querySelectorAll('.favorite-form');
var clearHistory= document.getElementById('clear-history');
var editProfile= document.getElementById('edit-profile');

<<<<<<< HEAD
// clearHistory.addEventListener("click", function (e){
//   e.preventDefault()
//     axios
//     .post('/profile')
// })
=======
var profileForm = document.getElementById('profile-form');
var profileLines = document.getElementById('profile-lines');
>>>>>>> 73b3539c3bc02b02927d80d10702a87bbaa6ad01

var profileInputs = document.getElementsByClassName('profile-input');
// var inputEmail = document.getElementById('edit-email');
var submitProfileEdit = document.getElementById('submit-profile-edit')

// var showMoreQueries = document.querySelectorAll('#admin-query-button')
// var allQueries = document.getElementById('admin-queries')
// var fiveQueries = document.getElementById('five-queries')



<<<<<<< HEAD
=======

// submitProfileEdit.addEventListener("click", function (e){
//   e.preventDefault()
//     axios
//     .post('/profile')
// })
>>>>>>> 73b3539c3bc02b02927d80d10702a87bbaa6ad01
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

<<<<<<< HEAD

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
=======
editProfile.addEventListener("click", function (e){
  if(profileForm.style.display === 'block'){
  profileForm.style.display = 'none';
  profileLines.style.display = 'block';
  editProfile.innerHTML = 'Edit profile';
  }
  else if(profileForm.style.display === 'none'){
    profileForm.style.display = 'block';
    profileLines.style.display = 'none';
    editProfile.innerHTML = 'Cancel';
    }

})

// showMoreQueries.addEventListener("click", function (e){
//   if(allQueries.style.display == 'none'){
//   allQueries.style.display = 'flex';
//   fiveQueries.style.display = 'none';
//   }
//   else {
//     allQueries.style.display = 'none';
//     fiveQueries.style.display = 'flex';
//     }
// })




//   console.log("edit");
//   e.preventDefault()
//   const inputFields = profileForm.querySelectorAll("input");
//   const input = [...inputFields];

//   const updatedProfile = {};
  
//   input.forEach(
//     inputField => (updatedProfile[input.name] = inputField.value)
//   )

//   axios
//   .patch(
//     `/profile/${id}`, updatedProfile,)
//   .then(response => {
//     profileForm.reset()
//   })

// clearHistory.addEventListener("click", function (e){
//   e.preventDefault()
//     axios
//     .post('/profile')
// })
// })




// var editInterestsButton = document.querySelectorAll('#edit-interests');


// editInterestsButton.addEventListener("click", function(e){
//   console.log("yoooooooooooooooooooo");
  
// })



>>>>>>> 73b3539c3bc02b02927d80d10702a87bbaa6ad01

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
