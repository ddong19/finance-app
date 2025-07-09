import React from 'react';
import CategoryTable from './CategoryTable.jsx';

function CategoryTableContainer({ categories }) {
  return (
    <div
      style={{
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        gap: '30px',
        justifyContent: 'space-between', // spreads tables evenly
        flexWrap: 'wrap',
        alignItems: 'flex-start',
      }}
    >
      {categories.map((category) => (
        <CategoryTable
          key={category.id}
          category={category}
        />
      ))}
    </div>
  );
}

export default CategoryTableContainer; 