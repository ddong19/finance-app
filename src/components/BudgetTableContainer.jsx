import React from 'react';
import BudgetTable from './BudgetTable.jsx';

function BudgetTableContainer({ categories }) {
  return (
    <div style={{
      display: 'flex',
      gap: '30px',           // space between tables
      justifyContent: 'center', // center the row
      flexWrap: 'wrap'       // allow wrapping on small screens
    }}>
      {categories.map((catType) => (
        <BudgetTable key={catType} categoryType={catType} />
      ))}
    </div>
  );
}

export default BudgetTableContainer;