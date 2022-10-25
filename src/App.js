import './css/App.css';
// import Outlook from './assets/outlook.svg';
import Email from './assets/email.svg';
import GitHub from './assets/github.svg';
import LinkedIn from './assets/linkedin.svg';
import { createContext, useState, useEffect, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './routes/home';
import Budget from './routes/budget';
import Errands from './routes/errands';
import Fuel from './routes/fuel/fuel';
import sources from './data/fuel.json';
import resume from './data/resume.json';

export const MealContext = createContext();

function App() {

    // Introduction
    
    const intro = {
      type: "intro",
      title: "Hi,",
      body: ["I'm Peter, lover of cats, art & computers.", "Exploring different ideas is where my attention gravitates.", "Venturing through new territories of interactivity to enhance life for greater good.", "Creating imaginative functions in fun forms."]
    }
    const [contentType, setContentType] = useState(intro);

    const codingSkills = {
      type: "list",
      title: "Skills",
      body: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "CLI",
          "Python",
          "SQL"
      ]
    }

    const contactDetails = {
      type: "link",
      title: "Contact",
      body: [
        <a className="mailtoui" href="mailto:peterpczerniak@outlook.com" target="_blank" rel="noreferrer noopener"><img className="contact-logo" alt="email symbol" src={Email}/><span className="tooltip-text">peterpczerniak@outlook.com</span></a>,
        <a className="contact-link" href="https://www.linkedin.com/in/peter-czerniak-48030b83/" target="_blank"><img className="contact-logo" alt="LinkedIn link" src={LinkedIn}/></a>,
        <a className="contact-link" href="https://github.com/peeczi/peeczi.github.io" target="_blank"><img className="contact-logo" alt="GitHub" src={GitHub}/></a>
      ]
    };

    const projects = {
      type: "list",
      title: "Projects",
      body: [
        <Link className="link-item" to="/fuel">Fuel Up On...</Link>,
        <Link className="link-item" to="/errands">Airin' My Errands</Link>,
        <Link className="link-item" to="/budget">No Budgin' with My Budget</Link>
      ]
    }

    const changeContent = (event) => {
        const contentSelect = event.target.id;
        switch(contentSelect) {
          case 'profile-pic':
                setContentType(intro);
                break;
            case 'skills':
                setContentType(codingSkills);
                break;
            case 'projects':
                setContentType(projects);
                break;
            case 'resume':
                setContentType(resume);
                break;
            case 'contact':
                setContentType(contactDetails);
                break;
            default:
                console.error("Switch case error");
        }
    }

    // NO BUDGIN' WITH MY BUDGET
    const [budget, setBudget] = useState();
    const [showBudgetInfo, setShowBudgetInfo] = useState(false);
    const [showExpenseInfo, setShowExpenseInfo] = useState(false);
    const [showAllCategories, setShowAllCategories] = useState(false);
    const [showFocusCategory, setShowFocusCategory] = useState(false);
    const [focusCategory, setFocusCategory] = useState();
    const expenseItemRef = useRef();
    const expenseAmountRef = useRef();
    const expenseCategoryRef = useRef();

    // const [expense, setExpense] = useState({
    //     "home": [{"soap": 6}, {"floor mat": 7}, {"throw": 8}],
    //     "school": [{"ruler": 5}, {"folders": 7}, {"eraser": 8}],
    //     "medical": [{"syringe": 4}, {"band aids": 7}, {"gauze": 8}],
    //     "work": [{"computer": 9}, {"calculator": 7}, {"binder": 8}],
    //     "car": [{"engine oil": 19}, {"coolant": 27}, {"filter": 38}],
    //     "leisure": [{"tennis racket": 200}, {"athletic shorts": 47}, {"shoes": 180}],
    //     "other": [{"twine": 6}, {"container": 7}, {"magnet": 18}]
    //   });

    const [expense, setExpense] = useState({
      "home": [{}],
      "school": [{}],
      "medical": [{}],
      "work": [{}],
      "car": [{}],
      "leisure": [{}],
      "other": [{}],
      "test": [{}]
    });

    // feature to add: bill payments
    // const [bills, setBills] = useState({
    //   "tuition": {
    //     "amount": 273.52,
    //     "due date": 1
    //   },
    //   "phone": {
    //     "amount": 97,
    //     "due date": 21
    //   },
    //   "car insurance": {
    //     "amount": 160,
    //     "due date": 8
    //   },
    //   "visa": {
    //     "amount": 60,
    //     "due date": 15
    //   }
    // })

    // set first category added to focusCategory

    // useEffect(() => {
      // Object.entries(expense).map((expenses, index) => (
        // console.log(`%cEXPENSES: ${Object.entries(expenses)}`,'color:yellow') 
        // console.log(`%cEXPENSES: ${Object.values(expenses[1])}`,'color:yellow') 
        // calculateCategorySubtotal(expenses[1]) === undefined ? console.log('undefined muthafucka') : setFocusCategory(expenses[0])
        
        // calculateCategorySubtotal(expenses[1]) === undefined ? console.log('undefined muthafucka') : console.log(` expenses: ${expenses} subtotal: ${calculateCategorySubtotal(expenses[1])}`)
        // console.log(calculateCategorySubtotal(expenses[1]))
    //   ))
    // },[])

    

    // function defaultExpenseView() {
    //   Object.entries(expense).map((expenses, index) => (
       
    //   ))
    // }

    const budgetEnter = (event) => {
      event.preventDefault();
        const budgetAmount = event.target.value;
        if (event.key === "Enter" && budgetAmount > 0) {
          setBudget(budgetAmount);
          setShowBudgetInfo(true);
        }
    }

    const handleBudgetSubmit = (event) => {
      event.preventDefault();
      setBudget("");
    }

  // add expense entry
    const handleExpenseSubmit = (event) => {
      event.preventDefault();
      
      const expenseCategory = String(expenseCategoryRef.current.value);

      let xpItem = expenseItemRef.current.value;
      let xpAmount = Number(expenseAmountRef.current.value);


      // if index 0 is blank, setExpense[0]
      console.log(`inside handleExpenseSubmit; expense.${expenseCategory}[0]: %c${Object.entries(expense[expenseCategory][0])}`,'color:green');
      console.log(`expense.${expenseCategory}[0]: %c${Object.entries(expense[expenseCategory][0])}`,'color:red');
      
      // if (Object.entries(expense[expenseCategory][0]).length === 0) {
      //   console.log(`HIIIIII!!! expense.${expenseCategory}[0]: %c${Object.entries(expense[expenseCategory][0]).length}`,'color:red');
      //   if (xpItem !== '' && xpAmount > 0){
      //     setExpense(prevExpense => ({
      //       ...prevExpense,
      //       [expenseCategory]:
      //       [{[xpItem]:xpAmount}]
      //     }))
      //   }
      // }
      console.log("%cSETEXPENSE COMPLETE",'color:orange');
      if (xpItem !== '' && xpAmount > 0){
        // SET EXPENSE ACCORDING TO
        if (Object.entries(expense[expenseCategory][0]).length === 0) {
          console.log(`HIIIIII!!! expense.${expenseCategory}[0]: %c${Object.entries(expense[expenseCategory][0]).length}`,'color:red');
          
            setExpense(prevExpense => ({
              ...prevExpense,
              [expenseCategory]:
              [{[xpItem]:xpAmount}]
            }))
          
        } else {
          setExpense(prevExpense => ({
          ...prevExpense,
          [expenseCategory]:  [
            ...prevExpense[expenseCategory],
              {[xpItem]:xpAmount}
            ]
        }))}
        setShowExpenseInfo(true);
        
        if (showAllCategories === false && showFocusCategory === false && focusCategory === undefined){
          setShowFocusCategory(true);
          setFocusCategory(expenseCategory);
        }
      }
    }

    function calculateCategorySubtotal(expenseCategory) {
      console.log(`inside calculateCategorySubtotal(expenseCategory); Object.entries(expenseCategory[0]): %c${Object.entries(expenseCategory[0])}`,'color:yellow');
      console.log(`inside calculateCategorySubtotal(expenseCategory); Object.entries(expenseCategory): %c${Object.entries(expenseCategory)}`,'color:yellow');

      console.log(`inside calculateCategorySubtotal(expenseCategory); Object.entries(expenseCategory).length: %c${Object.entries(expenseCategory).length}`,'color:yellow');

      console.log(`inside calculateCategorySubtotal(expenseCategory); Object.entries(expenseCategory): %c${Object.entries(expenseCategory)}`,'color:yellow');
      if (Object.entries(expenseCategory[0]).length > 0){
        let subtotal = 0;
        Object.values(expenseCategory).map((expenseCategoryExpense) => {
          subtotal += Number(Object.values(expenseCategoryExpense));
          console.log(`subtotal: ${subtotal}`);
          return subtotal;
        })
        return subtotal;
      } 
    }

    // console.log(`calculateCategorySubtotal(expense.home) ${calculateCategorySubtotal(expense.home)}`);

    function calculateExpenseTotal() {
      let expenseTotal = 0;
      Object.entries(expense).map((expenseCategory) => {
        const expenseTotalCalc = Object.values(expenseCategory[1]).map((category) => {
          expenseTotal += Number(Object.values(category));
          return expenseTotal;
        })
        return expenseTotalCalc[expenseTotalCalc.length-1];
      });
        return expenseTotal;
    }
    
    const expenseTotal = calculateExpenseTotal();

    function expandCategoryExpenses(event) {
      const expenseCategoryExpand = event.target.id;
      setShowFocusCategory(prevState => !prevState);
      setShowAllCategories(prevState => !prevState);
      setFocusCategory(expenseCategoryExpand);
    }

    // FUEL
    const [randoMeal, setRandoMeal] = useState();
    const [random, setRandom] = useState(false);
    const [meal, setMeal] = useState();
    const [ingredient, setIngredient] = useState();
    const [showIngredient, setShowIngredient] = useState(false);
    const [love, setLove] = useState("...LOVE");
    const foodSources = sources.energy;
    const [minerals, setMinerals] = useState(false);

    // MEALDB RANDOM MEAL
  const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

    const changeIngredientTarget = (event) => {
    const ingredientTarget = event.target.value;
    if (event.key === 'Enter') {
      setIngredient(ingredientTarget);
      setLove("...NOMNOMNOMmmmMUAH");
    }
    
  }

  function fetchRandoMeal() {
    fetch(randomMealUrl)
    .then(response => response.json())
    .then(response => {
      setRandoMeal(response.meals[0]);
      setRandom(true);
      setMinerals(false);
      setShowIngredient(false);
    })
    .catch(err => console.error(err));
    
    setLove("...milosc");
  }

  function fetchMinerals() {
    setMinerals(true);
    setShowIngredient(false);
    setRandom(false)
    setLove("...J'adore tu");
  }

  // SPOONACULAR RECIPE BY INGREDIENT
  useEffect(() => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_SPOONACULAR_API_KEY,
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };

  if (ingredient) {
    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${ingredient}&number=5&ignorePantry=true&ranking=1`, options)
      .then(response => response.json())
      .then(response => {
        setMeal(response);
        setMinerals(false);
        setRandom(false)
        setShowIngredient(true);
      })
      .catch(err => console.error(err));
  }

  },[ingredient])

  // ERRANDS
  const [errands, setErrands] = useState({
      "home": [{"furnace":"2022-24-08"}],
      "school": [{"parent teacher meeting":"2022-25-08"}],
      "medical": [{"doctor appointment":"2022-11-09"}],
      "work": [{"interview":"2022-11-09"}],
      "car": [{"spark plug installation":"2022-11-09"}],
      "leisure": [{"sign up for wall climbing":"2022-11-09"}],
      "other": [{"sharpen chef knife":"2022-11-09"}]
    });
  const errandCategories = ["home", "school", "medical", "work", "car", "leisure",
      "other"];
  const errandTaskInput = useRef();
  const errandDueDateInput = useRef();
  const [scrollCount, setScrollCount] = useState(0);
  const [errandCategory, setErrandCategory] = useState("home");

  function categoryChange(){
    if (scrollCount === 6) {
      setScrollCount(0);
    } else {
      const scroll = scrollCount + 1;
      setScrollCount(scroll)
    }
    setErrandCategory(errandCategories[scrollCount]);
  }

  function onErrandUpdate(event) {
    event.preventDefault();

    let errandTaskItem = errandTaskInput.current.value;
    let errandDueDate = errandDueDateInput.current.value;

    setErrands(prevErrands => ({ 
      ...prevErrands,
      [errandCategory]: [
        ...prevErrands[errandCategory],
        {[errandTaskItem]:errandDueDate}
      ]
    }))
  }
  

  return (
    <Routes>
      <Route 
        path="/" 
        element={
        <Home
          onChange={changeContent}
          contentType={contentType}
          resume={resume}
        />}
      />
      <Route 
        path="budget" 
        element={
        <Budget 
          budget={budget}
          expense={expense}
          // bills={bills}
          expenseTotal={expenseTotal}
          expenseItemRef={expenseItemRef}
          expenseAmountRef={expenseAmountRef}
          expenseCategoryRef={expenseCategoryRef}
          budgetEnter={budgetEnter}
          showBudgetInfo={showBudgetInfo}
          showExpenseInfo={showExpenseInfo}
          calculateCategorySubtotal={calculateCategorySubtotal}
          expandCategoryExpenses={expandCategoryExpenses}
          showAllCategories={showAllCategories}
          showFocusCategory={showFocusCategory}
          focusCategory={focusCategory}
          handleBudgetSubmit={handleBudgetSubmit}
          handleExpenseSubmit={handleExpenseSubmit}
        />}
      />
      <Route 
        path="errands" 
        element={
        <Errands 
          errands={errands}
          errandCategory={errandCategory}
          categoryChange={categoryChange}
          onErrandUpdate={onErrandUpdate}
          errandTaskInput={errandTaskInput}
          errandDueDateInput={errandDueDateInput}
          />} 
      />
      <Route 
        path="fuel" 
        element={
        // <MealContext.Provider value={meal}>
        <Fuel 
          meal={meal} 
          randoMeal={randoMeal} 
          changeIngredientTarget={changeIngredientTarget} 
          love={love} 
          fetchRandoMeal={fetchRandoMeal}
          sources={foodSources}
          minerals={minerals}
          fetchMinerals={fetchMinerals}
          showIngredient={showIngredient}
          random={random}
        />
      // </MealContext.Provider>
        } 
      />
        
      {/* </Route> */}
    </Routes>
  );
}

export default App;
