import BudgetTableContainer from '../components/BudgetTableContainer.jsx'
import DateSelector from '../components/DateSelector.jsx'
import { fetchTransactions } from '../apis/Transactions.js'
import { useEffect, useState } from 'react'
import { MONTH_NAME_TO_NUMBER } from '../constants/months.js'

function Home() {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(false)

  const [selectedYear, setSelectedYear] = useState(null)
  const [selectedMonth, setSelectedMonth] = useState(null)

  const getTransactions = async () => {
      if (!selectedYear || !selectedMonth) return
      const monthNumber = MONTH_NAME_TO_NUMBER[selectedMonth]
      setLoading(true)
      try {
          console.log(selectedYear)
          console.log(monthNumber)
          const transactions = await fetchTransactions(selectedYear, monthNumber)
          setTransactions(transactions)
      } catch(error){
          console.error("Error fetching transactions: ", error)
      } finally{
          setLoading(false)
      }
  }

  useEffect(() => {
      getTransactions()
  }, [selectedYear, selectedMonth])
  

  return (
    <div>
      <h1>Daniel's Finance Tracker</h1>
      <DateSelector 
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        setSelectedYear={setSelectedYear}
        setSelectedMonth={setSelectedMonth}
      />
      <BudgetTableContainer transactions={transactions} />
    </div>
  );
}

export default Home
