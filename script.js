
//To Do list
/* 1. Create standard business  time slots ~9am-5pm
        a.Must be color-coded to show events on past present and future dates
   2. When timeblock is clicked can insert text
        a. Needs a save button to save event
   3. Must savec to local storage even after refreshing the page
  */
var saveButton = document.querySelectorAll('.saveBtn')
   var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY, h:mm:ss a"));

var inputEl = document.createElement("event");
inputEl.setAttribute('type', 'text');
inputEl.setAttribute('value', 'default');






// local storage DOESNT WORK
function saveEvents(){
var eventName = document.querySelectorAll(".input");
var task ={
     name: eventName.value,
};
}
if(localStorage.getItem("task") !== null){
     var eventSaves = JSON.parse(localStorage.getItem('task'));
     eventSaves.push(task);
     localStorage.setItem('task', JSON.stringify(eventArray));
}else{
     var eventArray = [task]
     localStorage.setItem('task', JSON.stringify(eventArray));
}



saveButton.addEventListener('click', function(event){
     event.preventDefault();
     saveEvents();

})