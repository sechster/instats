import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";


import { AppComponent } from './app.component';
import { StatsComponent } from "app/stats/stats.component";
import { AuthenticationService } from "app/shared/authentication.service";
import { MediaService } from "app/shared/media.service";
import { InstagramGuard } from "app/shared/instagram-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'stats', component: StatsComponent, canActivate: [InstagramGuard] },
      { path: '', redirectTo: 'stats', pathMatch: 'full' },
      { path: '**', redirectTo: 'stats', pathMatch: 'full' }
    ])
  ],
  providers: [AuthenticationService, MediaService, InstagramGuard],
  bootstrap: [AppComponent, StatsComponent]
})
export class AppModule { }
