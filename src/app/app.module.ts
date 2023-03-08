import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponentsComponent } from './footer-components/footer-components.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RestaurantsComponentComponent } from './restaurants-component/restaurants-component.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from'@angular/material/card';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    FooterComponentsComponent,
    RestaurantsComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
