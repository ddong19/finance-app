import React from 'react'

function CategoryTable({ category }) {
    const fakeData = 
        {
          "id": 1,
          "name": "Food",
          "subcategories": [
            { "name": "Groceries" },
            { "name": "Restaurants" }
          ]
        }

  return (
    <div className="category-table" style={{ flex: 1, minWidth: 220, maxWidth: 320 }}>
      <h2>{category.name}</h2>
      <table style={{ width: '100%', textAlign: 'center' }}>
        <thead>
          <tr>
            <th>Subcategory</th>
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