var theMonth = dayjs().format('dddd, MMM');
var theDay = dayjs().format('DD');
var theYear = dayjs().format('YYYY');
var currentHour = parseInt(dayjs().format('HH'));
var hourArray = [];

$(function () {

  $('.saveBtn').on('click', function(event) {
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

  $('.time-block').each(function() {
    var hours = $(this).attr('id');
    hourArray.push(hours);
    $('#' + hourArray[hourArray.length-1] + ' .description').val(localStorage.getItem(hourArray[hourArray.length-1]));
  })

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