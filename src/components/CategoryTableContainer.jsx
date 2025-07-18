import React from 'react';
import CategoryTable from './CategoryTable.jsx';

function CategoryTableContainer({ categories, onAddSubcategoryClick, onDeleteSubcategoryClick }) {

  return (
    <div
      style={{
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        gap: '30px',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
      }}
    >
      {categories.map((category) => (
        <div key={category.id} style={{ flex: 1, minWidth: 220, maxWidth: 320 }} >
          <h2>{category.name}</h2>
          <CategoryTable category={category} onDeleteSubcategoryClick={onDeleteSubcategoryClick} />

          <button 
            onClick={() => {
              onAddSubcategoryClick(category.id)
            }}
            style={{ marginTop: '10px'}}>
            + Add Subcategory
          </button>

        </div>
      ))}

    </div>
  );
}

export default CategoryTableContainer;
