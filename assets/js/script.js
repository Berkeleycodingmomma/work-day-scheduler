// const clock = document.getElementById("clock");
// setInterval(() => {
//     const now = moment();
//     const readable = now.format("dddd, MMMM Do YYYY, h:mm:ss a");
//     clock.textContent = readable;

// }, 1000);

$(document).ready(function () {

            var saveBtn = document.querySelectorAll(".saveBtn");

            saveBtn.forEach(function (node) {

                node.addEventListener("click", function () {

                    var description = $(this).siblings(".description").val();

                    var time = $(this).parent().attr("id");

                    localStorage.setItem(time, description);

                    document.getElementById("text").val(localStorage.getItem("hour-1"));
                    $("#hour-2 .description").val(localStorage.getItem("hour-2"));
                    $("#hour-3 .description").val(localStorage.getItem("hour-3"));
                    $("#hour-4 .description").val(localStorage.getItem("hour-4"));
                    $("#hour-5 .description").val(localStorage.getItem("hour-5"));
                    $("#hour-6 .description").val(localStorage.getItem("hour-6"));
                    $("#hour-7 .description").val(localStorage.getItem("hour-7"));
                    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
                    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
                    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
        
                    

                })
            });


            document.getElementById("text").val(localStorage.getItem("hour-1"));
            $("#hour-2 .description").val(localStorage.getItem("hour-2"));
            $("#hour-3 .description").val(localStorage.getItem("hour-3"));
            $("#hour-4 .description").val(localStorage.getItem("hour-4"));
            $("#hour-5 .description").val(localStorage.getItem("hour-5"));
            $("#hour-6 .description").val(localStorage.getItem("hour-6"));
            $("#hour-7 .description").val(localStorage.getItem("hour-7"));
            $("#hour-8 .description").val(localStorage.getItem("hour-8"));
            $("#hour-9 .description").val(localStorage.getItem("hour-9"));
            $("#hour-10 .description").val(localStorage.getItem("hour-10"));


            var elements = $(".time-block");
            var d = new Date();
            var h = d.getHours();


            for (i = 0; i < elements.length; i++) {
                var t = parseInt(elements[i].getAttribute("data-hour"));

                if (h < t) {
                    elements[i].classList.add('future');
                    elements[i].classList.remove('past');
                    elements[i].classList.remove('present');
                } else if (h > t) {
                    elements[i].classList.add('past');
                    elements[i].classList.remove('future');
                    elements[i].classList.remove('present');
                } else if (h === t) {
                    elements[i].classList.add('present');
                    elements[i].classList.remove('future');
                    elements[i].classList.remove('past');
                } else if (h > 16 && h < 9) {
                    elements[i].classList.add('future');
                    elements[i].classList.remove('past');
                    elements[i].classList.remove('present');
                }
            }
        }

)



















        // // // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
        // // // the code isn't run until the browser has finished rendering all the elements
        // // // in the html.
        // // $(function () {


        // //     // TODO: Add a listener for click events on the save button. This code should
        // //     // use the id in the containing time-block as a key to save the user input in
        // //     // local storage. HINT: What does `this` reference in the click listener
        // //     // function? How can DOM traversal be used to get the "hour-x" id of the
        // //     // time-block containing the button that was clicked? How might the id be
        // //     // useful when saving the description in local storage?
        // //     //
        // //     // TODO: Add code to apply the past, present, or future class to each time
        // //     // block by comparing the id to the current hour. HINTS: How can the id
        // //     // attribute of each time-block be used to conditionally add or remove the
        // //     // past, present, and future classes? How can Day.js be used to get the
        // //     // current hour in 24-hour time?
        // //     //
        // //     // TODO: Add code to get any user input that was saved in localStorage and set
        // //     // the values of the corresponding textarea elements. HINT: How can the id
        // //     // attribute of each time-block be used to do this?
        // //     //
        // //     // TODO: Add code to display the current date in the header of the page.
        // //   });


        // dayjs(new Date)();

        // function formatDate(dateObject) {


        // }
        // const dayJsObject = dayjs();
        // dayjs(new Date)();
        // console.log(dayJsObject.format("D/M/YYYY h:mm A"));


        // function formatDate(dateObject) {
        //     const parts = {
        //         date: dateObject.getDate(),
        //         month: dateObject.getMonth() + 1,
        //         year: dateObject.getFullYear(),
        //         hour: (dateObject.getHours() % 12) || 12,
        //         minute: dateObject.getMinutes().toString().padStart(2, "0"),
        //         amOrPm: dateObject.getHours() < 12 ? "AM" : "PM"
        //     };
        //     return `${parts.date}/${parts.month}/${parts.year} ${parts.hour}:${parts.minute} ${parts.amOrPm}`;
        //     console.log(parts);
        //     return "dcode";

        // }
        // dayjs(new Date)();
        // const myDate = new Date();
        // const myDateFormatted = formatDate(myDate);

        // console.log(myDateFormatted);