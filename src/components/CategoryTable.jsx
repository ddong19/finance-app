import React from 'react'

function CategoryTable({ category }) {
  return (
    <div className="category-table" style={{ flex: 1, minWidth: 220, maxWidth: 320 }}>
      <table style={{ width: '100%', textAlign: 'center' }}>
        <thead>
          <tr>
            <th style={{ textDecoration: 'underline'}}>Subcategory</th>
          </tr>
        </thead>
        <tbody>
          {category.subcategories.map((subcategory) => (
            <tr key={subcategory.name}>
              <td>{subcategory.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryTable