import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'HopeTutors-abi',
  templateUrl: './abi.component.html',
  styleUrls: ['./abi.component.css']
})
export class AbiComponent {
  
  Recipedata: any;

  constructor(private service: RecipeService) {
    this.LoadRecipeData();
  }

  private LoadRecipeData() {
    this.service.Recipeproducts().subscribe((data) => {
      this.Recipedata = data.recipes;
    });
  }


}
