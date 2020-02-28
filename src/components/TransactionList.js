import React from 'react';

export default () => {
  return (
    <>
      <h3>History</h3>
      <ul id="list" class="list">
        <li class="minus">
          Cash <span>-Rp400</span>
          <button class="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
};
