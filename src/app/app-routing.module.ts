import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { ContactComponent } from './contact/contact.component';
import { LostDucklingComponent } from './lost-duckling/lost-duckling.component';
import { FallenUmbrellaComponent } from './fallen-umbrella/fallen-umbrella.component';
import { AliensDefenseComponent } from './aliens-defense/aliens-defense.component';
import { HoodSearchComponent } from './hood-search/hood-search.component';
import { MonsterCleaningComponent } from './monster-cleaning/monster-cleaning.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { GamesPrivacyComponent } from './games-privacy/games-privacy.component';
import { BearFeedingComponent } from './bear-feeding/bear-feeding.component';
import { TurtleTrotBuildComponent } from './turtle-trot-build/turtle-trot-build.component';
import { TurtleTrotComponent } from './turtle-trot/turtle-trot.component';

const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'games/lost-duckling', component: LostDucklingComponent},
  {path: 'games/fallen-umbrella', component: FallenUmbrellaComponent},
  {path: 'games/monster-cleaning', component: MonsterCleaningComponent},
  {path: 'games/aliens-defense', component: AliensDefenseComponent},
  {path: 'games/hood-search', component: HoodSearchComponent},
  {path: 'games/bear-feeding', component: BearFeedingComponent},
  {path: 'games/turtle-trot', component: TurtleTrotComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'games-privacy', component: GamesPrivacyComponent},
  {path: 'games-privacy.html', component: GamesPrivacyComponent}, // Delete once apps reference new website
  {path: 'lostduckling-privacy.html', component: GamesPrivacyComponent}, // Delete once Lost duckling uses games-privacy
  {path: 'turtle-trot-build', component: TurtleTrotBuildComponent},
  {path: '**', component: GamesComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
