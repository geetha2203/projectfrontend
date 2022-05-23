import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EHomeComponent } from './e-home/e-home.component';
import { EHeaderComponent } from './e-header/e-header.component';
import { EJobpostingComponent } from './e-jobposting/e-jobposting.component';
import { FormsModule } from '@angular/forms';
import { ELeaderboardComponent } from './e-leaderboard/e-leaderboard.component';
import { EReferralsComponent } from './e-referrals/e-referrals.component';
import { RHeaderComponent } from './r-header/r-header.component';
import { RHomeComponent } from './r-home/r-home.component';
import { RStageComponent } from './r-stage/r-stage.component';
import { RJobpostingComponent } from './r-jobposting/r-jobposting.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EHomeComponent,
    EHeaderComponent,
    EJobpostingComponent,
    ELeaderboardComponent,
    EReferralsComponent,
    RHeaderComponent,
    RHomeComponent,
    RStageComponent,
    RJobpostingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
