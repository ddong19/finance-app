import BudgetTableContainer from '../components/BudgetTableContainer.jsx'
import DateSelector from '../components/DateSelector.jsx'
import { fetchCategories } from '../apis/Categories'
import { useEffect, useState } from 'react'


function Home() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  const getCategories = async () => {
      setLoading(true)
      try {
          const categories = await fetchCategories()
          setCategories(categories)
      } catch(error){
          console.error("Error fetching categories: ", error)
      } finally{
          setLoading(false)
      }
  }

  useEffect(() => {
      getCategories()
  }, [])
  

  return (
    <div>
      <h1>Daniel's Finance Tracker</h1>
      <DateSelector />
      <BudgetTableContainer categories={categories} />
    </div>
  );
}

export default Home
