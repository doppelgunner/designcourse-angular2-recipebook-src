import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Recipe } from '../../../models';
import { ShoppingListService, RecipeService } from '../../../services';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  @Input() selectedRecipe: Recipe;
  private recipeIndex: number;
  private subscription: Subscription;

  constructor(private sls: ShoppingListService,
              private router: Router, 
              private route: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddToShoppingList() {
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

}
