import { useState } from 'react'
import './App.css'
import CategoryTableRow from './components/CategoryTableRow.jsx'
import DateSelector from './components/DateSelector.jsx'

function App() {
  const categoryTypes = ['Income', 'Needs', 'Wants', 'Savings', 'Tithe'];

  return (
    <div>
      <h1>Finance Tracker</h1>
      <DateSelector />
      <CategoryTableRow categories={categoryTypes} />
    </div>
  );
}

export default App
