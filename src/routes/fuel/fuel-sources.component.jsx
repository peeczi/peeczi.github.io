import React from 'react'
import FuelSource from './fuel-source.component';
import '../../css/fuel.styles.css';

function FuelSources({sources}) {

  return (
    <div className="fuel-source">
        
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
        })}
      </div>
    )
  }
  
  export default FuelSources
