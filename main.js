console.log("testing, testing");

//STUDENT ARRAY
const students = [
  {
    id: 1,
    name: "Chocolate Frog",
    house: "SLYTHERIN",
    image: "https://i.ytimg.com/vi/nV9IEQbRufE/maxresdefault.jpg"
  },
  {
    id: 2,
    name: "Hedwig",
    house: "GRYFFINDOR",
    image: "https://images.unsplash.com/photo-1500373994708-4d781bd7bd15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    name: "Fluffy",
    house: "RAVENCLAW",
    image: "https://images.saymedia-content.com/.image/t_share/MTc2Mjk0MjYxMjIxMjM3OTMz/harry-potter-fluffy.jpg"
  },
  {
    id: 4,
    name: "Argus Filch",
    house: "HUFFLEPUFF",
    image: "https://pm1.narvii.com/6133/37385c3eed76a1accda8a88bf29b44a11ed0a621_00.jpg"
  }
];

//EXPELLED ARRAY
const expelledStudents = [];


//RENDER TO DOM UTILITY FUNCTION
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};



// ******************** //
// ****** DELETE ****** //
// ******************** //




//GET EXPELLED STUDENT CARDS ON DOM
const expelledCardsOnDom = (array) => {
  let domString = "";
  for (const student of array) {
    domString += `<div class="card" id="voldy-card" style="width: 18rem;">
    <img src="https://www.gannett-cdn.com/-mm-/1d10b02c47124839540f95461e99b239519c4db7/c=364-0-2508-1206/local/-/media/2017/02/09/USATODAY/usatsports/vol4.jpg?width=2144&height=1206&fit=crop&format=pjpg&auto=webp" class="card-img-top" alt="placeholder hedwig">
    <div class="card-header">MERLIN'S BEARD!</div>
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">has joined team voldy</p>
    </div>
  </div>`
  }

  renderToDom("#expelled-cards", domString);
};


//EXPEL A STUDENT
const expelStudent = (event) => {
  //if the id includes "expel"
  if (event.target.id.includes("expel")) {
    // get that object id off of our target ID
    const [, studentId] = event.target.id.split("--");
    // Use it to find the index of the object
    const studentIndex = students.findIndex(
      (student) => Number(studentId) === student.id
    );

    // splice that object out of the array
    const expelledStudent = students.splice(studentIndex, 1);

    // push our student into the expelledStudents array
    expelledStudents.unshift(expelledStudent);

    // Render both of our arrays! Expelled and regular.
      expelledCardsOnDom(expelledStudents);
      cardsOnDom(students);
  }

};

//GET CARDS ON DOM
const cardsOnDom = (array) => {
  let domString = "";
  for (const student of array) {

    domString += `<div class="card" id="${student.house}-card" style="width: 18rem;">
    <img src="${student.image}" class="card-img-top" alt="placeholder hedwig">
    <div class="card-header">${student.house}!</div>
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">"wingardium leviosa"</p>
      <button class="btn btn-danger" id="expel--${student.id}">Expel</button>
    </div>
  </div>`
  }

  renderToDom("#sorted-cards", domString);

//EVENT LISTENER FOR EXPEL BUTTON
document.querySelector("#sorted-cards").addEventListener('click', expelStudent);
};

cardsOnDom(students);



//GET FORM ON DOM
const formOnDom = () => {
  let domString = `<form id="student-form">
  <div class="mb-3">
    <label for="name-input" class="form-label">Student's Name</label>
    <input type="text" class="form-control" id="name-input" required>
  </div>
  <button type="submit" id="sort-btn" class="btn btn-primary">SORT ME</button>
</form>`;

  renderToDom("#form", domString);
};


//HOUSE RANDOMIZER//
const houseRandomizer = () => {

  const house = Math.floor(Math.random() * 4);

  switch (house) {
    case 0:
      return "GRYFFINDOR";
      break;
    case 1:
      return "SLYTHERIN";
      break;
    case 2:
      return "HUFFLEPUFF";
      break;
    case 3:
      return "RAVENCLAW";
      break;
  };

  return house;

}






// //IMAGE RANDOMIZER
// const imageRandomizer = () => {

//   switch (house) {
//     case "GRYFFINDOR":
//       return `house crests/gryffindor-crest.jpg`;
//       break;
//     case "SLYTHERIN":
//       return `house crests/slytherin-crest.jpg`;
//       break;
//     case 2: "HUFFLEPUFF"
//       return `house crests/hufflepuff-crest.jpg`;
//       break;
//     case 3: "RAVENCLAW"
//       return `house crests/ravenclaw-crest.jpg`;
//       break;
//   };

// }






// ******************** //
// ****** CREATE ****** //
// ******************** //

//TARGET FORM ON THE DOM
const form = document.querySelector("#form");

//GRAB FORM VALUES ON BUTTON CLICK AND ADD TO students ARRAY
const newStudent = (e) => {
  e.preventDefault();

  const newStudentObj = {
    id: students.length + 1,
    name: document.querySelector("#name-input").value,
    house: houseRandomizer(),
    image: "https://images.unsplash.com/photo-1500373994708-4d781bd7bd15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  }

students.unshift(newStudentObj);
cardsOnDom(students);
document.querySelector("form").reset();


};


form.addEventListener('submit', newStudent);





//EVENTS

//TARGET START BUTTON ON DOM
const showForm = document.querySelector("#hello-btn");
//SHOW FORM ON DOM WITH BUTTON CLICK
showForm.addEventListener('click', () => {
  console.log("you clicked a button");
  formOnDom();
});



// ******************** //
// ****** FILTER ****** //
// ******************** //

// function to filter students by house
const filter = (array, houseString) => {
  const filteredArray = [];

  for (const student of students) {
    if (student.house === houseString) {
      filteredArray.push(student);
    }
  }

  return filteredArray;
}


// 1. Target buttons on the DOM
const showGryffindor = document.querySelector("#gryffindor-btn");
const showHufflepuff = document.querySelector("#hufflepuff-btn");
const showRavenclaw = document.querySelector("#ravenclaw-btn");
const showSlytherin = document.querySelector("#slytherin-btn");
const showAll = document.querySelector("#all-btn");

// 2. Add click event to show all the houses on button click using the function we created above
showAll.addEventListener('click', () => {
  cardsOnDom(students);
});

// 3. Add click event to filter by house on button click
showGryffindor.addEventListener('click', () => {
  const gryffindor = filter(students, "GRYFFINDOR");
  cardsOnDom(gryffindor);
})

showHufflepuff.addEventListener('click', () => {
  const hufflepuff = filter(students, "HUFFLEPUFF");
  cardsOnDom(hufflepuff);
})

showRavenclaw.addEventListener('click', () => {
  const ravenclaw = filter(students, "RAVENCLAW");
  cardsOnDom(ravenclaw);
})

showSlytherin.addEventListener('click', () => {
  const slytherin = filter(students, "SLYTHERIN");
  cardsOnDom(slytherin);
})
