import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

private ingredients:Ingredient[] = [
  new Ingredient('Apple', 5),
  new Ingredient('Tomato', 10)
];

getIngedient() {
  return this.ingredients;
}

addIngredient(ingredient:Ingredient) {
  this.updateAddIngredient(ingredient);
}

addRecipeIngredient(ingredients:Ingredient[]) {
  for(let item of ingredients) {
    this.updateAddIngredient(item);
  }
}

updateAddIngredient(ingredient:Ingredient) {
    var index= this.ingredients.findIndex(item=>item.name.toLowerCase() === ingredient.name.toLowerCase());
    if(index >= 0) {
      this.ingredients[index].amount = this.ingredients[index].amount + ingredient.amount;
    } else {
      this.ingredients.push(ingredient);
    }
}

}
