let _ = require('lodash');

let bestie = {};
$("ul").append("<li><h2>Frank Sinatra</h2></li>");
let friends = {
    friends: [
        {
            Name: "Anna",
            Gender: "female",
            Hometown: "Frankfurt",
            Age: 24,
        },
        {
            Name: "Hans",
            Gender: "male",
            Hometown: "Dusseldorf",
            Age: 25,
        },
        {
            Name: "Gretel",
            Gender: "female",
            Hometown: "Berlin",
            Age: 26,
        },
        {
            Name: "Stefan",
            Gender: "male",
            Hometown: "Munich",
            Age: 26,
        }
    ]
}
let array = $.map(friends, function (value, index) {
    return [value];
});
function render(stuff) {
    $('ul').empty(); 
    for (let i = 0; i < stuff.length; i++) {
    $('ul').append('<li>' + stuff[i] + '</li>')
  }
}

window.addEventListener('load', function () {
  render(friends);
}
//   console.log(friend1);
// $('#friendslist').append('<li><h2>Frank</h2></li>');
// $( 'ul' ).append('<li>{friends}<li>';

//URRN helping out here
// for (i = 0; i < friends.length; i++) {
//     $("#friendslist").append('<li class="friend"><h2>' + friends[i].Name + '</h2><p>' + 
//     friends[i].Gender + '</p><p>' + friends[i].Hometown + '</p><p>' + friends[i].Age + 
//     '</p><p>' + friends[i].Bestie + '</p></li>')
// }; 


window.addEventListener('load', function() {
    render(friends);
}



