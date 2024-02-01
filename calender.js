const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();
const daysContainer = document.querySelector(".days");
function Renderdate() {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);
  const prevDays = prevLastDay.getDate();
  const lastDate = lastDay.getDate();
  const day = firstDay.getDay();
  const nextDays = 7 - lastDay.getDay() - 1;

  date.innerHTML = months[month] + " " + year;

  let days = "";

  for (let x = day; x > 0; x--) {
    days += `<div class="day prevdate">${prevDays - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    //check if event is present on that day
    let event = false;
    eventsArr.forEach((eventObj) => {
      if (
        eventObj.day === i &&
        eventObj.month === month + 1 &&
        eventObj.year === year
      ) {
        event = true;
      }
    });
    if (
      i === new Date().getDate() &&
      year === new Date().getFullYear() &&
      month === new Date().getMonth()
    ) {
      activeDay = i;
      getActiveDay(i);
      updateEvents(i);
      if (event) {
        days += `<div class="day today active event">${i}</div>`;
      } else {
        days += `<div class="day today active">${i}</div>`;
      }
    } else {
      if (event) {
        days += `<div class="day event">${i}</div>`;
      } else {
        days += `<div class="dates">${i}</div>`;
      }
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day nextdate">${j}</div>`;
  }
  daysContainer.innerHTML = days;
  addListner();
}

function movedate(mon) {
  if(mon=='prev'){
      dt.setMonth(dt.getMonth()-1);
      }
  if(mon=='next'){
      dt.setMonth(dt.getMonth()+1);
  }
  Renderdate();
console.log(mon);
}

// dt = new Date();
// function Renderdate() {
//     let mname = month[dt.getMonth()];
// Year = dt.getFullYear();
//   document.getElementById("month").innerHTML = mname;
//   document.getElementById("year").innerHTML = Year;

//   dt.setDate(1);
//   const day = dt.getDay();

//   const last = new Date(dt.getFullYear(), dt.getMonth() + 1, 0)
//   lastday=last.getDate();
//   const nextday=7-last.getDay()-1;
//   console.log(nextday,last,lastday)
 
//   const prevdate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
//   const today = new Date();

//   var daynum = "";
//   for (x = day; x > 0; x--) {
//     daynum += "<div class='prevdate'>" + (prevdate - x + 1) + "</div>";
//   }
//   for (i = 1; i <= lastday; i++) {
    
//     if (i == today.getDate() && dt.getMonth() == today.getMonth()) {
//       daynum += "<div class='today' id='today'>" + i  + "</div>";
//     }
//      else {
//       daynum += "<div class='dates' onclick>" + i + "</div>";
//     }
//   }
  
//   for (i= 1; i <=nextday; i++) {
//     daynum += '<div class="nextdate" onclick>' + i +'</div>';
//   }

// //   for (x = lastday; x > 0; x++) {
// //     daynum += "<div class='afterdate'>" + (prevdate - x + 1) + "</div>";
// //   }
//   document.getElementsByClassName("days")[0].innerHTML = daynum;
//   console.log(day);
// }



// function gotoDate() {
//   console.log("here");
//   const dateArr = dateInput.value.split("/");
//   if (dateArr.length === 2) {
//     if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
//       month = dateArr[0] - 1;
//       year = dateArr[1];
//       initCalendar();
//       return;
//     }
//   }
//   alert("Invalid Date");
// }


// // const btn = document.getElementById('today');
// //  // Open modal
// //  btn.onclick = function () {
// //   addEventForm.style.display = 'block';
// // };

// // var modal = document.querySelector("#modal");
// // const viewEventForm = document.querySelector("#viewEvent");
// // const addEventForm = document.querySelector("#addEvent");


// // function addeve(today){
// //   viewEventForm.style.display = "block";
// // }

// // function showModal(daynumm) {
// //   clicked = daynumm;
// //   const eventOfTheDay = events.find((e) => e.date == daynumm);
// //   if (eventOfTheDay) {
// //     //Event already Preset
// //     document.querySelector("#eventText").innerText = eventOfTheDay.title;
// //     viewEventForm.style.display = "block";
// //   } else {
// //     //Add new Event
// //     addEventForm.style.display = "block";
// //   }
// //   modal.style.display = "block";
// // }

// //Close Modal
// // function closeModal() {
// //   viewEventForm.style.display = "none";
// //   addEventForm.style.display = "none";
// //   modal.style.display = "none";
// //   clicked = null;
// //   loadCalendar();
// // }

// function buttons() {
//   const btnBack = document.querySelector("#btnBack");
//   const btnNext = document.querySelector("#btnNext");
//   const btnDelete = document.querySelector("#btnDelete");
//   const btnSave = document.querySelector("#btnSave");
 
