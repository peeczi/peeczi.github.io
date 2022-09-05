import './css/App.css';
import Outlook from './assets/outlook.svg';
import GitHub from './assets/github.svg';
import LinkedIn from './assets/linkedin.svg';
import { createContext, useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './routes/home/home';
import Budget from './routes/budget/budget';
import Errands from './routes/errands/errands';
import Fuel from './routes/fuel/fuel';
import sources from './data/fuel.json';
import resume from './data/resume.json';

export const MealContext = createContext();

function App() {

    // Introduction
    const [showContent, setShowContent] = useState(false);
    const intro = {
      type: "intro",
      title: "Hi,",
      body: ["I'm Peter, lover of cats, art & computers.", "Exploring different ideas is where my attention gravitates toward. Discovering new paths to expand for greater good. Creating imaginative functions in fun form."]
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

// console.log(`contentType %c${Object.entries(contentType)}`, 'color:orange');

    const contactDetails = {
      type: "link",
      title: "Contact",
      body: [
        <a className="link" href="http://www.outlook.com"><img className="contact-logo" alt="Outlook link" src={Outlook}/></a>,
        <a className="link" href="https://www.linkedin.com/in/peter-czerniak-48030b83/"><img className="contact-logo" alt="LinkedIn link" src={LinkedIn}/></a>,
        <a className="link" href="https://peeczi.github.io/"><img className="contact-logo" alt="GitHub" src={GitHub}/></a>
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
        console.log(`content selected: ${contentSelect}`);
        setShowContent(true);
        switch(contentSelect) {
            case 'skills':
                console.log("switch case: skills");
                setContentType(codingSkills);
                break;
            case 'projects':
                console.log("switch case: projects");
                setContentType(projects);
                break;
            case 'resume':
                console.log("switch case: resume");
                setContentType(resume);
                break;
            case 'contact':
                console.log("switch case: contact");
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
      "home": [{"bed":900},{"bed":900},{"bed":900},{"bed":900},{"bed":900}],
      "school": [{"square":14}],
      "medical": [{"band-aids":5}],
      "work": [{"laptop":1200}],
      "car": [{"engine oil":50}],
      "leisure": [{"shoes":180}],
      "other": [{"rope":99}]
    });

    const [bills, setBills] = useState({
      "tuition": {
        "amount": 273.52,
        "due date": 1
      },
      "phone": {
        "amount": 97,
        "due date": 21
      },
      "car insurance": {
        "amount": 160,
        "due date": 8
      },
      "visa": {
        "amount": 60,
        "due date": 15
      }
    })

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

    const xpTotal = calculateExpenseTotal();

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
          // console.log(`%c category: ${Object.values(category)} `,"background-color:green; color:yellow");
          expenseTotal += Number(Object.values(category));
          // console.log(`%c expenseTotal:${expenseTotal} `, "background-color:green; color:yellow");
          return expenseTotal;
        })
        return expenseTotalCalc[expenseTotalCalc.length-1];
      });
      
        const remainder = expenseTotal - budget;
        // console.log(`expenseTotal: ${expenseTotal}  remainder: ${remainder}`);
        return expenseTotal;
    }
    
    const expenseTotal = calculateExpenseTotal();

    // console.log(`calculateRemainder(): ${calculateRemainder()}`);
    // console.log(`calculateExpenseTotal(): ${expenseTotal}`);

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

  const mealElements = {
    str:
    [
  "Meal",
  "Area",
  "Category",
  "Ingredient1 - n",
  "Measure1 - n",
  "Instructions",
  "MealThumb",
  "Source",
  "Tags",
  "Youtube"
  ]
  }
  // meal elements
  // str:
  // Meal
  // Area
  // Category
  // Ingredient1 - n
  // Measure1 - n
  // Instructions
  // MealThumb
  // Source
  // Tags
  // Youtube

  const changeIngredientTarget = (event) => {
    const ingredientTarget = event.target.value;
    if (event.key === 'Enter') {
      setIngredient(ingredientTarget);
      console.log("ingredient entered");
      console.log('ingredients changed to true');
      setLove("...NOMNOMNOMmmmMUAH");
    }
    
  }

  function fetchRandoMeal() {
    fetch(randomMealUrl)
    .then(response => response.json())
    .then(response => {
      console.log(`Object.entries(response.meals): ${Object.entries(response.meals[0])}`);
      console.log(response.meals[0]);
      console.log(response.meals[0].strMeal);
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
      'X-RapidAPI-Key': 'fb77eca58bmsh09053d92aa715e9p1e1e37jsnc326434a9fd3',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };

  if (ingredient) {
    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${ingredient}&number=5&ignorePantry=true&ranking=1`, options)
      .then(response => response.json())
      .then(response => {
        console.log(`response: %c${response[0]}`, "color:yellow");
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
  // const [scrollable, setScrollable] = useState(false);

  // function removeScroll() {
  //   setScrollable(false);
  // }

  // function addScroll() {
  //   setScrollable(true);
  // }

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

    console.log(`errandTaskItem: ${errandTaskItem}`);
    console.log(`errandDueDate ${errandDueDate}`);
    console.log(`errandCategory ${errandCategory}`)

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
          intro={intro}
          onChange={changeContent} 
          showContent={showContent}
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
          bills={bills}
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
          // scrollable={scrollable}
          // removeScroll={removeScroll}
          // addScroll={addScroll}
          />} />
      <Route 
        path="fuel" 
        element={
        // <MealContext.Provider value={meal}>
        <Fuel 
          meal={meal} 
          randoMeal={randoMeal} 
          ingredient={ingredient} 
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
