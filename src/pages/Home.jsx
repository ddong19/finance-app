import BudgetTableContainer from '../components/BudgetTableContainer.jsx'
import DateSelector from '../components/DateSelector.jsx'

function Home() {
  const categoryTypes = ['Income', 'Needs', 'Wants', 'Savings', 'Tithe'];

  return (
    <div>
      <h1>Daniel's Finance Tracker</h1>
      <DateSelector />
      <BudgetTableContainer categories={categoryTypes} />
    </div>
  );
}

export default Home
