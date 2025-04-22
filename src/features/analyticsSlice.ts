import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AnalyticsState {
  spendingData: { month: string; amount: number }[];
}

const initialState: AnalyticsState = {
  spendingData: [
    { month: 'Last Month', amount: 2000 },
    { month: 'This Month', amount: 2500 },
  ],
};

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    updateSpending(state, action: PayloadAction<{ month: string; amount: number }>) {
      const index = state.spendingData.findIndex((d) => d.month === action.payload.month);
      if (index !== -1) {
        state.spendingData[index].amount = action.payload.amount;
      } else {
        state.spendingData.push(action.payload);
      }
    },
  },
});

export const { updateSpending } = analyticsSlice.actions;
export default analyticsSlice.reducer;