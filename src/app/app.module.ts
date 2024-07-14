import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { GamesComponent } from './games/games.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { LostDucklingComponent } from './lost-duckling/lost-duckling.component';
import { FallenUmbrellaComponent } from './fallen-umbrella/fallen-umbrella.component';
import { MonsterCleaningComponent } from './monster-cleaning/monster-cleaning.component';
import { AliensDefenseComponent } from './aliens-defense/aliens-defense.component';
import { HoodSearchComponent } from './hood-search/hood-search.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { SafePipe } from "./_services/safe.pipe";
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { FooterComponent } from './footer/footer.component';
import { BearFeedingComponent } from './bear-feeding/bear-feeding.component';
import { GamesPrivacyComponent } from './games-privacy/games-privacy.component';
import { TurtleTrotBuildComponent } from './turtle-trot-build/turtle-trot-build.component';
import { TurtleTrotComponent } from './turtle-trot/turtle-trot.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent,
      GamesComponent, ContactComponent, ProjectCardComponent,
      LostDucklingComponent, FallenUmbrellaComponent,MonsterCleaningComponent,
        AliensDefenseComponent, HoodSearchComponent, ProjectPageComponent,
        SafePipe, AboutUsComponent, PrivacyPolicyComponent, FooterComponent, BearFeedingComponent, GamesPrivacyComponent, TurtleTrotBuildComponent, TurtleTrotComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
