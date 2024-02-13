
/////book.html
const bookData = [
    {
      id: 1,
      title: "Da Vinci Code,The",
      author: "Brown, Dan",
      publisher: "Transworld",
      genre: "Non-fiction",
      rating: 0,
      releaseDate: "21 Dec 2024",
      img: "img/download (6).jpeg",
      price: "free",
    },
    {
      id: 2,
      title: "Harry Potter and the Deathly Hallows",
      author: "Rowling, J.K.",
      publisher: "Bloomsbury",
      genre: "Fiction",
      rating: 0,
      releaseDate: "21 Dec 2024",
      img: "img/download.jpeg",
      price: "free",
    },
    {
      id: 3,
      title: "Harry Potter and the Philosopher's Stone",
      author: "Rowling, J.K.",
      publisher: "Bloomsbury",
      genre: "Fiction",
      rating: 0,
      releaseDate: "21 Dec 2024",
      img: "img/download (1).jpeg",
      price: "free",
    },
    {
      id: 4,
      title: "Harry Potter and the Order of the Phoenix",
      author: "Rowling, J.K.",
      publisher: "Bloomsbury",
      genre: "Fiction",
      rating: 0,
      releaseDate: "21 Dec 2024",
      img: "img/download (2).jpeg",
      price: "free",
    },
    
    {
      id: 21,
      title: "The Catcher in the Rye",
      author: "Salinger, J.D.",
      publisher: "Little, Brown and Company",
      genre: "Non-fiction",
      rating: 4.2,
      releaseDate: "15 May 2024",
      img: "img/download (5).jpeg",
      price: "$14.99",
    },
   
    {
      id: 26,
      title: "The Fault in Our Stars",
      author: "Green, John",
      publisher: "Dutton Books",
      genre: "Non-fiction",
      rating: 4.7,
      releaseDate: "23 Aug 2024",
     img:"img/download (7).jpeg",
      price: "$13.99",
    },
   
    {
      id: 28,
      title: "The Hunger Games",
      author: "Collins, Suzanne",
      publisher: "Scholastic Press",
      genre: "Fiction",
      rating: 4.5,
      releaseDate: "20 Oct 2024",
      img: "img/download (3).jpeg",
      price: "$12.99",
    },
    {
      id: 29,
      title: "The Martian",
      author: "Weir, Andy",
      publisher: "Crown Publishing Group",
      genre: "Fiction",
      rating: 4.8,
      releaseDate: "25 Nov 2024",
      img: "img/download (4).jpeg",
      price: "$16.99",
    },
    
  ];
  
  const links = document.querySelectorAll(".button");
  const bookContainer = document.querySelector(".book_wrapper");
  const btnsearch = document.querySelector(".btnsearch");
  const txtsearch = document.querySelector(".search");
  
  window.addEventListener("DOMContentLoaded", () => {
    displaybookData(bookData);
  });
  
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const category = e.target.dataset.id;
  
      if (category === "All") {
        displaybookData(bookData);
      } else {
        const bookgenre = bookData.filter(function (data) {
          return data.genre !== category;
        });
  
        displaybookData(bookgenre);
      }
    });
  });
  
  
  function displaybookData(books) {
    let displayData = books.map(function (cat_items, index) {
      return `<div class="books">
              <div class="image">
              <img src="${cat_items.img}"height ="300"/>
              </div>
              <div class="bdata">
              <h3 class="titles">${cat_items.title} </h3>
              <p class="date author">Author - ${cat_items.author}</p>
              <p class="date">Publisher - ${cat_items.publisher}</p>
              <p class="date">Genre - ${cat_items.genre}</p>
  
              <p class="date">Rating-${cat_items.rating}</p>
              <p class="date">ReleaseDate- ${cat_items.releaseDate}</p>
              <div class="rating" id="rating${index + 1}">
                  <span class="star" data-value="1">&#9733;</span>
                  <span class="star" data-value="2">&#9733;</span>
                  <span class="star" data-value="3">&#9733;</span>
                  <span class="star" data-value="4">&#9733;</span>
                  <span class="star" data-value="5">&#9733;</span>
              </div>
              <p class="price">${cat_items.price}</p>
              </div>
              </div>`;
    });
  
    function starrate() {
      const ratingContainers = document.querySelectorAll('.rating');
  
      ratingContainers.forEach((ratingContainer, index) => {
        const stars = ratingContainer.querySelectorAll('.star');
  
        stars.forEach(star => {
          star.addEventListener('mouseover', () => {
            const value = star.getAttribute('data-value');
            highlightStars(ratingContainer, value);
          });
  
          star.addEventListener('mouseout', () => {
            resetStars(ratingContainer);
          });
  
          star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');
            alert(`You rated this book ${value} stars!`);
          });
        });
      });
  
      function highlightStars(container, value) {
        const stars = container.querySelectorAll('.star');
        stars.forEach(star => {
          if (star.getAttribute('data-value') <= value) {
            star.style.color = 'darkorange';
          } else {
            star.style.color = 'gold';
          }
        });
      }
  
      function resetStars(container) {
        const stars = container.querySelectorAll('.star');
        stars.forEach(star => {
          star.style.color = 'gold';
        });
      }
    }
  
    displayData = displayData.join("");
    bookContainer.innerHTML = displayData;
    starrate();
  }
  
  btnsearch.addEventListener("click", (e) => {
    console.log("uh");
    let searchvalue = txtsearch.value.trim(); 
    console.log(searchvalue);
  
    if (searchvalue !== "") {
      let searchgenre = bookData.filter(function (data) {
        return data.title.includes(searchvalue) || data.genre.includes(searchvalue);
      });
  
      if (searchgenre.length > 0) { 
        displaybookData(searchgenre);
      } else {
        
        bookContainer.innerHTML = "<p>No matching books found.</p>";
      }
  
      txtsearch.value = "";
    } else {
      alert("Please search for a title or category");
    }
  });
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  


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
  // const btn = document.getElementById('today');
  //  // Open modal
  //  btn.onclick = function () {
  //   addEventForm.style.display = 'block';
  // };
  
  // var modal = document.querySelector("#modal");
  // const viewEventForm = document.querySelector("#viewEvent");
  // const addEventForm = document.querySelector("#addEvent");
  
  
  // function addeve(today){
  //   viewEventForm.style.display = "block";
  // }
  
  // function showModal(daynumm) {
  //   clicked = daynumm;
  //   const eventOfTheDay = events.find((e) => e.date == daynumm);
  //   if (eventOfTheDay) {
  //     //Event already Preset
  //     document.querySelector("#eventText").innerText = eventOfTheDay.title;
  //     viewEventForm.style.display = "block";
  //   } else {
  //     //Add new Event
  //     addEventForm.style.display = "block";
  //   }
  //   modal.style.display = "block";
  // }
  
  //Close Modal
  // function closeModal() {
  //   viewEventForm.style.display = "none";
  //   addEventForm.style.display = "none";
  //   modal.style.display = "none";
  //   clicked = null;
  //   loadCalendar();
  // }
  
  function buttons() {
    const btnBack = document.querySelector("#btnBack");
    const btnNext = document.querySelector("#btnNext");
    const btnDelete = document.querySelector("#btnDelete");
    const btnSave = document.querySelector("#btnSave");
   
    const txtTitle = document.querySelector("#txtTitle");
  
  
    // modal.addEventListener("click", closeModal);
    // closeButtons.forEach((btn) => {
    //   btn.addEventListener("click", closeModal);
    // });
    // btnDelete.addEventListener("click", function () {
    //   events = events.filter((e) => e.date !== clicked);
    //   localStorage.setItem("events", JSON.stringify(events));
    //   closeModal();
    // });
  
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
  
  var today =document.querySelectorAll(".today");
   today.forEach((today) => {
    today.addEventListener('click',function(event){
      console.log(event.target);
      event.target.style.color = 'black';
  });
  });
  
  //       var todayElements = document.querySelectorAll(".today");
  // todayElements.forEach((today) => {
  //     today.addEventListener('click',function(event){
  //         console.log(event.target);
  //         event.target.style.color = 'black';
  //     });
  // });
  
  //  
  //   
    var modal = document.querySelector("#modal");
    const buttonaddevent=document.getElementById("Eventt")
    var addEventForm = document.querySelector("#addEvent");
    // var closeButtons = document.querySelectorAll(".btnClose");
    buttonaddevent.addEventListener('click',function(e){
      console.log("clicked");
      modal.style.display="block"
      addEventForm.style.display="block"
      
    })
    // closeButtons.addEventListener('click',function(clickk){
    //   console.log("clicked 1");
    //   addEventForm.style.display="none" 
    // })
    var closeButtons = document.querySelectorAll(".btnClose");
    closeButtons.forEach((btn) => {
      btn.addEventListener('click', function(clickk){
        console.log("clicked 1");
        addEventForm.style.display="none" 
        modal.style.display="none"
      })
    });
  
  //   function save(){
  //     localStorage.setItem("data",list.innerHTML);
  // }
  // function show(){
  //     list.innerHTML=localStorage.getItem("data");
  // }
  // show();
  // const addEventTitle = document.querySelector("#eventTitle")
  // const addEventRE = document.querySelector("#reminder")
  // const addEventDate = document.querySelector("#eventDate")
  
  // const addEventType = document.querySelector("#eventType")
  // const btnSave = document.querySelector("#btnSave");
  // btnSave.addEventListener("click", () => {
  //   console.log("li")
  //   const eventTitle = addEventTitle.value;
  //   const eventTimeDate = addEventDate.value;
  //   const eventTimeRE = addEventRE.value;
  //   const EventType= addEventType.value;
  
  //   if (eventTitle === "" || eventTimeDate === "" || eventTimeRE === ""|| EventType === "") {
  //     alert("Please fill all the fields");
  //     return;
  //   }
  // });
  
  // //function to save events in local storage
  // function saveEvents() {
  //   localStorage.setItem("events", JSON.stringify(eventsArr));
  // }
  
  // //function to get events from local storage
  // function getEvents() {
  //   //check if events are already saved in local storage then return event else nothing
  //   if (localStorage.getItem("events") === null) {
  //     return;
  //   }
  //   eventsArr.push(...JSON.parse(localStorage.getItem("events")));
  // }
  
  
  // function registerEvent() {
  // const eventDate = document.getElementById('eventDate').value;
  // const eventTitle = document.getElementById('eventTitle').value;
  // const eventType = document.getElementById('eventType').value;
  // const reminder = document.getElementById('reminder').checked;
  
  //     if (eventDate && eventTitle && eventType) {
  //       const event = {
  //         date: eventDate,
  //         name: eventTitle,
  //         type: eventType,
  //         Reminder:reminder
  //       };
    
        
  //       saveEvent(event);
  //     // Clear form fields
  //     document.getElementById('eventDate').value = '';
  //     document.getElementById('eventTitle').value = '';
  //     document.getElementById('eventType').value = '';
  //     document.getElementById('reminder').value = '';
  
  //     // Reload events
  //     loadEvents();
      
  //   }
  // }
  //       function saveEvent(event) {
  //         let events = JSON.parse(localStorage.getItem('events')) || [];
  //         events.push(event);
  //         localStorage.setItem('events', JSON.stringify(events));
  //       }
  
  
  