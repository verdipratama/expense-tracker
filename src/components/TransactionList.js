import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
  // const context = useContext(GlobalContext);
  // console.log(context);

  // Destruction all transactions
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(trans => (
          <Transaction transaksi={trans} key={trans.id} />
        ))}
      </ul>
    </>
  );
};
