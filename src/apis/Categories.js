const BASE_URL = 'http://localhost:3001';

export async function fetchCategories() {
    const response = await fetch(`${BASE_URL}/api/categories`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return response.json();
}