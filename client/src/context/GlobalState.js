import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -200.0 },
    { id: 2, text: 'Salary', amount: 300.0 },
    { id: 3, text: 'Book', amount: -10.0 },
    { id: 4, text: 'Camera', amount: 350.0 }
  ]
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // DELETE
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  // ADD
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTransaction, addTransaction }}
    >
      {/* // child */}
      {children}
    </GlobalContext.Provider>
  );
};
