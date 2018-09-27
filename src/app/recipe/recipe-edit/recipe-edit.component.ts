import { ActivatedRoute, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

import { RecipeService } from './../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe:Recipe;
  editPage:boolean = false;
  
  constructor(private route : ActivatedRoute, private recipeService : RecipeService) { }

  ngOnInit() {
     this.route.params.subscribe(
      (data:Data) => {
        const recipeName = data['recipeName'];
        this.recipe = this.recipeService.getRecipeDetail(recipeName);
        this.editPage = recipeName !== undefined;
      }
    )
  }

}
