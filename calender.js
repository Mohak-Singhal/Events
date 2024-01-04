const month = [
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
dt = new Date();



function Renderdate() {
    let mname = month[dt.getMonth()];
Year = dt.getFullYear();
  document.getElementById("month").innerHTML = mname;
  document.getElementById("year").innerHTML = Year;

  dt.setDate(1);
  const day = dt.getDay();

  const last = new Date(dt.getFullYear(), dt.getMonth() + 1, 0)
  lastday=last.getDate();
  const nextday=7-last.getDay()-1;
  console.log(nextday,last,lastday)
 
  const prevdate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
  const today = new Date();

  var daynum = "";
  for (x = day; x > 0; x--) {
    daynum += "<div class='prevdate'>" + (prevdate - x + 1) + "</div>";
  }
  for (i = 1; i <= lastday; i++) {
    
    if (i == today.getDate() && dt.getMonth() == today.getMonth()) {
      daynum += "<div class='today' id='today'>" + i  + "</div>";
    }
     else {
      daynum += "<div class='dates' onclick>" + i + "</div>";
    }
  }
  
  for (i= 1; i <=nextday; i++) {
    daynum += '<div class="nextdate" onclick>' + i +'</div>';
  }

//   for (x = lastday; x > 0; x++) {
//     daynum += "<div class='afterdate'>" + (prevdate - x + 1) + "</div>";
//   }
  document.getElementsByClassName("days")[0].innerHTML = daynum;
  console.log(day);
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
const btn = document.getElementById('today');
 // Open modal
 btn.onclick = function () {
  addEventForm.style.display = 'block';
};

const modal = document.querySelector("#modal");
const viewEventForm = document.querySelector("#viewEvent");
const addEventForm = document.querySelector("#addEvent");


// function addeve(today){
//   viewEventForm.style.display = "block";
// }

function showModal(daynumm) {
  clicked = daynumm;
  const eventOfTheDay = events.find((e) => e.date == daynumm);
  if (eventOfTheDay) {
    //Event already Preset
    document.querySelector("#eventText").innerText = eventOfTheDay.title;
    viewEventForm.style.display = "block";
  } else {
    //Add new Event
    addEventForm.style.display = "block";
  }
  modal.style.display = "block";
}

//Close Modal
function closeModal() {
  viewEventForm.style.display = "none";
  addEventForm.style.display = "none";
  modal.style.display = "none";
  clicked = null;
  loadCalendar();
}

function buttons() {
  const btnBack = document.querySelector("#btnBack");
  const btnNext = document.querySelector("#btnNext");
  const btnDelete = document.querySelector("#btnDelete");
  const btnSave = document.querySelector("#btnSave");
  const closeButtons = document.querySelectorAll(".btnClose");
  const txtTitle = document.querySelector("#txtTitle");

  btnBack.addEventListener("click", () => {
    navigation--;
    loadCalendar();
  });
  btnNext.addEventListener("click", () => {
    navigation++;
    loadCalendar();
  });
  modal.addEventListener("click", closeModal);
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", closeModal);
  });
  btnDelete.addEventListener("click", function () {
    events = events.filter((e) => e.date !== clicked);
    localStorage.setItem("events", JSON.stringify(events));
    closeModal();
  });

  btnSave.addEventListener("click", function () {
    if (txtTitle.value) {
      txtTitle.classList.remove("error");
      events.push({
        date: clicked,
        title: txtTitle.value.trim(),
      });
      txtTitle.value = "";
      localStorage.setItem("events", JSON.stringify(events));
      closeModal();
    } else {
      txtTitle.classList.add("error");
    }
  });
}


