import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild ('ingredientName') ingredientName : ElementRef;
  @ViewChild ('ingredientAmount') ingredientAmount : ElementRef;


  constructor(private shopinglistService : ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient(e) {
    e.stopPropagation();
    if(this.ingredientName.nativeElement.value.match("[A-Za-z]") && this.ingredientAmount.nativeElement.value > 0) {
      const newIngredient = new Ingredient(this.ingredientName.nativeElement.value, parseInt(this.ingredientAmount.nativeElement.value))
      this.shopinglistService.addIngredient(newIngredient);
    } else {
      alert('Wrong Syntax');
    }
  }

}
