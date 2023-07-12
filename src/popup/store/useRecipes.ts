import baseApi, { API } from '@/services/baseApi';
import { RecipeType } from '@/utils/types/recipe';
import { create } from 'zustand';

interface RecipeSate {
  recipes: RecipeType[];
  activeRecipe: RecipeType;
  loadAsync: () => Promise<{status: number}>;
}

const useRecipes = create<RecipeSate>((set) => {
  return {
    recipes: [],
    activeRecipe: {
      name: 'unknown',
      origin: 'unknown',
      description: 'unknown',
      difficulty: 1,
      protein: 'unknown',
      produce: 'unknown',
      spice: 'unknown',
      cookingOil: 'unknown',
      volume: 1,
      serves: 1,
      authenticity: 'unknown',
      stock: 'unknown'
    },
    loadAsync: async () => {
      const response = await baseApi.get(API.GET_RECIPES);
      set({
        recipes: response.data.message,
        activeRecipe: response.data.message[0]
      });
      return {status: response.status};
    }
  };
});

export default useRecipes;