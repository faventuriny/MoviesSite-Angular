import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClientComponent } from './client/client.component';
import { MoviesPanelComponent } from './movies-panel/movies-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AdminNewCinemaComponent } from './admin-new-cinema/admin-new-cinema.component';
import { AdminEditCinemaComponent } from './admin-edit-cinema/admin-edit-cinema.component';
import { AlertChangesSavedComponent } from './alert-changes-saved/alert-changes-saved.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientComponent,
    MoviesPanelComponent,
    AdminComponent,
    AdminNewCinemaComponent,
    AdminEditCinemaComponent,
    AlertChangesSavedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
