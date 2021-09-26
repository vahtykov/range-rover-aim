import React, { useState, useEffect } from 'react';
import range from './range.jpg';
import './App.css';

function App() {
  const [_salary, _setSalary] = useState(65000);
  const [_moneyNow, _setMoneyNow] = useState(108000);
  const [_roverPrice, _setRoverPrice] = useState(1300000);

  return (
    <div className="App">
      <h1>
        Накопление на Range Rover Vogue 3-го поколения
      </h1>

      <img src={range} alt='Так выглядит мечта' className='rangeImg' />

      <h2 className='rangeSumm'>
        { `${_moneyNow.toLocaleString()} ₽` } / { `${_roverPrice.toLocaleString()} ₽` }
      </h2>

      <h3>До RR Vogue, при зп { `${_salary.toLocaleString()} ₽` } в месяц, осталось: { ((_roverPrice - _moneyNow)/_salary).toFixed(1) } месяцев</h3>

      <label>
        Накоплений сейчас:
        <input value={_moneyNow} onChange={(e) => _setMoneyNow(parseInt(e.target.value))} className='input' type='number' />
      </label>
      <br />
      <br />
      <label>
        Текущая зп в месяц:
        <input value={_salary} onChange={(e) => _setSalary(parseInt(e.target.value))} className='input' type='number' />
      </label>
    </div>
  );
}

export default App;
