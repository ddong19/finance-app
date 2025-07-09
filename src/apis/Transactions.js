const BASE_URL = 'http://localhost:3001';

export async function fetchTransactions(year, month) {
    const response = await fetch(`${BASE_URL}/api/transactions/${year}/${month}`);
    if (!response.ok) throw new Error('Failed to fetch transactions');
    return response.json();
}