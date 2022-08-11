import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './MyComponents/info/info.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { InterestsComponent } from './MyComponents/interests/interests.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { HeaderComponent } from './MyComponents/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    AboutComponent,
    InterestsComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
