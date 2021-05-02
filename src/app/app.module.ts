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
import { AlertChangesSavedComponent } from './alerts/alert-changes-saved/alert-changes-saved.component';
import { AlertNewCinemaCreatedComponent } from './alerts/alert-new-cinema-created/alert-new-cinema-created.component';
import { AlertCinemaDeletedComponent } from './alerts/alert-cinema-deleted/alert-cinema-deleted.component';
import { AlertCinemaDeleteQuastionComponent } from './alerts/alert-cinema-delete-quastion/alert-cinema-delete-quastion.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientComponent,
    MoviesPanelComponent,
    AdminComponent,
    AdminNewCinemaComponent,
    AdminEditCinemaComponent,
    AlertChangesSavedComponent,
    AlertNewCinemaCreatedComponent,
    AlertCinemaDeletedComponent,
    AlertCinemaDeleteQuastionComponent,
    SearchPanelComponent
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
