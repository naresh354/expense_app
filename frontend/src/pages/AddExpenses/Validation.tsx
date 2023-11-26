import * as Yup from 'yup';

const validationSchema = Yup.object({
  expenseCatgory: Yup.string().required('Please select an expense category'),
  expense: Yup.string().required('Expense is required'),
  date: Yup.date().required('Date is required'),
  amount: Yup.number().required('Amount is required').positive('Amount must be a positive number'),
});

export default validationSchema;
