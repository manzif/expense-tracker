import client from './client';

const getExpenses = (id) => client.get(`expenses/expenses/${id}`);

export const addExpenses = (expenses,id, onUploadProgress) => {
    const data = {
        title: expenses.title,
        date: expenses.date,
        price: expenses.price,
        userId: id
    }
    return client.post('expenses', data, {
      onUploadProgress: (progress) =>
        onUploadProgress(progress.loaded / progress.total),
    });
  };

export default {
    getExpenses,
    addExpenses
}