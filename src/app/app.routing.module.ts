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
   
   
   
     
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
