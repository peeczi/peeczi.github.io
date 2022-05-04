console.log ("Script successfully loaded index.js");

const current = document.getElementById('current-message');

//current.innerHTML = 'Currently under construction';

// showcase1: No Budging with MY BUDGET!

// budget
var budgetInput = document.getElementById("budget");
var budgetButton = document.getElementById("budget-submit");


// budget input
budgetButton.addEventListener("click", function() {
    console.log(`budget value: ${budgetInput.value}`);
    var budgetInfo = document.getElementById("budget-info");
    budgetInfo.appendChild(document.createTextNode(`Budget: $${budgetInput.value}`));
})

// expense input
var leftOver = 0;
var nextExpenseEntry = document.getElementById("expense-entry-button");

nextExpenseEntry.addEventListener("click", function() {
    var expenseTotal = 0;
    var expenseP = document.getElementById("expense-entry");
    var expenseItem = document.getElementById("expense-item");
    var expenseAmount = document.getElementById("expense-amount");
    var expenseCategory = document.getElementById("expense-category");
    console.log(`expenseTotal is type of: ${typeof expenseTotal}`);
    console.log(`expense total before: ${expenseTotal}`);
    console.log(`expenseAmount is type of: ${typeof expenseAmount}`);
    
    expenseTotal = expenseTotal + {...expenseAmount.value};
    console.log(`expense category: ${expenseCategory.value}`);
    console.log(`expense amount: ${expenseAmount.value}`);
    console.log(`expense total after: ${expenseTotal}`);
    //leftOver = budgetInput.value - expenseTotal;
    expenseP.appendChild(document.createTextNode(`${expenseCategory.value}: ${expenseItem.value} $${expenseAmount.value}`))
})

// current info
var expenseTotal = document.getElementById("expense-total");
var fundRemaining = document.getElementById("remainder");