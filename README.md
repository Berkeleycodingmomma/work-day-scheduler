# work-day-scheduler

Third-Party APIs Work Day Scheduler

# A simple calendar application that saves events throughout the day

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 

Used Day.js: https://day.js.org/en/

learning about Node.js: https://nodejs.org/en/about

How to use dayjs: https://mirzaleka.medium.com/the-complete-guide-to-day-js-fb835a5d945a

Researching: https://stackoverflow.com/questions/351409/how-to-append-something-to-an-array

Understanding timer.innerhtml: https://www.w3schools.com/jsref/prop_html_innerhtml.asp

Local storage in javaScript: https://www.makeuseof.com/localstorage-javascript/

Google free back-ground image search: https://lh3.googleusercontent.com/AxNH1OPwLn8uEU-J6-EgbDtdlHzo71vALcVR3Jv5wOrYnZBJrJUEuuK8kxBqK7mWKTG1ooWlAQ7fQWIN-SSJtX82vEtCfhJeMwRMmw7BwQ

jQuery info: https://api.jquery.com/wrapall/

Container sizing: https://getbootstrap.com/docs/5.0/layout/containers/




## Description 
I have Created a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and it will feature dynamically updated HTML and CSS powered by jQuery. When user opens the planner to create a schedule, the curent day is displayed at the top. When the user scrolls down, they are presented with time blocks for standard buisness hours. Each block is color-coded to indicate wherether it is in the past, present, or future. User then can click on a certain time block and enter an event and save it for the specific time block. The text that was entered in will be saved in a local storage. User will then be able to refresh the page and the saved events will persist. 

 <img src="./assets/images/Screen Shot 2023-04-03 at 5.56.37 PM.png" alt="screen-shot">

## Web APIs Challenge Code Quiz, Code examples


--------------------------------------------------------------------------------------------------------------------------------------------------------

 ```sh
 <div id="hour-9" class="row time-block mb-4" data-hour="9">
        <div class="col-2 col-md-1 hour text-center py-3"> <span>9AM</span></div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>
 ```

**(ABOVE)- 


--------------------------------------------------------------------------------------------------------------------------------------------------------
```sh
  $(function () {

  $(document).ready(function () {
    var saveBtn = document.querySelectorAll(".saveBtn");

    saveBtn.forEach(function (node) {

      node.addEventListener("click", function () {

        var description = $(this).siblings(".description").val();

        var time = $(this).parent().attr("id");

        localStorage.setItem(time, description);

      })
    });
```

**(ABOVE)- 

--------------------------------------------------------------------------------------------------------------------------------------------------------
```sh
var elements = $(".time-block");
    var d = new Date();
    var h = d.getHours();
    var dateNum = d.getUTCDate();
```
**(ABOVE)- 

---------------------------------------------------------------------------------------------------------------------------------------------------------
```sh
 let date = document.getElementById('currentDay')

    if ([1, 21, 31].includes(dateNum)) {
      date.innerHTML = dayjs().format('dddd MMMM D') + "st"
    } else if ([2, 22].includes(dateNum)) {
      date.innerHTML = dayjs().format('dddd MMMM D') + "nd"
    } else if ([3, 23].includes(dateNum)) {
      date.innerHTML = dayjs().format('dddd MMMM D') + "rd"
    } else {
      date.innerHTML = dayjs().format('dddd MMMM D') + "th"
    }
```
**(ABOVE)- 

---------------------------------------------------------------------------------------------------------------------------------------------------------
## Author Info

### Amanda Gray 

* [LinkedIn](https://www.linkedin.com/in/amanda-gray-831a65254/)

* [Deployed-link](https://berkeleycodingmomma.github.io/work-day-scheduler/)

```

## Credits

Shout out to UC Berkeley Instructor Jerome Chenette and his TA's, Manuel Nunes, Kyle Vance, and James Harding! 



© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.



