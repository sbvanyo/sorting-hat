console.log("testing, testing");

//STUDENT ARRAY
let students = [
  {
    id: 1,
    name: "Bellatrix",
    house: "SLYTHERIN"
  }
];

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
    <label for="student-input" class="form-label">First Year's Name</label>
    <input type="text" class="form-control" id="student-input" required>
  </div>
  <button type="submit" id="submit-button" class="btn btn-primary">SORT ME</button>
</form>`;

  renderToDom("#form", domString);
};


//TARGET FORM ON THE DOM
const form = document.querySelector("#student-form");

//GRAB FORM VALUES ON BUTTON CLICK AND ADD TO students ARRAY
const newStudent = (e) => {
  console.log("submit button clicked");
  e.preventDefault();
}
//   const newStudentObj = {
//     id: students.length + 1,
//     name: document.querySelector("#student-input").value,
//     house: 
//   }

// students.unshift(newStudentObj);
// cardsOnDom(students);
// form.reset();
// }




// // // ADD NEW STUDENT //
// const cardsOnDom = (array) => {
//   let domString = "";
//   for (const student of array) {
//     domString += `<div class="card" style="width: 18rem;">
//     <img src="..." class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     </div>
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item">An item</li>
//     </ul>
//     <div class="card-body">
//       <button href="#" class="card-link">Card link</button>
//     </div>
//   </div>`;
//   }
  
//   renderToDom("#sorted-cards", domString);
// }

// cardsOnDom(students);





//EVENTS

//TARGET START BUTTON ON DOM
const showForm = document.querySelector("#hello-button");

//SHOW FORM ON DOM WITH BUTTON CLICK
showForm.addEventListener('click', () => {
  console.log("you clicked a button");
  formOnDom();
})

// //ADD EVENT LISTENER TO FORM SUBMIT W/ CALLBACK FUNCTION
// form.addEventListener('submit', newStudent);
