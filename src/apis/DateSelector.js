const BASE_URL = 'http://localhost:3001';

export async function fetchYears() {
    const response = await fetch(`${BASE_URL}/api/years`);
    if (!response.ok) throw new Error('Failed to fetch years');
    return response.json();
}
  
export async function fetchMonths(year) {
    const response = await fetch(`${BASE_URL}/api/months/${year}`);
    if (!response.ok) throw new Error('Failed to fetch months');
    return response.json();
}