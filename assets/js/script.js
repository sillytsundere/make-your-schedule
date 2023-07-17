// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var theMonth = dayjs().format('dddd, MMM');
var theDay = dayjs().format('DD');
var theYear = dayjs().format('YYYY');
var currentHour = parseInt(dayjs().format('HH'));

$(function () {
  // DONE: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('.saveBtn').on('click', function(event) {
    event.preventDefault();
    var item = $(event.target).parent('button').siblings('textArea').val();
    localStorage.setItem('task', item);
    console.log(localStorage.getItem('task'), 'the inner text of the task');
    var savedItem = localStorage.getItem('task');
    $(event.target).parent('button').siblings('.description').html(savedItem);
  })
  //
  $('.time-block').each(function() {
    var hourBlock = parseInt($(this).attr('id').split('-')[1]);
    if (hourBlock < currentHour) {
      $(this).addClass('past');
    } else if (hourBlock === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }});
  //
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // var savedItem = localStorage.getItem('task');
  // $(event.target).parent('button').siblings('textArea').val() = savedItem;


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