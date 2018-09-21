import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'this is a test', `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6RNc-TjnsRh7g3LnBLcXvWoi0sc-XzLjO1zkpau_MX0nO1knVw`)
  ];
  constructor() { }

  ngOnInit() {
  }

}
