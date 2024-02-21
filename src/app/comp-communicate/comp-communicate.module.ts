import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ComponentInteractComponent } from './component-interact/component-interact.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent,
    ComponentInteractComponent,
    ParentComponent,
    ChildComponent

  ],
  imports: [
    CommonModule
  ]
})
export class CompCommunicateModule { }
