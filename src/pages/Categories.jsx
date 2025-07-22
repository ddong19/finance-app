import CategoryTableContainer from '../components/CategoryTableContainer'
import ModalForm from '../components/NewCategoryModal';
import { addSubcategory, fetchCategories, deleteSubcategory } from '../apis/Categories'
import { useEffect, useState } from 'react'
import ConfirmDialog from '../components/ConfirmDialog';

function Categories() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)

    const [showModal, setShowModal] = useState(false);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    const [deleteConfirmation, setDeleteConfirmation] = useState(false)
    const [subcategoryId, setSubcategoryId] = useState(null)
    const [subcategoryName, setSubcategoryName] = useState('')

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

    const onDeleteSubcategoryClick = (subcategoryId, subcategoryName) => {
        setDeleteConfirmation(true)
        setSubcategoryId(subcategoryId)
        setSubcategoryName(subcategoryName)
      }
    
      const handleCloseDelete = () => {
        setDeleteConfirmation(false)
        setSubcategoryId(null)
        setSubcategoryName('')
      }
    
      const handleDelete = async() => {
        try {
          await deleteSubcategory(subcategoryId)
          await getCategories();
        } catch (error) {
          alert(error)
        } finally {
          setDeleteConfirmation(false)
          setSubcategoryId(null)
          setSubcategoryName('')
        }
      }

    return(
        <div>
            <h1>Your Categories</h1>
            <CategoryTableContainer categories={categories} onAddSubcategoryClick={handleOpenModal} onDeleteSubcategoryClick={onDeleteSubcategoryClick} />
            {showModal && <ModalForm onClose={handleCloseModal} onSubmit={handleSubmit}/>}
            {deleteConfirmation && <ConfirmDialog message={"Are you sure you want to delete: " + subcategoryName} onConfirm={handleDelete} onCancel={handleCloseDelete}/>}
        </div>
    )
}

export default Categories