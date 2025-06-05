// const Transaction_lists = [
//     {
//         "id": 1,
//         "type": "expense",
//         "amount": 60,
//         "category": "transport",
//         "note": "Bus fare",
//         "date": "2025-04-13T07:45:00Z"
//     },
//     {
//         "id": 2,
//         "type": "income",
//         "amount": 500,
//         "category": "freelance",
//         "note": "Logo design",
//         "date": "2025-04-13T10:00:00Z"
//     },
//     {
//         "id": 3,
//         "type": "expense",
//         "amount": 120,
//         "category": "food",
//         "note": "Lunch",
//         "date": "2025-04-13T12:30:00Z"
//     },
//     {
//         "id": 4,
//         "type": "expense",
//         "amount": 30,
//         "category": "snacks",
//         "note": "Tea & biscuits",
//         "date": "2025-04-13T16:00:00Z"
//     },
//     {
//         "id": 5,
//         "type": "income",
//         "amount": 1000,
//         "category": "gift",
//         "note": "Birthday gift",
//         "date": "2025-04-13T18:00:00Z"
//     },
//     {
//         "id": 6,
//         "type": "expense",
//         "amount": 200,
//         "category": "groceries",
//         "note": "Vegetables",
//         "date": "2025-04-09T11:00:00Z"
//     },
//     {
//         "id": 7,
//         "type": "income",
//         "amount": 800,
//         "category": "bonus",
//         "note": "Project reward",
//         "date": "2025-04-10T14:00:00Z"
//     },
//     {
//         "id": 8,
//         "type": "expense",
//         "amount": 50,
//         "category": "entertainment",
//         "note": "Movie ticket",
//         "date": "2025-04-11T19:00:00Z"
//     },
//     {
//         "id": 9,
//         "type": "expense",
//         "amount": 100,
//         "category": "utilities",
//         "note": "Electricity bill",
//         "date": "2025-04-08T09:30:00Z"
//     },
//     {
//         "id": 10,
//         "type": "income",
//         "amount": 300,
//         "category": "side job",
//         "note": "Tutoring",
//         "date": "2025-04-07T17:00:00Z"
//     },
//     {
//         "id": 11,
//         "type": "expense",
//         "amount": 450,
//         "category": "rent",
//         "note": "Room rent",
//         "date": "2025-04-01T10:00:00Z"
//     },
//     {
//         "id": 12,
//         "type": "income",
//         "amount": 3000,
//         "category": "salary",
//         "note": "Monthly salary",
//         "date": "2025-04-05T09:00:00Z"
//     },
//     {
//         "id": 13,
//         "type": "expense",
//         "amount": 180,
//         "category": "shopping",
//         "note": "Clothes",
//         "date": "2025-04-06T15:30:00Z"
//     },
//     {
//         "id": 14,
//         "type": "expense",
//         "amount": 75,
//         "category": "subscriptions",
//         "note": "Netflix",
//         "date": "2025-04-03T22:00:00Z"
//     },
//     {
//         "id": 15,
//         "type": "income",
//         "amount": 600,
//         "category": "freelance",
//         "note": "Blog writing",
//         "date": "2025-04-04T20:00:00Z"
//     },
//     {
//         "id": 16,
//         "type": "income",
//         "amount": 10000,
//         "category": "bonus",
//         "note": "Yearly bonus",
//         "date": "2025-01-01T09:00:00Z"
//     },
//     {
//         "id": 17,
//         "type": "expense",
//         "amount": 800,
//         "category": "travel",
//         "note": "Trip to Goa",
//         "date": "2025-02-15T08:00:00Z"
//     },
//     {
//         "id": 18,
//         "type": "income",
//         "amount": 4000,
//         "category": "investment",
//         "note": "Stock profit",
//         "date": "2025-03-10T13:00:00Z"
//     },
//     {
//         "id": 19,
//         "type": "expense",
//         "amount": 200,
//         "category": "health",
//         "note": "Medicines",
//         "date": "2025-01-20T16:00:00Z"
//     },
//     {
//         "id": 20,
//         "type": "income",
//         "amount": 1500,
//         "category": "gift",
//         "note": "Festival gift",
//         "date": "2025-03-25T19:30:00Z"
//     }
// ]

// export default Transaction_lists;

// Transaction_lists.js
import axios from 'axios';

const URL = 'http://localhost:3000';
const api = axios.create({ baseURL: URL });

let cache = null;

const Transaction_lists = async () => {
  if (cache) return cache;

  try {
    const res = await api.get('/transactions');
    cache = res.data;
    return cache;
  } catch (err) {
    console.error('Failed to fetch transactions:', err);
    return [];
  }
};

export default Transaction_lists;