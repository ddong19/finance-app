import CategoryTableContainer from '../components/CategoryTableContainer'

function Categories() {
      const categoryTypes = [{"id":1,"name":"Income","subcategories":[{"id":1,"name":"Base Pay"},{"id":2,"name":"401k"},{"id":3,"name":"HSA"}]},{"id":2,"name":"Needs","subcategories":[{"id":4,"name":"Rent"},{"id":5,"name":"Groceries"},{"id":6,"name":"Fuel"}]},{"id":3,"name":"Wants","subcategories":[{"id":7,"name":"Dining Out"},{"id":8,"name":"Entertainment"}]},{"id":4,"name":"Savings","subcategories":[{"id":9,"name":"Emergency Fund"},{"id":10,"name":"Investments"}]},{"id":5,"name":"Tithe","subcategories":[{"id":11,"name":"Church"}]}]

    return(
        <div>
            <h1>This is the categories page</h1>
            <CategoryTableContainer categories={categoryTypes}/>
        </div>
    )
}

export default Categories