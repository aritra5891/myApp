import { RecipeService } from './../recipe.service';
import { ActivatedRoute, Data } from '@angular/router';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {

  recipe : Recipe;

  constructor(private shoppingListService : ShoppingListService, private route : ActivatedRoute, private recipeService : RecipeService) { }
  
  ngOnInit() {
    this.route.params.subscribe(
      (data:Data) => {
        const recipeName = data['recipeName'];
        this.recipe = this.recipeService.getRecipeDetail(recipeName);
      }
    )
  }

  onAddToShoppingList() {
    this.shoppingListService.addRecipeIngredient(this.recipe.ingredient);
  }

}
