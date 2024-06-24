import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { GamesComponent } from './games/games.component';
import { BioComponent } from './bio/bio.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { LostDucklingComponent } from './lost-duckling/lost-duckling.component';
import { FallenUmbrellaComponent } from './fallen-umbrella/fallen-umbrella.component';
import { MonsterCleaningComponent } from './monster-cleaning/monster-cleaning.component';
import { AliensDefenseComponent } from './aliens-defense/aliens-defense.component';
import { HoodSearchComponent } from './hood-search/hood-search.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { SafePipe } from "./_services/safe.pipe";

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent,
      GamesComponent, BioComponent, ContactComponent, ProjectCardComponent,
      LostDucklingComponent, FallenUmbrellaComponent,MonsterCleaningComponent,
        AliensDefenseComponent, HoodSearchComponent, ProjectPageComponent,
        SafePipe],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
