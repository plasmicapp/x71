import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { PlasmicModule } from '@plasmicapp/loader-angular';

import { AppComponent } from './app.component';
import { CatchAllComponent } from './catch-all.component';

const routes: Routes = [
  /* ... Your other routes here ... */

  // Add this route to catch all pages
  {
    path: '**',
    component: CatchAllComponent
  }
];

@NgModule({
  // Include the CatchAllComponent in your declarations
  declarations: [AppComponent, CatchAllComponent],
  imports: [BrowserModule, PlasmicModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent]
})
export class AppModule {}
