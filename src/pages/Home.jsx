import BudgetTableContainer from '../components/BudgetTableContainer.jsx'
import DateSelector from '../components/DateSelector.jsx'
import { fetchTransactions } from '../apis/Transactions.js'
import { useEffect, useState } from 'react'


function Home() {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(false)

  const getTransactions = async () => {
      setLoading(true)
      try {
          const transactions = await fetchTransactions(2024, 12)
          setTransactions(transactions)
      } catch(error){
          console.error("Error fetching transactions: ", error)
      } finally{
          setLoading(false)
      }
  }

  useEffect(() => {
      getTransactions()
  }, [])
  

  return (
    <div>
      <h1>Daniel's Finance Tracker</h1>
      <DateSelector />
      <BudgetTableContainer transactions={transactions} />
    </div>
  );
}

export default Home
