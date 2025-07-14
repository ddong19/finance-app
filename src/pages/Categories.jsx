import CategoryTableContainer from '../components/CategoryTableContainer'
import ModalForm from '../components/NewCategoryModal';
import { addSubcategory, fetchCategories } from '../apis/Categories'
import { useEffect, useState } from 'react'

function Categories() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)

    const [showModal, setShowModal] = useState(false);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

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

    const handleOpenModal = (categoryId) => {
        setSelectedCategoryId(categoryId)
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setSelectedCategoryId(null)
        setShowModal(false)
    }

    const handleSubmit = async (name) => {
        try {
            await addSubcategory(selectedCategoryId, name);
            await getCategories();
        } catch (error) {
            console.error("Error adding subcategory:", error);
        } finally {
            setShowModal(false);
        }
    }

    return(
        <div>
            <h1>Your Categories</h1>
            <CategoryTableContainer categories={categories} onAddSubcategoryClick={handleOpenModal} />
            {showModal && <ModalForm onClose={handleCloseModal} onSubmit={handleSubmit}/>}
        </div>
    )
}

export default Categories