import { RouterModule,Routes } from '@angular/router';
import { RecipesComponent, ShoppingListComponent, RecipeStartComponent, RecipeEditComponent,
    RecipeDetailComponent } from './components';

//path: /recipes/[]
export const RECIPE_ROUTES: Routes = [
    {path: '', component: RecipeStartComponent },
    {path: 'new', component: RecipeEditComponent },
    {path: ':id', component: RecipeDetailComponent },
    {path: ':id/edit', component: RecipeEditComponent }
];

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES},
    {path: 'shopping-list', component: ShoppingListComponent },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);