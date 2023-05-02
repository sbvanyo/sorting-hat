console.log("testing, testing");

//STUDENT ARRAY
const students = [
  {
    id: 1,
    name: "Bellatrix",
    house: "SLYTHERIN",
    image: "https://images.unsplash.com/photo-1500373994708-4d781bd7bd15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    name: "Buckbeak",
    house: "GRYFFINDOR",
    image: "https://images.unsplash.com/photo-1500373994708-4d781bd7bd15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    name: "Hedwig",
    house: "HUFFLEPUFF",
    image: "https://images.unsplash.com/photo-1500373994708-4d781bd7bd15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  }
];

//EXPELLED ARRAY
let expelled = [];

//RENDER TO DOM UTILITY FUNCTION
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};


//GET CARDS ON DOM
const cardsOnDom = (array) => {
  let domString = "";
  for (const student of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${student.image}" class="card-img-top" alt="placeholder hedwig">
    <div class="card-header">${student.house}!</div>
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">"wingardium leviosa"</p>
      <button class="btn btn-danger" id="delete--${student.id}">Expel</button>
    </div>
  </div>`
  }

  renderToDom("#sorted-cards", domString);
}

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
let gryffindor = 1;
let slytherin = 2;
let hufflepuff = 3;
let ravenclaw = 4;




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
    // house: document.querySelector(),
    // image: document.querySelector()
  }

students.unshift(newStudentObj);
cardsOnDom(students);
form.reset();

};

form.addEventListener('submit', newStudent);


// ******************** //
// ****** DELETE ****** //
// ******************** //

// 1. Target the sorted cards div
const sorted = document.querySelector("#sorted-cards");

// 2. Add an event listener to capture clicks
sorted.addEventListener('click', (e) => {
// 3. check e.target.id includes "delete"
  if(e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");
// 4. add logic to remove from array
    const index = students.findIndex(student => student.id === Number(id));
  //.splice modifies the original array
    students.splice(index, 1);
// 5. Repaint the DOM with the updated array
    cardsOnDom(students);
  }
})




//EVENTS

//TARGET START BUTTON ON DOM
const showForm = document.querySelector("#hello-btn");
//SHOW FORM ON DOM WITH BUTTON CLICK
showForm.addEventListener('click', () => {
  console.log("you clicked a button");
  formOnDom();
});


// //TARGET SORT BUTTON ON FORM
// const sortMe = document.querySelector("#sort-btn");
// // ADD EVENT LISTENER TO FORM SUBMIT W/ CALLBACK FUNCTION
// sortMe.addEventListener('submit', newStudent);
