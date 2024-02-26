import { create } from "zustand";

interface MealState {
  description: string
  setDescription: (newDescription: string) => void
  category: string
  setCategory: (newCategory: string) => void
}

export const useMealBook = create<MealState>((set) =>({
  description: "",
  setDescription: (newDescription : string) => set(({
    description : newDescription
  })),
  category: "",
  setCategory: (newCategory : string) => set(({
    category : newCategory
  }))
}))