import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../models';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() recipeId: number = 0;

  constructor() { }

  ngOnInit() {
  }

}