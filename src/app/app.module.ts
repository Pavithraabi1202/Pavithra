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
import { ListingComponent } from './listing/listing.component';
import { AnyComponent } from './Products/any/any.component';
import { SenderComponent } from './RXJSExample/sender/sender.component';
import { Receiver1Component } from './RXJSExample/receiver1/receiver1.component';
import { Receiver2Component } from './RXJSExample/receiver2/receiver2.component';
import { ObservableComponent } from './RXJSExample/observable/observable.component';
import { PrimeTestComponent } from './Webworker/prime-test/prime-test.component';
import { AbiComponent } from './Recipes/abi/abi.component';
import { TypeComponent } from './Users/type/type.component';


@NgModule({
  declarations: [AppComponent,PaviloginComponent,
    PippaexComponent, 
    BottomLayerComponent,
    TopLayerComponent,
    FirstComponent,SecondComponent,
    ComponentInteractComponent,
    AddnewComponent,ParentComponent,
    ChildComponent,ListingComponent,
    AnyComponent,SenderComponent,
    Receiver1Component,Receiver2Component,
    ObservableComponent,PrimeTestComponent,
    AbiComponent,TypeComponent


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
