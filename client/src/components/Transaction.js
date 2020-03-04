import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Transaction = ({ transaksi }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaksi.amount < 0 ? '-' : '+';

  return (
    <li className={transaksi.amount < 0 ? 'minus' : 'plus'}>
      {transaksi.text}{' '}
      <span>
        {sign}${numberWithCommas(Math.abs(transaksi.amount))}
      </span>
      <button onClick={() => deleteTransaction(transaksi._id)} className="delete-btn">
        x
      </button>
    </li>
  );
};
