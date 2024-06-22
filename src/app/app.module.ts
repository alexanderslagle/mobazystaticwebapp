import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BioComponent } from './bio/bio.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { LostDucklingComponent } from './lost-duckling/lost-duckling.component';
import { FallenUmbrellaComponent } from './fallen-umbrella/fallen-umbrella.component';
import { HouseCatComponent } from './house-cat/house-cat.component';
import { MonsterCleaningComponent } from './monster-cleaning/monster-cleaning.component';
import { BattleShipComponent } from './battle-ship/battle-ship.component';
import { AnElfsTuneComponent } from './an-elfs-tune/an-elfs-tune.component';
import { AliensDefenseComponent } from './aliens-defense/aliens-defense.component';
import { HoodSearchComponent } from './hood-search/hood-search.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { SafePipe } from "./_services/safe.pipe";

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent, HomeComponent,
     PortfolioComponent,BioComponent, ContactComponent, ProjectCardComponent,
      LostDucklingComponent, FallenUmbrellaComponent, HouseCatComponent,
       MonsterCleaningComponent, BattleShipComponent, AnElfsTuneComponent,
        AliensDefenseComponent, HoodSearchComponent, ProjectPageComponent,
        SafePipe],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
