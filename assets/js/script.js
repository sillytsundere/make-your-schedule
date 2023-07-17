// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var theMonth = dayjs().format('dddd, MMM');
var theDay = dayjs().format('DD');
var theYear = dayjs().format('YYYY');
var currentHour = 11//dayjs().format('HH');
console.log(currentHour);

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $('.saveBtn').on('click', function(event) {
    event.preventDefault();
    console.log('event listener save button');
    console.log(event.target, 'event.target');
    var item = $(event.target).parent('button').siblings('textArea').val();
    //console.log(item); //returns the same al line 24
    localStorage.setItem('task', item);
    console.log(localStorage.getItem('task'), 'the inner text of the task');
  })
  //
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  $('.time-block').each(function() {
    var hourBlock = $(this).attr('id').split('-')[1];
    console.log(hourBlock);
    if (hourBlock < currentHour) {
      $(this).addClass('past');
    } else if (hourBlock === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }}
  )
  //
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  //
  // DONE: Add code to display the current date in the header of the page.
  var nth = function(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }}
  $('#currentDay').text(theMonth + ' ' + theDay + nth(theDay) + ' ' + theYear);
});