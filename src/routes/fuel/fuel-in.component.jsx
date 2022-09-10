import '../../css/fuel.styles.css';
import Ibeam from '../../assets/i-cursor.svg';
import HandPointer from '../../assets/hand-pointer.svg';

function FuelIn({ fetchMinerals, changeIngredientTarget, fetchRandoMeal }) {
  return (
    <div className="fuel-in">
        <img
          className="type-symbol"
          alt="type icon"
          src={Ibeam}
        />
        <input
          type="text"
          className="fuel-input"
          placeholder="ingredient"
          id="meal-by-ingredient"
          onKeyUp={changeIngredientTarget}
        />
        <button 
          type="button" 
          onClick={fetchRandoMeal} 
          className="output-button"
        >
          randoMeal
        </button>

        <img
          className="type-symbol"
          alt="finger point icon"
          src={HandPointer}
        />
        <button
          type="button"
          onClick={fetchMinerals}
          className="output-button"
        >
          minerals
        </button>
    </div>
  )
}

export default FuelIn