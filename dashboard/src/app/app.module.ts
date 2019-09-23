import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnoncementComponent } from './annoncement/annoncement.component';
import { PlaneddeliveryComponent } from './planeddelivery/planeddelivery.component';
import { ChartviewComponent } from './chartview/chartview.component';
import { TeamchallengeComponent } from './teamchallenge/teamchallenge.component';
import { LastdeliveryComponent } from './lastdelivery/lastdelivery.component';
import { BdannoncementComponent } from './bdannoncement/bdannoncement.component';
import { HeaderComponent } from './header/header.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnoncementComponent,
    PlaneddeliveryComponent,
    ChartviewComponent,
    TeamchallengeComponent,
    LastdeliveryComponent,
    BdannoncementComponent,
    HeaderComponent,
    LeftmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
