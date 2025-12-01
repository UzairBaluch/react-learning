import React, { useState } from "react";  
import "./App.css";

const App = () => {

  // 'count' holds the current counter value
  // 'setCount' updates the counter value
  const [count, setCount] = useState(0);

  // 'countToSet' stores the number entered in the input field
  const [countToSet, setCountToSet] = useState(0);


  //-----------------------------//
  //    HANDLERS (BUTTON LOGIC)  //
  //-----------------------------//

  // Increase counter by 1 , and 5
  const icrementHandler = () => {
    setCount(count + 1);
  };
    const icrementHandlerByFIve = () => {
    setCount(count + 5);
  };

  // Decrease counter by 1, and 5, but only if it's above 0
  // Prevents negative numbers
  const decrementHandler = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const decrementHandlerByFive = () => {
    if (count > 0) {
      setCount(count - 5);
    }
  };

  // Reset counter back to 0
  const resetHandler = () => {
    setCount(0);
  };


  //----------------------------------//
  //          JSX RETURN UI           //
  //----------------------------------//

  return (
    <div>
      <h1>Counter</h1>

      {/* Shows the current count value */}
      <div>
        <h4>Count is {count}</h4>
      </div>

      {/* Buttons for Increase, Decrease, Reset */}
      <div className="btn-group">
        <button
          className="btn increase"
          onClick={() => {
            icrementHandler(); // Call increase function
          }}
        >
          Increase
        </button>

            <button
          className="btn increase five"
          onClick={() => {
            icrementHandlerByFIve(); // Call increase function
          }}
        >
          Increase by 5
        </button>
        

        <button
          className="btn decrease"
          onClick={() => {
            decrementHandler(); // Call decrease function
          }}
        >
          Decrease
        </button>

          <button
          className="btn decrease five"
          onClick={() => {
            decrementHandlerByFive(); // Call decrease function
          }}
        >
          Decrease by 5
        </button>

        <button
          className="btn reset"
          onClick={() => {
            resetHandler(); // Call reset function
          }}
        >
          Reset
        </button>
      </div>


      {/* Input + Set Count Section */}
      <div className="input-section">

        {/* Input box for typing any number you want to set the counter to */}
        <input
          className="count-input"
          value={countToSet}   // Shows the currently typed value
          onChange={(e) => {   // Updates state every time the user types
            setCountToSet(Number(e.target.value));
          }}
          type="text"
        />

        {/* Button to set the counter to whatever number was typed */}
        <button
          className="btn set-btn"
          onClick={() => {
            setCount(countToSet); // Set counter to input value
          }}
        >
          Set to {countToSet}
        </button>
      </div>
    </div>
  );
};

export default App;
