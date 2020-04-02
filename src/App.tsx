import React from 'react';
import range from './range.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        Накопление на Range Rover Vogue 3-го поколения
      </h1>

      <img src={range} alt='Так выглядит мечта' className='rangeImg' />

      <h2 className='rangeSumm'>
        { `${parseFloat('70000').toLocaleString()} ₽` } / { `${parseFloat('600000').toLocaleString()} ₽` }
      </h2>
    </div>
  );
}

export default App;
