const BASE_URL = 'http://localhost:3001';

export async function fetchCategories() {
    const response = await fetch(`${BASE_URL}/api/categories`);

    if (!response.ok) throw new Error('Failed to fetch categories');

    return response.json();
}

export async function addSubcategory(categoryId, name) {
    const response = await fetch(`${BASE_URL}/api/subcategories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        categoryId,
        name,
      }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to add subcategory');
    }
  
    return response.json();
  }