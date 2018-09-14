import { Ingredient } from './../shared/ingredient.model';

export class Recipe {
	public name: String;
	public description: String;
	public imagePath: String;
	public ingredient: Ingredient[];

  	constructor(name:string, desc:string, imagePath:string, ingredient:Ingredient[]) {
  		this.name = name;
  		this.description = desc;
  		this.imagePath =imagePath;
		this.ingredient = ingredient;
   	}
}