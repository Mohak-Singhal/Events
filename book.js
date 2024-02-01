

const bookData = [
  {
    id: 1,
    title: "Da Vinci Code,The",
    author: "Brown, Dan",
    publisher: "Transworld",
    genre: "Non-fiction",
    rating: 0,
    releaseDate: "21 Dec 2024",
    img: "download (6).jpeg",
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
    img: "download.jpeg",
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
    img: "download (1).jpeg",
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
    img: "download (2).jpeg",
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
    img: "download (5).jpeg",
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
   img:"download (7).jpeg",
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
    img: "download (3).jpeg",
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
    img: "download (4).jpeg",
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

// function displaybookData(books) {
//   let displayData = books.map(function (cat_items) {
//     return `<div class="books">
//             <div class="image">
//             <img src="${cat_items.img}" alt=""/>
//             </div>
//             <div class="info">
//             <h3 class="title">${cat_items.title} </h3>
//             <p class="date author">Author - ${cat_items.author}</p>
//             <p class="date">Publisher - ${cat_items.publisher}</p>
//             <p class="date">Genre - ${cat_items.genre}</p>

//             <p class="date">Rating-${cat_items.rating}</p>
//             <p class="date">ReleaseDate- ${cat_items.releaseDate}</p>
//             <div class="rating" id="rating">
//     <span class="star" data-value="1">&#9733;</span>
//     <span class="star" data-value="2">&#9733;</span>
//     <span class="star" data-value="3">&#9733;</span>
//     <span class="star" data-value="4">&#9733;</span>
//     <span class="star" data-value="5">&#9733;</span>
// </div>
//             <p class="price">${cat_items.price}</p>
//             </div>
//             </div>`;
//   });
//   function starrate() {
//     const ratingContainer = document.getElementById('rating');
//     const stars = ratingContainer.querySelectorAll('.star');
  
//     stars.forEach(star => {
//         star.addEventListener('mouseover', () => {
//             const value = star.getAttribute('data-value');
//             highlightStars(value);
//         });
  
//         star.addEventListener('mouseout', () => {
//             resetStars();
//         });
  
//         star.addEventListener('click', () => {
//             const value = star.getAttribute('data-value');
//             alert(`You rated this book ${value} stars!`);
//         });
//     });
  
//     function highlightStars(value) {
//         stars.forEach(star => {
//             if (star.getAttribute('data-value') <= value) {
//                 star.style.color = 'darkorange';
//             } else {
//                 star.style.color = 'gold';
//             }
//         });
//     }
  
//     function resetStars() {
//         stars.forEach(star => {
//             star.style.color = 'gold';
//         });
//     }
//   }
  
//   displayData = displayData.join("");
//   bookContainer.innerHTML = displayData;
//   starrate()
// }
// btnsearch.addEventListener("click", (e) => {
//   console.log("uh");
//   let searchvalue = txtsearch.value;
//   console.log(searchvalue)
//   if (searchvalue !== "") {
//     let searchgenre = bookData.filter(function (data) {
//       if (data.title.includes(searchvalue)) {
//         return data;
//       } else if (data.category.includes(searchvalue)) {
//         return data;
//       }
//     });

//     if (searchgenre) {
//       displaybookData(bookData);
//     }
//     txtsearch.value = "";
//   } else {
//     alert("Please searh title or category");
//   }
// });

function displaybookData(books) {
  let displayData = books.map(function (cat_items, index) {
    return `<div class="books">
            <div class="image">
            <img src="${cat_items.img}"height ="300"/>
            </div>
            <div class="info">
            <h3 class="title">${cat_items.title} </h3>
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
  let searchvalue = txtsearch.value.trim(); // Trim to remove leading/trailing spaces
  console.log(searchvalue);

  if (searchvalue !== "") {
    let searchgenre = bookData.filter(function (data) {
      return data.title.includes(searchvalue) || data.genre.includes(searchvalue);
    });

    if (searchgenre.length > 0) { // Check if the search results are not empty
      displaybookData(searchgenre);
    } else {
      // Display a message when there are no search results
      bookContainer.innerHTML = "<p>No matching books found.</p>";
    }

    txtsearch.value = "";
  } else {
    alert("Please search for a title or category");
  }
});
// const allStars = document.querySelectorAll('.star');
// console.log(allStars);
// allStars.forEach((star,i)=>{
//   star.onclick = function(){
//     console.log(star);
//     let current_star_level = i+1;
//     allStars.forEach((star,j)=>{
//       console.log(j+1)
//     })

//   }
// })
// z



































// const bookData = [
//   {
//     id: 1,
//     title: "Da Vinci Code,The",
//     author: "Brown, Dan",
//     publisher: "Transworld",
//     genre: "Non-fiction",
//     rating: 0,
//     releaseDate: "21 Dec 2024",
//     img: "download (6).jpeg",
//     price: "free",
//   },
//   {
//     id: 2,
//     title: "Harry Potter and the Deathly Hallows",
//     author: "Rowling, J.K.",
//     publisher: "Bloomsbury",
//     genre: "Fiction",
//     rating: 0,
//     releaseDate: "21 Dec 2024",
//     img: "download.jpeg",
//     price: "free",
//   },
//   {
//     id: 3,
//     title: "Harry Potter and the Philosopher's Stone",
//     author: "Rowling, J.K.",
//     publisher: "Bloomsbury",
//     genre: "Fiction",
//     rating: 0,
//     releaseDate: "21 Dec 2024",
//     img: "download (1).jpeg",
//     price: "free",
//   },
//   {
//     id: 4,
//     title: "Harry Potter and the Order of the Phoenix",
//     author: "Rowling, J.K.",
//     publisher: "Bloomsbury",
//     genre: "Fiction",
//     rating: 0,
//     releaseDate: "21 Dec 2024",
//     img: "download (2).jpeg",
//     price: "free",
//   },
//   {
//     id: 21,
//     title: "The Catcher in the Rye",
//     author: "Salinger, J.D.",
//     publisher: "Little, Brown and Company",
//     genre: "Fiction",
//     rating: 4.2,
//     releaseDate: "15 May 2024",
//     img: "download (5).jpeg",
//     price: "$14.99",
//   },
//   {
//     id: 26,
//     title: "The Fault in Our Stars",
//     author: "Green, John",
//     publisher: "Dutton Books",
//     genre: "Fiction",
//     rating: 4.7,
//     releaseDate: "23 Aug 2024",
//     img: "download (7).jpeg",
//     price: "$13.99",
//   },
//   {
//     id: 28,
//     title: "The Hunger Games",
//     author: "Collins, Suzanne",
//     publisher: "Scholastic Press",
//     genre: "Fiction",
//     rating: 4.5,
//     releaseDate: "20 Oct 2024",
//     img: "download (3).jpeg",
//     price: "$12.99",
//   },
//   {
//     id: 29,
//     title: "The Martian",
//     author: "Weir, Andy",
//     publisher: "Crown Publishing Group",
//     genre: "Fiction",
//     rating: 4.8,
//     releaseDate: "25 Nov 2024",
//     img: "download (4).jpeg",
//     price: "$16.99",
//   },
// ];

// const links = document.querySelectorAll(".button");
// const bookContainer = document.querySelector(".book_wrapper");
// const btnsearch = document.querySelector(".btnsearch");
// const txtsearch = document.querySelector(".search");

// window.addEventListener("DOMContentLoaded", () => {
//   displaybookData(bookData);
// });

// links.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     const category = e.target.dataset.id;

//     if (category === "All") {
//       displaybookData(bookData);
//     } else {
//       const bookgenre = bookData.filter((data) => data.genre !== category);
//       displaybookData(bookgenre);
//     }
//   });
// });

// function displaybookData(books) {
//   let displayData = books.map((cat_items, index) => {
//     return `<div class="books">
//             <div class="image">
//             <img src="${cat_items.img}" height="300"/>
//             </div>
//             <div class="info">
//             <h3 class="title">${cat_items.title} </h3>
//             <p class="date author">Author - ${cat_items.author}</p>
//             <p class="date">Publisher - ${cat_items.publisher}</p>
//             <p class="date">Genre - ${cat_items.genre}</p>
//             <p class="date">Rating-${cat_items.rating}</p>
//             <p class="date">ReleaseDate- ${cat_items.releaseDate}</p>
//             <div class="rating" id="rating${index + 1}">
//                 <span class="star" data-value="1">&#9733;</span>
//                 <span class="star" data-value="2">&#9733;</span>
//                 <span class="star" data-value="3">&#9733;</span>
//                 <span class="star" data-value="4">&#9733;</span>
//                 <span class="star" data-value="5">&#9733;</span>
//             </div>
//             <p class="price">${cat_items.price}</p>
//             </div>
//             </div>`;
//   });

//   function starrate() {
//     const ratingContainers = document.querySelectorAll('.rating');

//     ratingContainers.forEach((ratingContainer, index) => {
//       const stars = ratingContainer.querySelectorAll('.star');

//       stars.forEach((star) => {
//         star.addEventListener('mouseover', () => {
//           const value = star.getAttribute('data-value');
//           highlightStars(ratingContainer, value);
//         });

//         star.addEventListener('mouseout', () => {
//           resetStars(ratingContainer);
//         });

//         star.addEventListener('click', () => {
//           const value = star.getAttribute('data-value');
//           alert(`You rated this book ${value} stars!`);
//         });
//       });
//     });

//     function highlightStars(container, value) {
//       const stars = container.querySelectorAll('.star');
//       stars.forEach((star) => {
//         if (star.getAttribute('data-value') <= value) {
//           star.style.color = 'darkorange';
//         } else {
//           star.style.color = 'gold';
//         }
//       });
//     }

//     function resetStars(container) {
//       const stars = container.querySelectorAll('.star');
//       stars.forEach((star) => {
//         star.style.color = 'gold';
//       });
//     }
//   }

//   displayData = displayData.join("");
//   bookContainer.innerHTML = displayData;
//   starrate();
// }

// btnsearch.addEventListener("click", (e) => {
//   console.log("uh");
//   let searchvalue = txtsearch.value.trim();
//   console.log(searchvalue);

//   if (searchvalue !== "") {
//     let searchgenre = bookData.filter((data) =>
//       data.title.includes(searchvalue) || data.genre.includes(searchvalue)
//     );

//     if (searchgenre.length > 0) {
//       displaybookData(searchgenre);
//     } else {
//       bookContainer.innerHTML = "<p>No matching books found.</p>";
//     }

//     txtsearch.value = "";
//   } else {
//     alert("Please search for a title or category");
//   }
// });
