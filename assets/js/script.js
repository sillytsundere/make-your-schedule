// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var theMonth = dayjs().format('dddd, MMM');
var theDay = dayjs().format('DD');
var theYear = dayjs().format('YYYY');
var currentHour = parseInt(dayjs().format('HH'));
var hourArray = [];

$(function () {

  $('.saveBtn').on('click', function(event) {
    //event.preventDefault();
    var item = $(this).siblings('textarea').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, item);
  })
  
  $('.time-block').each(function() {
    var hourBlock = parseInt($(this).attr('id').split('-')[1]);
    if (hourBlock < currentHour) {
      $(this).addClass('past');
    } else if (hourBlock === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }});
/////
/////
/////
  $('#hour-09 .description').val(localStorage.getItem('hour-09'));  
  //select all time blocks for id's to use as keys
  // var selTimeBlock = $('.time-block').attr('id');
  // console.log(selTimeBlock);

  $('.time-block').each(function() {
    var hours = $(this).attr('id');
    hourArray.push(hours);
  })
  console.log(hourArray);

  for (var index = 0; index < hourArray.length; index++) {
    $('.time-block').attr('id').hourArray
    //$().val(localStorage.getItem(item));
    console.log()
  }
/////
/////
/////
  function nth(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  }
  $('#currentDay').text(theMonth + ' ' + theDay + nth(theDay) + ' ' + theYear);
});