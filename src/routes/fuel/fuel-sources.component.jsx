import React from 'react'
import FuelSource from './fuel-source.component';
import '../../css/fuel.styles.css';

function FuelSources({sources}) {

// console.log(`sources: ${Object.entries(sources)}`);
console.log(sources);

  return (
    <div className="fuel-source">
        
    {/* <div> */}
      <h3 className="fuel-sources-title">Fuel Sources of Minerals</h3>
        {sources.map((source, index) => {
          return <FuelSource
            key={source.id}
            id={`element${index}`}
            element={source.element}
            benefits={source.benefits}
            amount={source.amount}
            rate={source.rate}
            caution={source.caution ? source.caution : "no caution"}
            source={source.source}
            />
            // <p key={source.id}>{source}</p>
        })}
    {/* </div> */}

{/* todo: meal by ingredient from minerals */}
      {/* <div className="mineral">
        {mineral &&
          <>
            <h4><u>{mineral.strMeal}</u></h4>
            <p>{mineral.strArea} / {mineral.strCategory}</p>
            <p>{mineral.strInstructions}</p>
          </>
        }
      </div> */}

      </div>
    )
  }
  
  export default FuelSources
