console.log("testing, testing");


//RENDER TO DOM UTILITY FUNCTION
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};


//GET FORM ON DOM
const formOnDom = () => {
  let domString = `<form id="student-form">
  <div class="mb-3">
    <label for="student-input" class="form-label">First Year's Name</label>
    <input type="password" class="form-control" id="student-input" required>
  </div>
  <button type="submit" id="submit-button" class="btn btn-primary">Submit</button>
</form>`;

  renderToDom("#form", domString);
};





//EVENTS

//TARGET START BUTTON ON DOM
const showForm = document.querySelector("#hello-button");

//SHOW FORM ON DOM WITH BUTTON CLICK
showForm.addEventListener('click', () => {
  console.log("you clicked a button");
  formOnDom();
})


// //GRAB FORM VALUES
// const newStudent = (taco) => {
//   taco.preventDefault();
// }
