import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})


export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  

  recipes: Recipe[] = [
  	new Recipe('Honey Chicken', 'Crispy Homey Chicken for Starters', 'https://www.rockrecipes.com/wp-content/uploads/2009/02/Crispy-Honey-Garlic-Chicken-Wings-1.jpg'),
  	new Recipe('Fried Fish', 'Delicious Fish with Tasty Sauce', 'http://www.breakfastrecipes.org/wp-content/uploads/2017/04/fish-chilly-575x431.jpg'),
  ];	

  constructor() { }

  ngOnInit() {
  }

  recipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }


}
