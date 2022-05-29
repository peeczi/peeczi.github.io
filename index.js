// console.log ("Script successfully loaded index.js");

// const current = document.getElementById('current-message');

// //current.innerHTML = 'Currently under construction';

// // showcase1: No Budging with MY BUDGET!

// // budget
// var budgetInput = document.getElementById("budget");
// var budgetButton = document.querySelector(".budget-submit");


// // budget input
// budgetButton.addEventListener("click", function() {
//     console.log(`budget value: ${budgetInput.value}`);
//     var budgetInfo = document.getElementById("budget-info");
//     budgetInfo.appendChild(document.createTextNode(`Budget: $${budgetInput.value}`));
// })

// // expense input
// var leftOver = 0;
// var nextExpenseEntry = document.getElementById("expense-entry-button");

// nextExpenseEntry.addEventListener("click", function() {
//     var expenseTotal = 0;
//     var expenseP = document.getElementById("expense-entry");
//     var expenseItem = document.getElementById("expense-item");
//     var expenseAmount = document.getElementById("expense-amount");
//     var expenseCategory = document.getElementById("expense-category");
//     console.log(`expenseTotal is type of: ${typeof expenseTotal}`);
//     console.log(`expense total before: ${expenseTotal}`);
//     console.log(`expenseAmount is type of: ${typeof expenseAmount}`);
//     console.log(`expenseAmount before: ${expenseAmount.value}`);
    
//     expenseTotal = expenseTotal + expenseAmount.value;
//     console.log(`expense category: ${expenseCategory.value}`);
   
//     console.log(`expenseAmount after: ${expenseAmount.value}`);
//     console.log(`expense total after: ${expenseTotal}`);
//     //leftOver = budgetInput.value - expenseTotal;
//     expenseP.appendChild(document.createTextNode(`${expenseCategory.value}`));
//     expenseP.appendChild(document.createTextNode(`${expenseItem.value}`));
//     expenseP.appendChild(document.createTextNode(`$${expenseAmount.value}`))
// })

// // current info
// var expenseTotal = document.getElementById("expense-total");
// var fundRemaining = document.getElementById("remainder");


// NEW ADDITION
console.log("new addition successfully loaded");
const nameReveal = document.getElementById("name-reveal");
const resume = document.getElementById("resume");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const content = document.getElementById("main-text");
const peter = document.getElementById("peter");
const circleImg = document.getElementById("profile-pic");

const codingSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "CLI",
  "Python",
  "SQL",
];

const contactDetails = {
  Email: "peterpczerniak@outlook.com",
  LinkedIn: "https://www.linkedin.com/in/peter-czerniak-48030b83/",
  GitHub: "https://peeczi.github.io/",
};

function catPicPopup() {
  circleImg.style.backgroundImage = 'url("assets/cat - 360.jpg")';
}

function revealSkills() {
  const contentTitle = document.createElement("h3");
  content.textContent = "";
  content.appendChild(contentTitle);
  contentTitle.style.fontSize = "2.3rem";
  contentTitle.textContent = "Skills";

  const contentSubtitle = document.createElement("h4");
  content.appendChild(contentSubtitle);
  contentSubtitle.style.fontSize = "1.8rem";
  contentSubtitle.innerText = "Programming";

  const codingSkillsDiv = document.createElement("div");
  contentSubtitle.appendChild(codingSkillsDiv);

  const ul = document.createElement("ul");
  codingSkillsDiv.appendChild(ul);

  let li = document.createElement("li");
  ul.appendChild(li);
  li.style.fontSize = "1.3rem";

  codingSkills.map((skill) => {
    let skillElement = skill.toLocaleLowerCase();
    li = document.createElement("li");
    li.setAttribute("id", `skill-${skillElement}`);
    console.log(`skill-${skillElement}`);
    if (!li.innerText) {
      li.textContent = skill;
      console.log("if");
    } else {
      li.appendChild(document.createTextNode(skill));
      console.log("else");
    }

    console.log(`skill: ${skill}`);
  });
}

function revealProjects() {}

function revealResume() {
  content.textContent = "clicked on resume button";
}

function revealContact() {
  const contentTitle = document.createElement("div");
  content.textContent = "";
  content.appendChild(contentTitle);
  contentTitle.style.fontSize = "2.3rem";

  contentTitle.textContent = "Contact";
  const contactDetailsDiv = document.createElement("div");
  const ul = document.createElement("ul");
  content.appendChild(contactDetailsDiv);
  contactDetailsDiv.appendChild(ul);
  //let li = document.createElement("li");

  for (const property in contactDetails) {
    console.log(`${property} : ${contactDetails[property]}`);
    let li = document.createElement("li");
    if (!li.innerText) {
      ul.appendChild(li);
    }
    //let a = document.createElement("a");
    let contactDetailElement = property.toLocaleLowerCase();

    li.setAttribute("id", `contact-${contactDetailElement}`);

    console.log(`contact-${contactDetailElement}`);
    if (!contactDetailsDiv.innerText) {
      li.textContent = `${property}`;
    } else {
      li.appendChild(document.createTextNode(`${property}`));
    }
    li.href = `${contactDetails[property]}`;
  }
  // ul.appendChild(li);
}

peter.addEventListener("click", catPicPopup);
skills.addEventListener("click", revealSkills);
projects.addEventListener("click", revealProjects);
resume.addEventListener("click", revealResume);
contact.addEventListener("click", revealContact);
