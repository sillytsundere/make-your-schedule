// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  //
  // DONE: Add code to display the current date in the header of the page.
  var theMonth = dayjs().format('dddd, MMM');
  var theYear = dayjs().format('YYYY');
  var theDay = dayjs().format('DD');
  console.log(theDay);
  var nth = function(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }
  console.log(theDay);
  $('#currentDay').text(theMonth + ' ' + theDay + nth(theDay) + ' ' + theYear);
});

//below function does that nth() does but with vanilla Js if else statement
//var dateSuffix = function() {
//  if (theDay === 1) {
//    return theDay + 'st';
//  }
//  if (theDay === 2) {
//    return theDay + 'nd';
//  }
//  if (theDay === 3) {
//    return theDay + 'rd';
//  } else {
//    return theDay + 'th';
//  }
//}