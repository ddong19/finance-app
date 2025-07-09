import CategoryTableContainer from '../components/CategoryTableContainer'
import { fetchCategories } from '../apis/Categories'
import { useEffect, useState } from 'react'

function Categories() {
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

    return(
        <div>
            <h1>This is the categories page</h1>
            <CategoryTableContainer categories={categories}/>
        </div>
    )
}

export default Categories