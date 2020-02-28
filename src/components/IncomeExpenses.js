import React from 'react';

export const IncomeExpenses = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+Rp0.00</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-Rp0.00</p>
      </div>
    </div>
  );
};
