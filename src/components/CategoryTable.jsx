import React, { useState } from 'react'

function CategoryTable({ category, onDeleteSubcategoryClick }) {

  return (
    <div className="category-table" style={{ flex: 1, minWidth: 220, maxWidth: 320 }}>
      <table style={{ width: '100%', textAlign: 'center' }}>
        <tbody>
          {category.subcategories.map((subcategory) => (
            <tr key={subcategory.id} style={{ position: 'relative'}}>
              <td style={{ position: 'relative' }}>
                {subcategory.name}
                <button onClick={() => {onDeleteSubcategoryClick(subcategory.id, subcategory.name)}} 
                        className="delete-btn"
                        style={{ 
                          position: 'absolute',
                          top: '-1px',
                          right: '-2px',
                          color: '#ff4d4d',
                          cursor: 'pointer',
                        }}>
                X
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>
        {`
          .delete-btn {
            opacity: 0;
            transition: opacity 0.2s ease;
          }

          .category-table tr:hover .delete-btn {
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
}

export default CategoryTable