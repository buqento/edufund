import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavComponent } from './components/nav/nav.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ContentComponent } from './components/content/content.component';
import { CardComponent } from './components/card/card.component';

import { DataProvider } from './services/dataprovider';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    ContentComponent,
    CarouselComponent,
    FooterComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [DataProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
