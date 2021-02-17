import { Component, OnInit,EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[]= [
    new Recipe('A Test recipe','This is a Test ','https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlY2lwZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'),
    new Recipe('Another Test recipe','This is another Test ','https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlY2lwZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
