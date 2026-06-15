import { categoriesGroups } from "@/constants/categories";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CategoryState = string;

const initialState: string = categoriesGroups.all;

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setSelectedCategory: (state: CategoryState, action: PayloadAction<{category: string}>) => action.payload.category,
    }
});

export const {setSelectedCategory} = categorySlice.actions;