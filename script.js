$('#btn').on('click', function() {
  let time = $(this).parent().parent().attr('id');

  let value = $(this).parent().parent().find(".description").val();
console.log(time);
console.log(value);
  localStorage.setItem(time, value)

})

var tableRow = $(this).attr("id");

console.log(tableRow);

$("#9 .description").val(localStorage.getItem("9"));