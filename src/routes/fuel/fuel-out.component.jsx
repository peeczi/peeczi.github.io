import React, {useContext} from 'react';
import FuelSources from './fuel-sources.component';
import MealContext from '../../App';
import '../../css/fuel.styles.css';

function FuelOut({ meal, randoMeal, random, showIngredient, minerals, sources}) {

    return (
    <div className="fuelout">
        {
        random &&
            <div className="randoMeal">
                <h4 id="randoMeal-name"><u>{randoMeal.strMeal}</u></h4>
                <p id="randoMeal-area-category">{randoMeal.strArea} / {randoMeal.strCategory}</p>
                <p id="randoMeal-instructions">{randoMeal.strInstructions}</p>
            </div>
        }

        {
        showIngredient &&
            <div className="ingredientMeal">
                {meal.map((dish, index) => {
                    return <div key={index} className="ingredientMealItem">
                        <h4 className="dish-title"><u>{dish.title}</u></h4>
                        <img
                            className="meal-img"
                            alt={dish.title}
                            src={dish.image}
                            />
                        </div>
                })}
            </div>
        }

        {
        minerals &&
            <div>
                <FuelSources sources={sources} />
            </div>
        }
    </div>
    )
};

export default FuelOut;