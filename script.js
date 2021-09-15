
//To Do list
/* 1. Create standard business  time slots ~8am-8pm
        a.Must be color-coded to show events on past present and future dates
   2. When timeblock is clicked can insert text
        a. Needs a save button to save event
   3. Must savec to local storage even after refreshing the page
  */





// All variables
  
   var saveButton = document.querySelectorAll('.save-Btn')
   var eventEl = document.querySelectorAll('.event')


//  Current time and date 

   var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));


// color coding
var hour = moment().hours()

function colorHour(){
   $("tr").each(function(){
      var timeBlock = parseInt($(this).attr("id"))
     console.log($(this).children(".event"))
      if( timeBlock < hour){
         $(this).children(".event").children("input").addClass("past")
         $(this).children(".event").addClass("past")
      }else if(timeBlock === hour){
         $(this).children(".event").children("input").addClass("present")
         $(this).children(".event").addClass("present")
      } else{
         $(this).children(".event").children("input").addClass("future")
         $(this).children(".event").addClass("future")
      }
   
   })
}

colorHour();






// local storage
$(".save-Btn").on("click", function(){
   var textValue = $(this).parent().siblings("td").children("input").val()
   console.log(textValue)
   var hour = $(this).parent().parent().attr("id")
   localStorage.setItem(hour, textValue)
}) 

$(".input").each(function(){
   var hour = $(this).parent().parent().attr("id")
   var storedText = localStorage.getItem(hour)
   $(this).val(storedText)
})




     

   





 