import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesPanelComponent } from './movies-panel/movies-panel.component';
import { AdminComponent } from './admin/admin.component';
import { AdminEditCinemaComponent } from './admin-edit-cinema/admin-edit-cinema.component';
import { AdminNewCinemaComponent } from './admin-new-cinema/admin-new-cinema.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies-panel', pathMatch: 'full' },
  { path: 'movies-panel', component: MoviesPanelComponent },
  // {
  //   path: 'admin', component: AdminComponent, children: [
  //     { path: '', redirectTo: '/admin', pathMatch: 'full' },
  //     { path: 'edit', component: AdminEditCinemaComponent },
  //     { path: 'new', component: AdminNewCinemaComponent },
  //   ]
  // }
  { path: 'admin', component: AdminComponent },
  { path: 'edit', component: AdminEditCinemaComponent },
  { path: 'new', component: AdminNewCinemaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
