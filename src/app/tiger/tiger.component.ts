import { Component } from '@angular/core';
import { TigerService } from './tiger.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'HopeTutors-tiger',
  templateUrl: './tiger.component.html',
  styleUrls: ['./tiger.component.css']
})
export class TigerComponent {
  Recipes: any;




constructor(private service: TigerService, private route: ActivatedRoute) {
  console.log("Constructor");
}

ngOnInit(): void {
  console.log("ngOnInit");
  let search: string = "";
  this.route.queryParams.subscribe(params => {
    search = params['search'];
  });
  this.LoadRecipesInfo(search);
}

public LoadRecipesInfo(search: string){
  this.service.LoadRecipe().subscribe((data) => {
    this.Recipes = data.recipes;
    if(search!=""){
      this.Recipes= this.Recipes.filter((res: {name: string; }) => {
        return res.name.toLowerCase().match(search.toLowerCase());
      });

    }
  });
}



}


