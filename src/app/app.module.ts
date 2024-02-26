import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module';
import { PaviloginComponent } from './pavilogin/pavilogin.component';
import { PippaexComponent } from './pippaex/pippaex.component';
import { BottomLayerComponent } from './Contantprojection/bottom-layer/bottom-layer.component';
import { TopLayerComponent } from './Contantprojection/top-layer/top-layer.component';
import { FirstComponent } from './comp-communicate/first/first.component';
import { SecondComponent } from './comp-communicate/second/second.component';
import { ComponentInteractComponent } from './comp-communicate/component-interact/component-interact.component';
import { ChildComponent } from './comp-communicate/child/child.component';
import { ParentComponent } from './comp-communicate/parent/parent.component';
import { MuraliComponent } from './C-Cummunicate/murali/murali.component';
import { TokenInterceptor } from './shared/token.interceptor';
import { AddnewComponent } from './addnew/addnew.component';


@NgModule({
  declarations: [AppComponent,PaviloginComponent,
    PippaexComponent, 
    BottomLayerComponent,TopLayerComponent,
    FirstComponent,SecondComponent,ComponentInteractComponent,AddnewComponent


    ],

  imports: [
    
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
