import '../css/budget.styles.css';
import Main from '../components/main.component';
import Transition from 'react-transition-group/Transition';

function Budget({ 
        budget, 
        expense, 
        showBudgetInfo, 
        showExpenseInfo,
        expandCategoryExpenses,
        showAllCategories,
        focusCategory,
        showFocusCategory,
        bills, 
        expenseItemRef, 
        expenseAmountRef, 
        expenseCategoryRef, 
        budgetEnter, 
        handleBudgetSubmit, 
        handleExpenseSubmit, 
        onExpenseChangeHandler, 
        expenseTotal,
        calculateCategorySubtotal
    }) {

  return (
    <div id="budget-body">
        <Main />
        <h1 className="project-title">No Budgin' With My Budgetin'</h1>
        <div id="input-form">
            <form className="budget-form" name="budge-form" onSubmit={handleBudgetSubmit}>
                <input 
                    type="text" 
                    id="budget-input" 
                    name="budget"
                    placeholder="Budget" 
                    onKeyUp={budgetEnter}
                />
            </form> 
            <form onSubmit={handleExpenseSubmit}>
                {/* <p>EXPENSE</p> */}
                <input 
                    type="text" 
                    id="expense-item-input-field" 
                    name="expenseItem"
                    ref={expenseItemRef}
                    placeholder="Item"
                    style={{
                        minWidth: `${expenseItemRef.length}rem`
                    }}
                />
                <input 
                    type="text" 
                    id="expense-amount-input-field" 
                    name="expenseAmount"
                    ref={expenseAmountRef}
                    placeholder="AMOUNT"
                />
                <select name="expense-category" id="expense-category-select" ref={expenseCategoryRef} onChange={onExpenseChangeHandler}>
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
        {/* display budget amount */}
        <Transition in={showBudgetInfo} timeout={1000} mountOnEnter unmountOnExit>
            {/* {state => console.log(`state: ${state}`)}; */}
            {state => (
                <div 
                    className="current-variable-info" 
                    style={{
                        transition: "opacity 1s ease-out", 
                        opacity: state === 'exiting' ? 0 : 1
                    }}
                >
                    <span>
                        <div id="budget-amount">
                            ${budget}
                        </div>
                        <p className="budget-caption">BUDGET</p>
                    </span>
                </div>
            )}
        </Transition>
        {/* display expense total */}
        <Transition in={showExpenseInfo} timeout={3000} mountOnEnter unmountOnExit>
            {state => (
                <div
                    className="current-variable-info" 
                    style={{
                        opacity: state === 'exiting' ? 0 : 1
                    }}
                >
                    <span>
                        <div id="expense-total">
                            ${expenseTotal}
                        </div>
                        <p className="budget-caption">EXPENSE TOTAL</p>
                    </span>
                </div>
            )}
        </Transition>
        {/* display remainder from budget - expense total */}
        <Transition in={showBudgetInfo && showExpenseInfo} timeout={1000} mountOnEnter unmountOnExit>
            {state => (
                <div 
                    className="current-variable-info"
                    style={{
                        transition: "opacity 2s ease-out",
                        opacity: state === "exiting" ? 0 : 1
                    }}
                >
                    <span>
                        <div id="remainder">
                            {(budget - expenseTotal) > 0 ? `$${budget - expenseTotal}` : `- $${Math.abs(budget - expenseTotal)}`}
                        </div>
                        <p className="budget-caption">REMAINDER</p>
                    </span>
                </div>
            )}
        </Transition>
        {/* show expense sub totals amongst all categories */}
        
        <Transition in={showExpenseInfo} timeout={1000} mountOnEnter unmountOnExit>
            <div id="expense-content">
                {/* display all categories and their respective totals */}
                {showAllCategories &&
                <>
                    {Object.entries(expense).map((expenses, index) => (
                        <div className="expense-category-list">
                            <p 
                                key={index} 
                                id={expenses[0]}
                                className="expense-category-output"
                                onClick={expandCategoryExpenses}
                            >
                                {(calculateCategorySubtotal(expenses[1]) > 0) ? expenses[0] : null}
                            </p>
                            <p key={index} className="expense-category-output-total">
                                {(calculateCategorySubtotal(expenses[1]) > 0) ? `$${calculateCategorySubtotal(expenses[1])}` : null}
                            </p>
                        </div>
                    ))}
                </>
                }
                {/* show summary of selected category */}
                {showFocusCategory &&
                <div id="expense-list">
                    <p className="expense-category-output" onClick={expandCategoryExpenses}>{focusCategory}</p>
                    {expense[focusCategory].map((expenseFocusItem, index) => {
                        if (Object.entries(expenseFocusItem).length > 0){
                            return <div  className="expense-category-item" key={index}>
                                    <p>{Object.keys(expenseFocusItem)}</p>
                                    <p>${Object.values(expenseFocusItem)}</p>
                                </div>
                        }
                        })
                    }
                </div>
                }
            </div>
        </Transition>
    </div>
  )
}


export default Budget