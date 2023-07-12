import baseApi, { API } from '@/services/baseApi';
import { RecipeType } from '@/utils/types/recipe';
import { create } from 'zustand';

interface RecipeSate {
  recipes: RecipeType[];
  filteredRecipes: RecipeType[];
  activeRecipe: RecipeType;
  filter: (keyword: string) => void;
  setActiveRecipe: (recipe: RecipeType) => void;
  loadAsync: () => Promise<{status: number}>;
}

const useRecipes = create<RecipeSate>((set) => {
  return {
    recipes: [],
    filteredRecipes: [],
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
    filter: (keyword: string) => {
      set((state) => ({
        filteredRecipes: state.recipes.filter(
          (recipe: RecipeType) => recipe.name.toUpperCase().includes(keyword.toUpperCase())
        )
      }));
    },
    setActiveRecipe: (recipe: RecipeType) => {
      set({
        activeRecipe: recipe
      });
    },
    loadAsync: async () => {
      const response = await baseApi.get(API.GET_RECIPES);
      set({
        recipes: response.data.message,
        filteredRecipes: response.data.message,
        activeRecipe: response.data.message[2]
      });
      return {status: response.status};
    }
  };
});

export default useRecipes;