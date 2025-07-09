import React from 'react';
import BudgetTable from './BudgetTable.jsx';

function BudgetTableContainer({ transactions }) {
  return (
    <div style={{
      display: 'flex',
      gap: '30px',           // space between tables
      justifyContent: 'center', // center the row
      flexWrap: 'wrap'       // allow wrapping on small screens
    }}>
      {transactions.map((category) => (
        <BudgetTable key={category.categoryId} category={category} />
      ))}
    </div>
  );
}

export default BudgetTableContainer;