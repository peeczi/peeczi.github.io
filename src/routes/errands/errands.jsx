import React from 'react';
import Ibeam from '../../assets/i-cursor.svg';
import HandPointer from '../../assets/hand-pointer.svg';
import Main from '../../components/main.component';
import '../../css/errands.styles.css';
import { RemoveScroll } from 'react-remove-scroll';

function Errands({ errands, errandCategory, errandDueDateInput, errandTaskInput, categoryChange, onErrandUpdate}) {
  // scrollable, addScroll, removeScroll, 
  return (
    <div className="errands">
      <Main />
      <h1 className="errands-title">Airin My Errands</h1>
      {/* HOME */}
      <div className="inp">
        <span>
          {/* onMouseOver={removeScroll} onMouseOut={addScroll} */}
        <form id="errand-input" onSubmit={onErrandUpdate}>
          {/* {scrollable && */}
          {/* <RemoveScroll> */}
            <h2 
              className="errand-category" 
              onWheel={categoryChange}
            >
              {errandCategory}
            </h2>
          {/* </RemoveScroll> */}
          {/* } */}
          <img
            className="type-symbol"
            alt="I beam icon"
            src={Ibeam}
          />
          <input
            type="text"
            className="errand-input"
            placeholder="errand"
            id="errand-task"
            ref={errandTaskInput}
            // value={ingredient}
          />
        
          <img
            className="type-symbol"
            alt="finger pointing icon"
            src={HandPointer}
          />
          <input 
            type="date" 
            className="errand-input" 
            id="task-due-date"
            ref={errandDueDateInput}
          />
          <button type="submit" id="add-errand-button">ADD</button>
        </form>
        </span>
      </div>

    <div className="outp">
      <div id="errands-to-do">
        {/* <ul> */}
          {Object.entries(errands[errandCategory]).map((errand, index) => {
          return <pre key={index}><p>{Object.keys(errand[1])} {'      '} {Object.values(errand[1])}</p></pre>
          })}
        {/* </ul> */}
      </div>
    </div>


    </div>
  )
}

export default Errands