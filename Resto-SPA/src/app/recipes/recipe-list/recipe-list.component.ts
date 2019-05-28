import { Recipe } from './../../_model/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // We will be adding one dummy recipe
  recipes: Recipe[] = [
    new Recipe('A Test Recipe #1',
    'This is simply a test #1',
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    new Recipe('A Test Recipe #2',
    'This is simply a test #2',
    'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
