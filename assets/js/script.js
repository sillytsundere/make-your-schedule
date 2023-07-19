var theMonth = dayjs().format('dddd, MMM');
var theDay = dayjs().format('DD');
var theYear = dayjs().format('YYYY');
var currentHour = parseInt(dayjs().format('HH'));

//all JQuery methods are inside the document ready event so page is loaded completely before JQuery actions are read
$(function () {

  //this on event saves schedule items to local storage when the save button corresponding to the hour-text area row is clicked 
  $('.saveBtn').on('click', function(event) {
    var item = $(this).siblings('textarea').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, item);
  })
  
  //this each method utilizes day.js to check the hour of the schedule item against the current time and apply a class to color code and indicate if the schedule item is in the past present or future
  $('.time-block').each(function() {
    var hourBlock = parseInt($(this).attr('id').split('-')[1]);
    if (hourBlock < currentHour) {
      $(this).addClass('past');
    } else if (hourBlock === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }});

    //this each callback function utilizes a for loop to display the previously saved schedule items, it takes them from local storage and utilizes the hour-##id, which is also the local storage key, of each html element to display the saved schedule item in the appropriate row
  $('.time-block').each(function() {
    for (var i = 9; i < 18; i++) {
      var hour = "hour-" + i.toString().padStart(2, "0");
      $('#' + hour + ' .description').val(localStorage.getItem(hour));
    }
  })

  //this function displays the date at the top of the page with the appropriate day suffix
  function nth(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }}
  $('#currentDay').text(theMonth + ' ' + theDay + nth(theDay) + ' ' + theYear);
});