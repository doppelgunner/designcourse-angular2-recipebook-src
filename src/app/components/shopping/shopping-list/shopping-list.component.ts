import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../models';
import { ShoppingListService } from '../../../services';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];
  selectedItem: Ingredient = null;
  sIndex: number = null;

  constructor(private sls: ShoppingListService) {
    this.items = sls.getItems();
   }

  ngOnInit() {
  }

  onSelectItem(item: Ingredient, i: number) {
    this.selectedItem = item;
    this.sIndex = i;
  }

  onCleared() {
    this.selectedItem = null;
    this.sIndex = null;
  }
}
