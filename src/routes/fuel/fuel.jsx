import '../../css/fuel.styles.css';
import FuelIn from './fuel-in.component';
import FuelOut from './fuel-out.component';
import Main from '../../components/main.component';

function Fuel({ 
  ingredient, 
  meal, 
  randoMeal, 
  fetchRandoMeal, 
  love, 
  changeIngredientTarget, 
  sources, 
  minerals, 
  fetchMinerals,
  showIngredient,
  random
}) {
// const {strArea, strMeal, strCategory, strInstructions} = meal;

  return (
    <div className="fuel-depot">
      <Main />
      <h1 className="fuel-title">Fuel up on...</h1>
      <FuelIn 
        ingredient={ingredient} 
        changeIngredientTarget={changeIngredientTarget} 
        fetchRandoMeal={fetchRandoMeal}
        fetchMinerals={fetchMinerals}
      />
      
      <FuelOut 
        meal={meal}
        randoMeal={randoMeal} 
        ingredient={ingredient}
        sources={sources}
        minerals={minerals}
        showIngredient={showIngredient}
        random={random}
      />
      
      <p className="final-inspirational">{love}</p>
    </div>
  )
}

export default Fuel