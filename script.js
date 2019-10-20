// event.preventDefault() 

//creating an event upon click. a function is called for
$('.choice').on('click', function() {
    event.preventDefault();
// creating variable to hold id of element tag
  let time = $(this).parent().parent().attr('id');
//creating variable to hold the value of user input
  let value = $(this).parent().parent().find(".description").val();
// console log responses to check values of clicks
console.log(time);
console.log(value);
// name/value pairs are set to local storage 
  localStorage.setItem(time, value);

})

// moment.js to add date/time to webpage
$("#currentDay").append(moment().format('LLLL'));



// retrieving local storage name/value pairs and appending to relative time slot
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#1 .description").val(localStorage.getItem("1"));
$("#2 .description").val(localStorage.getItem("2"));
$("#3 .description").val(localStorage.getItem("3"));
$("#4 .description").val(localStorage.getItem("4"));
$("#5 .description").val(localStorage.getItem("5"));
