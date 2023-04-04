// // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// // the code isn't run until the browser has finished rendering all the elements
// // in the html.
// $(function () {

const dayjs = requestAnimationFrame("dayjs");

window.onload = displayClock();
function displayClock(){
  var display = new Date().toLocaleTimeString();
  document.body.innerHTML = display;
  setTimeout(displayClock, 1000); 
}

//     // TODO: Add a listener for click events on the save button. This code should
//     // use the id in the containing time-block as a key to save the user input in
//     // local storage. HINT: What does `this` reference in the click listener
//     // function? How can DOM traversal be used to get the "hour-x" id of the
//     // time-block containing the button that was clicked? How might the id be
//     // useful when saving the description in local storage?
//     //
//     // TODO: Add code to apply the past, present, or future class to each time
//     // block by comparing the id to the current hour. HINTS: How can the id
//     // attribute of each time-block be used to conditionally add or remove the
//     // past, present, and future classes? How can Day.js be used to get the
//     // current hour in 24-hour time?
//     //
//     // TODO: Add code to get any user input that was saved in localStorage and set
//     // the values of the corresponding textarea elements. HINT: How can the id
//     // attribute of each time-block be used to do this?
//     //
//     // TODO: Add code to display the current date in the header of the page.
//   });


dayjs(new Date)();

function formatDate(dateObject) {

    
}
const dayJsObject = dayjs();
dayjs(new Date)();
console.log(dayJsObject.format("D/M/YYYY h:mm A"));


function formatDate(dateObject) {
    const parts = {
        date: dateObject.getDate(),
        month: dateObject.getMonth() + 1,
        year: dateObject.getFullYear(),
        hour: (dateObject.getHours() % 12) || 12,
        minute: dateObject.getMinutes().toString().padStart(2, "0"),
        amOrPm: dateObject.getHours() < 12 ? "AM" : "PM"
    };
    return `${parts.date}/${parts.month}/${parts.year} ${parts.hour}:${parts.minute} ${parts.amOrPm}`;
    console.log(parts);
    return "dcode";

}
dayjs(new Date)();
const myDate = new Date();
const myDateFormatted = formatDate(myDate);

console.log(myDateFormatted);