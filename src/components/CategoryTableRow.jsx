import React from 'react';
import CategoryTable from './CategoryTable.jsx';

function CategoryTableRow({ categories }) {
  return (
    <div style={{
      display: 'flex',
      gap: '30px',           // space between tables
      justifyContent: 'center', // center the row
      flexWrap: 'wrap'       // allow wrapping on small screens
    }}>
      {categories.map((catType) => (
        <CategoryTable key={catType} categoryType={catType} />
      ))}
    </div>
  );
}

export default CategoryTableRow;