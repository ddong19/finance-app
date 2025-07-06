import React from 'react';
import CategoryTable from './CategoryTable.jsx';

function CategoryTableContainer({ categories }) {
  return (
    <div style={{
      display: 'flex',
      gap: '30px',           // space between tables
      justifyContent: 'center', // center the row
      flexWrap: 'wrap'       // allow wrapping on small screens
    }}>
      {categories.map((category) => (
        <CategoryTable key={category.id} category={category} />
      ))}
    </div>
  );
}

export default CategoryTableContainer; 