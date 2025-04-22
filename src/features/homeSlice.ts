import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Account {
  id: string;
  name: string;
  balance: number;
  type: 'bank' | 'credit';
}

interface Budget {
  id: string;
  name: string;
  amount: number;
  spent: number;
  category: string;
}

interface HomeState {
  accounts: Account[];
  budgets: Budget[];
  totalBalance: number;
}

const initialState: HomeState = {
  accounts: [],
  budgets: [],
  totalBalance: 0,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    addAccount(state, action: PayloadAction<Account>) {
      state.accounts.push(action.payload);
      state.totalBalance += action.payload.balance;
    },
    addBudget(state, action: PayloadAction<Budget>) {
      state.budgets.push(action.payload);
    },
    updateBudgetSpent(state, action: PayloadAction<{ id: string; amount: number }>) {
      const budget = state.budgets.find((b) => b.id === action.payload.id);
      if (budget) {
        budget.spent += action.payload.amount;
      }
    },
  },
});

export const { addAccount, addBudget, updateBudgetSpent } = homeSlice.actions;
export default homeSlice.reducer;