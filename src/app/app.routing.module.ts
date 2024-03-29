 import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import {PaviloginComponent } from "./pavilogin/pavilogin.component";
import { PippaexComponent} from "./pippaex/pippaex.component";
import { CustomerComponent } from "./customer/customer.component";
import { TopLayerComponent } from "./Contantprojection/top-layer/top-layer.component";
import { ComponentInteractComponent } from "./comp-communicate/component-interact/component-interact.component";
import { ParentComponent } from "./comp-communicate/parent/parent.component";
import { MuraliComponent } from "./C-Cummunicate/murali/murali.component";
import { AddnewComponent } from "./addnew/addnew.component";
import { ListingComponent } from "./listing/listing.component";
import { AnyComponent } from "./Products/any/any.component";
import { SenderComponent } from "./RXJSExample/sender/sender.component";
import { PrimeTestComponent } from "./Webworker/prime-test/prime-test.component";
import { AbiComponent } from "./Recipes/abi/abi.component";
import { TypeComponent } from "./Users/type/type.component";
import { TigerComponent } from "./tiger/tiger.component";
import { DatacheckerComponent } from "./Twowaydatabinding/datachecker/datachecker.component";



const routes: Routes = [
  
  { path: 'pavilogin', component: PaviloginComponent },
  { path: 'pippaex', component: PippaexComponent },
  { path: 'Customer', component: CustomerComponent },
  { path: 'Contantprojection', component: TopLayerComponent },
  { path: 'ComponentInteractComponent', component: ComponentInteractComponent},
  { path: 'parentTochild', component: ParentComponent},
  { path: 'C-Cummunicate', component: MuraliComponent},
  { path: 'AddCustomer', component: AddnewComponent},
  { path: 'Edit/:id', component: AddnewComponent},
  { path: 'CustomerList', component: ListingComponent},
  { path: 'Observables', component: SenderComponent },
  { path: 'Webworker', component: PrimeTestComponent},
  { path: 'ProductList', component: AnyComponent},
  { path: 'RecipeList', component: AbiComponent},
  { path: 'UserList', component: TypeComponent},
  { path: 'Recipeimages', component: TigerComponent},
  { path: 'TwoWayDataBinding', component: DatacheckerComponent},
   
   
   
   
   
     
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
