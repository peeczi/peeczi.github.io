import '../css/budget.styles.css';
import Main from '../components/main.component';

function Budget({ budget, expense, bills, expenseItemRef, expenseAmountRef, expenseCategoryRef, budgetEnter, handleBudgetSubmit, handleExpenseSubmit, onExpenseChangeHandler, expenseTotal}) {
    
    const renderExpenses =  Object.entries(expense).map((expenses, index) => {
        console.log(`expenses[0], expenses[1][0]: ${expenses[0]} ${Object.entries(expenses[1][0])}`);
        return Object.entries(expenses[1][0]);
    })

  return (
    <div id="budget-body">
        <div className="project-head">
            <Main />
            <h2 className="project-title">No Budgin' With My Budget</h2>
        </div>
        <div id="input-form">
            <form className="budget-form" name="budge-form" onSubmit={handleBudgetSubmit}>
                <input 
                    type="text" 
                    id="budget-input" 
                    name="budget" 
                    // value={budget}
                    placeholder="Budget" 
                    onKeyUp={budgetEnter}
                />
            </form> 
            <form onSubmit={handleExpenseSubmit}>
                {/* <p>EXPENSE</p> */}
                <input 
                    type="text" 
                    id="expense-item" 
                    name="expenseItem"
                    ref={expenseItemRef}
                    placeholder="Item"
                />
                <input 
                    type="text" 
                    id="expense-amount" 
                    name="expenseAmount"
                    ref={expenseAmountRef}
                    placeholder="AMOUNT"
                />
                  <select name="expense-category" id="expense-category" ref={expenseCategoryRef} onChange={onExpenseChangeHandler}>
                    <option value="home">Home</option>
                    <option value="car">Car</option>
                    <option value="medical">Medical</option>
                    <option value="school">School</option>
                    <option value="work">Work</option>
                    <option value="leisure">Leisure</option>
                    <option value="other">Other</option>
                </select>
                <button type="submit" id="expense-entry-button">- $</button>
            </form>
        </div>
        <div id="current-info">
            {/* &#9730; */}
        {budget &&
        <>
            <span>
                <div id="budget-amount">
                    ${budget}
                </div>
                <p className="budget-caption">BUDGET</p>
            </span>
        </>
        }
        {expenseTotal &&
        <>
            <span>
                <div id="expense-total">
                    ${expenseTotal}
                </div>
                <p className="budget-caption">EXPENSE TOTAL</p>
            </span>
            </>
        }
        {budget && expenseTotal &&
        <>
            <span>
                <div id="remainder">
                        {(budget - expenseTotal) > 0 ? `$${budget - expenseTotal}` : `- $${Math.abs(budget - expenseTotal)}`}
                </div>
                    <p className="budget-caption">REMAINDER</p>
            </span>
        </>
        }
        </div>
            <div className="expense-entry">
                <ul>
                    {Object.entries(expense).map((expenses, index) => {
                        return <li 
                        key={index} 
                        id={`${expenses[0]}-expenses`}
                        className="expense-category-output"
                        >{expenses[0]}</li>
                    })}
                </ul>
            <div className="expenses-list">
                <ul>
                    {/* {Object.entries(expense).map((expenses, index) => {
                        return <li 
                        key={index} 
                        className={`${expenses[0]}-expense-item expense-item`}>{Object.keys(expenses[1][0])} {Object.values(expenses[1][0])}</li>
                    })} */}
                    
                      {expense.home.map((expenses, index) => {
                          return <li
                              key={index}
                              className={`home-expense-item expense-item`}>{Object.keys(expenses)} {Object.values(expenses)}</li>
                      })}
                  </ul>
                  <ul>
                      {expense.school.map((expenses, index) => {
                          return <li
                              key={index}
                              className={`school-expense-item expense-item`}>{Object.keys(expenses)} {Object.values(expenses)}</li>
                      })}
                  </ul>
                  <ul>
                      {expense.medical.map((expenses, index) => {
                          return <li
                              key={index}
                              className={`medical-expense-item expense-item`}>{Object.keys(expenses)} {Object.values(expenses)}</li>
                      })}
                  </ul>
                  <ul>
                      {expense.work.map((expenses, index) => {
                          return <li
                              key={index}
                              className={`work-expense-item expense-item`}>{Object.keys(expenses)} {Object.values(expenses)}</li>
                      })}
                  </ul>
                  <ul>
                      {expense.car.map((expenses, index) => {
                          return <li
                              key={index}
                              className={`car-expense-item expense-item`}>{Object.keys(expenses)} {Object.values(expenses)}</li>
                      })}
                  </ul>
                  <ul>
                      {expense.leisure.map((expenses, index) => {
                          return <li
                              key={index}
                              className={`leisure-expense-item expense-item`}>{Object.keys(expenses)} {Object.values(expenses)}</li>
                      })}
                    </ul>
                    <ul>
                      {expense.other.map((expenses, index) => {
                          return <li
                              key={index}
                              className={`other-expense-item expense-item`}>{Object.keys(expenses)} {Object.values(expenses)}</li>
                      })}
                </ul>
            </div>
            </div>
        {/* } */}
        {/* <ul>
            {Object.entries(bills).map((bill) => {
                const billz = bill.map((billToPay, index) => {
                    return <li key={index}>{Object.values(bill)}: {Object.entries(billToPay)}</li>
                })
                return billz;
            })}
        </ul> */}
    </div>
  )
}


export default Budget