import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Category {
  id: string;
  name: string;
  subcategories: { id: string; name: string; spent: number }[];
}

interface CategoriesState {
  categories: Category[];
}

const initialState: CategoriesState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory(state, action: PayloadAction<Category>) {
      state.categories.push(action.payload);
    },
    addSubcategory(
      state,
      action: PayloadAction<{ categoryId: string; subcategory: { id: string; name: string; spent: number } }>
    ) {
      const category = state.categories.find((c) => c.id === action.payload.categoryId);
      if (category) {
        category.subcategories.push(action.payload.subcategory);
      }
    },
  },
});

export const { addCategory, addSubcategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;