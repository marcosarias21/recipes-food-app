import { create } from "zustand";

interface MealState {
  description: string
  setDescription: (newDescription: string) => void
}

export const useMealBook = create<MealState>((set) =>({
  description: "",
  setDescription: (newDescription : string) => set(({
    description : newDescription
  }))
}))