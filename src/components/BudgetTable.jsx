import React from 'react';
import '../css/CategoryTable.css';

function BudgetTable( {categoryType}) {
    const fakeData = [
        { name: 'Rent', expected: 1200, actual: 1150 },
        { name: 'Groceries', expected: 500, actual: 480 },
        { name: 'Utilities', expected: 200, actual: 210 },
    ];

  return (
    <div className="category-table">
      <h2>{categoryType}</h2>
      <table>
        <thead>
            <tr>
                <th>Category</th>
                <th>Expected</th>
                <th>Actual</th>
            </tr>                
        </thead>
        <tbody>
          {fakeData.map((item) => {
            return (
              <tr key={item.name}>
                <td>{item.name}</td>
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