//   const txtTitle = document.querySelector("#txtTitle");


//   // modal.addEventListener("click", closeModal);
//   // closeButtons.forEach((btn) => {
//   //   btn.addEventListener("click", closeModal);
//   // });
//   // btnDelete.addEventListener("click", function () {
//   //   events = events.filter((e) => e.date !== clicked);
//   //   localStorage.setItem("events", JSON.stringify(events));
//   //   closeModal();
//   // });

//   btnSave.addEventListener("click", function () {
//     if (txtTitle.value) {
//       txtTitle.classList.remove("error");
//       events.push({
//         date: clicked,
//         title: txtTitle.value.trim(),
//       });
//       txtTitle.value = "";
//       localStorage.setItem("events", JSON.stringify(events));
//       closeModal();
//     } else {
//       txtTitle.classList.add("error");
//     }
//   });
// }

// var today =document.querySelectorAll(".today");
//  today.forEach((today) => {
//   today.addEventListener('click',function(event){
//     console.log(event.target);
//     event.target.style.color = 'black';
// });
// });

// //       var todayElements = document.querySelectorAll(".today");
// // todayElements.forEach((today) => {
// //     today.addEventListener('click',function(event){
// //         console.log(event.target);
// //         event.target.style.color = 'black';
// //     });
// // });

// //  
// //   
//   var modal = document.querySelector("#modal");
//   const buttonaddevent=document.getElementById("Eventt")
//   var addEventForm = document.querySelector("#addEvent");
//   // var closeButtons = document.querySelectorAll(".btnClose");
//   buttonaddevent.addEventListener('click',function(e){
//     console.log("clicked");
//     modal.style.display="block"
//     addEventForm.style.display="block"
    
//   })
//   // closeButtons.addEventListener('click',function(clickk){
//   //   console.log("clicked 1");
//   //   addEventForm.style.display="none" 
//   // })
//   var closeButtons = document.querySelectorAll(".btnClose");
//   closeButtons.forEach((btn) => {
//     btn.addEventListener('click', function(clickk){
//       console.log("clicked 1");
//       addEventForm.style.display="none" 
//       modal.style.display="none"
//     })
//   });

// //   function save(){
// //     localStorage.setItem("data",list.innerHTML);
// // }
// // function show(){
// //     list.innerHTML=localStorage.getItem("data");
// // }
// // show();
// // const addEventTitle = document.querySelector("#eventTitle")
// // const addEventRE = document.querySelector("#reminder")
// // const addEventDate = document.querySelector("#eventDate")

// // const addEventType = document.querySelector("#eventType")
// const btnSave = document.querySelector("#btnSave");
// // btnSave.addEventListener("click", () => {
// //   console.log("li")
// //   const eventTitle = addEventTitle.value;
// //   const eventTimeDate = addEventDate.value;
// //   const eventTimeRE = addEventRE.value;
// //   const EventType= addEventType.value;

// //   if (eventTitle === "" || eventTimeDate === "" || eventTimeRE === ""|| EventType === "") {
// //     alert("Please fill all the fields");
// //     return;
// //   }
// // });

// // //function to save events in local storage
// // function saveEvents() {
// //   localStorage.setItem("events", JSON.stringify(eventsArr));
// // }

// // //function to get events from local storage
// // function getEvents() {
// //   //check if events are already saved in local storage then return event else nothing
// //   if (localStorage.getItem("events") === null) {
// //     return;
// //   }
// //   eventsArr.push(...JSON.parse(localStorage.getItem("events")));
// // }


// // function registerEvent() {
// // const eventDate = document.getElementById('eventDate').value;
// // const eventTitle = document.getElementById('eventTitle').value;
// // const eventType = document.getElementById('eventType').value;
// // const reminder = document.getElementById('reminder').checked;

// //     if (eventDate && eventTitle && eventType) {
// //       const event = {
// //         date: eventDate,
// //         name: eventTitle,
// //         type: eventType,
// //         Reminder:reminder
// //       };
  
      
// //       saveEvent(event);
// //     // Clear form fields
// //     document.getElementById('eventDate').value = '';
// //     document.getElementById('eventTitle').value = '';
// //     document.getElementById('eventType').value = '';
// //     document.getElementById('reminder').value = '';

// //     // Reload events
// //     loadEvents();
    
// //   }
// // }
// //       function saveEvent(event) {
// //         let events = JSON.parse(localStorage.getItem('events')) || [];
// //         events.push(event);
// //         localStorage.setItem('events', JSON.stringify(events));
// //       }


