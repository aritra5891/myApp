import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { BlankRecipeComponent } from './recipe/blank-recipe/blank-recipe.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
    {path : '', redirectTo : '/recipes', pathMatch: 'full'},
    {path : 'recipes', component : RecipeComponent, children: [
      {path : '', component: BlankRecipeComponent, pathMatch: 'full'},
      {path : 'new', component: RecipeEditComponent}, 
      {path : ':recipeName', component: RecipeDetailComponent},
      {path : ':recipeName/edit', component: RecipeEditComponent}
    ]},
    {path : 'shopping-list', component : ShoppingListComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class appRouterClass {}