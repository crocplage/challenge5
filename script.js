var date = new Date();
let currentDay = document.querySelector("#current-day")

function showDate() {
   currentDay.textContent += date

}
showDate()


function TimeRange() {

$('#saveBtn').click(function () {
alert('Save button clicked');

localStorage.getItem(time, "time");
});

$.each(".time-block"), function() {
   var timeBlock = parseInt($(this).attr('hour'));

   if(timeBlock < timeNow) {
      $(this).removeClass("past")
      $(this).removeClass("present")
      $(this).addClass("future")
   } else {
      $(this).removeClass("past")
      $(this).removeClass("future")
      $(this).addClass("present")
   }

}
}
$("#hour-9 .time-block").val(localStorage.getItem("09"))
$("#hour-10 .time-block").val(localStorage.getItem("10"))
$("#hour-11 .time-block").val(localStorage.getItem("11"))
$("#hour-12 .time-block").val(localStorage.getItem("12"))
$("#hour-1 .time-block").val(localStorage.getItem("1")) 
$("#hour-2 .time-block").val(localStorage.getItem("2"))
$("#hour-3 .time-block").val(localStorage.getItem("3"))
$("#hour-4 .time-block").val(localStorage.getItem("4"))








