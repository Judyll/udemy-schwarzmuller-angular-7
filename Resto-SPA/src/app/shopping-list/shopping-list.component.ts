import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../_model/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Avocado', 5),
    new Ingredient('Honey', 4)
  ];

  constructor() { }

  ngOnInit() {
  }

}
