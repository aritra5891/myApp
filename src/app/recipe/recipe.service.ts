import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';


export class RecipeService {

  recipe: Recipe[] = [
  	new Recipe('Honey Chicken', 
                'Crispy Homey Chicken for Starters', 
                'https://www.rockrecipes.com/wp-content/uploads/2009/02/Crispy-Honey-Garlic-Chicken-Wings-1.jpg',
                [
                  new Ingredient('Meat', 1),
                  new Ingredient('Honey', 1),
                  new Ingredient('Vegetables', 4),
                  new Ingredient('Spices', 2),
                  new Ingredient('Frying Oil', 1) 
                ]),
  	
    new Recipe('Fried Fish', 
                'Delicious Fish with Tasty Sauce', 
                'http://www.breakfastrecipes.org/wp-content/uploads/2017/04/fish-chilly-575x431.jpg', 
                [
                  new Ingredient('Fish', 1),
                  new Ingredient('Vegetables', 2),
                  new Ingredient('Sauce', 2),
                  new Ingredient('Frying Oil', 1) 
                ]),
  ];

  recipeSelected = new EventEmitter<Recipe>();





}
