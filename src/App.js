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
        // <a className="contact-link link" href="http://www.outlook.com"><img className="contact-logo" alt="Outlook link" src={Outlook}/></a>,
        // <div id="email-address" className="contact-link"><img className="contact-logo" alt="email symbol" src={Email}/><span id="email-address-tip">peterpczerniak@outlook.com</span></div>,
        <a className="contact-link" href="https://www.linkedin.com/in/peter-czerniak-48030b83/"><img className="contact-logo" alt="LinkedIn link" src={LinkedIn}/></a>,
        <a className="contact-link" href="https://peeczi.github.io/"><img className="contact-logo" alt="GitHub" src={GitHub}/></a>
      ]
    };

    const projects = {
      type: "list",
      title: "Projects",
      body: [
        <Link className="link" to="/fuel">Fuel Up On...</Link>,
        <Link className="link" to="/errands">Airin' My Errands</Link>,
        <Link className="link" to="/budget">No Budgin' with My Budget</Link>
      ]
    }

    const changeContent = (event) => {
        const contentSelect = event.target.id;
        switch(contentSelect) {
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
    const expenseItemRef = useRef();
    const expenseAmountRef = useRef();
    const expenseCategoryRef = useRef();
    useEffect(() => {
      if (budget !== undefined) {
        console.log(`budget amount: %c${budget}`, "color:green");
      }
    }, [budget])

    const [expense, setExpense] = useState({
        "home": [{}],
        "school": [{}],
        "medical": [{}],
        "work": [{}],
        "car": [{}],
        "leisure": [{}],
        "other": [{}]
      });

    // const [expense, setExpense] = useState({
    //   "home": [{"bed":800},{"table":500},{"chair":90},{"chair":90},{"chair":90}],
    //   "school": [{"square":14}],
    //   "medical": [{"band-aids":5}],
    //   "work": [{"laptop":1200}],
    //   "car": [{"engine oil":50}],
    //   "leisure": [{"shoes":180}],
    //   "other": [{"rope":99}]
    // });

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

    const budgetEnter = (event) => {
      event.preventDefault();
        const budgetAmount = event.target.value;
        
        if (event.key === "Enter" && budgetAmount > 0) {
          setBudget(budgetAmount);
        }
    }

    const handleBudgetSubmit = (event) => {
      event.preventDefault();
      console.log(`budget: %c${budget}`, "color:orangered");
      setBudget("");
    }

  // add expense entry
    const handleExpenseSubmit = (event) => {
      event.preventDefault();
      
      const expenseCategory = String(expenseCategoryRef.current.value);

      let xpItem = expenseItemRef.current.value;
      let xpAmount = Number(expenseAmountRef.current.value);

      // SET EXPENSE ACCORDING TO 
      setExpense(prevExpense => ({
        ...prevExpense,
        [expenseCategory]:  [
          ...prevExpense[expenseCategory],
            {[xpItem]:xpAmount}
          ]
      }))
    }
    
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
          />} />
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
