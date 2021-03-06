import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
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
import { CreateNewAccountComponent } from './authentication/create-new-account/create-new-account.component';
import { LoginComponent } from './authentication/login/login.component';
import { OneCinemaForPanelComponent } from './one-cinema-for-panel/one-cinema-for-panel.component';
import { OneCinemaForAdminComponent } from './one-cinema-for-admin/one-cinema-for-admin.component';
import { SeatsSelectionComponent } from './seat-selection/seats-selection/seats-selection.component';
import { SeatsSelectionMapComponent } from './seat-selection/seats-selection-map/seats-selection-map.component';
import { SeatSelectionMovieDetailsComponent } from './seat-selection/seat-selection-movie-details/seat-selection-movie-details.component';
import { SeatSelectionDoSelectComponent } from './seat-selection/seat-selection-do-select/seat-selection-do-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesPanelComponent,
    AdminComponent,
    AdminNewCinemaComponent,
    AdminEditCinemaComponent,
    AlertChangesSavedComponent,
    AlertNewCinemaCreatedComponent,
    AlertCinemaDeletedComponent,
    AlertCinemaDeleteQuastionComponent,
    SearchPanelComponent,
    CreateNewAccountComponent,
    LoginComponent,
    OneCinemaForPanelComponent,
    OneCinemaForAdminComponent,
    SeatsSelectionComponent,
    SeatsSelectionMapComponent,
    SeatSelectionMovieDetailsComponent,
    SeatSelectionDoSelectComponent
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
