import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaksi }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaksi.amount < 0 ? '-' : '+';

  return (
    <li className={transaksi.amount < 0 ? 'minus' : 'plus'}>
      {transaksi.text}{' '}
      <span>
        {sign}Rp.{Math.abs(transaksi.amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(transaksi.id)}>
        x
      </button>
    </li>
  );
};
