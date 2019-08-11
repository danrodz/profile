import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatDividerModule, MatToolbarModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProfileComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MatToolbarModule, MatCardModule, MatDividerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
