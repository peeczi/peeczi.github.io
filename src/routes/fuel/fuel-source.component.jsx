import React from 'react'
import '../../css/fuel.styles.css';

function FuelSource({className, element, benefits, amount, rate, caution, source}) {
  return (
    <div className={className}>
        <h3 className="mineral">{element}</h3>
        <p className="dosage">{amount} / {rate}</p>
        <ul>
          {benefits.map((benefit, index) => {
            return <li key={index}>{benefit}</li>
          })}
        </ul>
      <ul>
        {source.map((sources, index) => {
          return <li key={index}>{sources}</li>
            })}
            <p>{caution}</p>
      </ul>
    </div>
    )
  }
    
    export default FuelSource
