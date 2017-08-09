import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    
  }

  onStore() {
    this.recipeService.storeData().subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }

  onFetch() {
    this.recipeService.fetchData();
  }

}
