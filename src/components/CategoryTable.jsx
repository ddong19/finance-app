import React from 'react'
import '../css/CategoryTable.css'

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
    <div className="category-table">
      <h2>{category.name}</h2>
      <table>
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