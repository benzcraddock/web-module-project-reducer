import React, { useReducer} from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

// import reducer and initialState object
import reducer, { initialState } from './../reducers';

// import addOne action creator
// import { addOne } from './../actions';

// import action creator(s)
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  addMemory,
  recallMemory,
  clearMemory
} from './../actions';

function App() {
  // useReducer hook to get access to the application state and the dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);

  // check to see if we are getting our state:
  // console.log(state);

  // const handle1Click = () => {
  //   // test that we are executing the click on 1 button
  //   // console.log('clicking');
  //   dispatch(addOne());
  // }

  const handleNumberClick = (number) => {
    dispatch(applyNumber(number));
  }

  const handleOperationClick = (operation) => {
    dispatch(changeOperation(operation));
  }

  const handleClearClick = () => {
    dispatch(clearDisplay());
  }

  const handleMemoryAdd = () => {
    dispatch(addMemory());
  }

  // memory recall -> takes things that already exist like total and memory, does operations of those things together, puts in total and re renders new calculation
  const handleMemoryRecall = () => {
    dispatch(recallMemory());
  }

  const handleMemoryClear = () => {
    dispatch(clearMemory());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleMemoryAdd}/>
              <CalcButton value={"MR"} onClick={handleMemoryRecall}/>
              <CalcButton value={"MC"} onClick={handleMemoryClear}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleNumberClick(1)}/>
              <CalcButton value={2} onClick={() => handleNumberClick(2)}/>
              <CalcButton value={3} onClick={() => handleNumberClick(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleNumberClick(4)}/>
              <CalcButton value={5} onClick={() => handleNumberClick(5)}/>
              <CalcButton value={6} onClick={() => handleNumberClick(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleNumberClick(7)}/>
              <CalcButton value={8} onClick={() => handleNumberClick(8)}/>
              <CalcButton value={9} onClick={() => handleNumberClick(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperationClick("+")}/>
              <CalcButton value={"*"} onClick={() => handleOperationClick("*")}/>
              <CalcButton value={"-"} onClick={() => handleOperationClick("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => handleClearClick()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
