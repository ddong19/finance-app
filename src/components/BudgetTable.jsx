import React from 'react';
import '../css/CategoryTable.css';

function BudgetTable( {category}) {

  return (
    <div className="category-table">
      <h2>{category.categoryName}</h2>
      <table>
        <thead>
            <tr>
                <th>Category</th>
                <th>Expected</th>
                <th>Actual</th>
            </tr>                
        </thead>
        <tbody>
          {category.subcategories.map((item) => {
            return (
              <tr key={item.subcategoryId}>
                <td>{item.subcategoryName}</td>
                <td>${item.expected}</td>
                <td>${item.actual}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BudgetTable;