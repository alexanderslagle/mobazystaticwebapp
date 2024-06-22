import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { LostDucklingComponent } from './lost-duckling/lost-duckling.component';
import { FallenUmbrellaComponent } from './fallen-umbrella/fallen-umbrella.component';
import { AliensDefenseComponent } from './aliens-defense/aliens-defense.component';
import { HoodSearchComponent } from './hood-search/hood-search.component';
import { AnElfsTuneComponent } from './an-elfs-tune/an-elfs-tune.component';
import { HouseCatComponent } from './house-cat/house-cat.component';
import { MonsterCleaningComponent } from './monster-cleaning/monster-cleaning.component';
import { BattleShipComponent } from './battle-ship/battle-ship.component';

const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'bio', component: BioComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'portfolio/lost-duckling', component: LostDucklingComponent},
  {path: 'portfolio/fallen-umbrella', component: FallenUmbrellaComponent},
  {path: 'portfolio/monster-cleaning', component: MonsterCleaningComponent},
  {path: 'portfolio/aliens-defense', component: AliensDefenseComponent},
  {path: 'portfolio/hood-search', component: HoodSearchComponent},
  {path: 'portfolio/an-elfs-tune', component: AnElfsTuneComponent},
  {path: 'portfolio/house-cat', component: HouseCatComponent},
  {path: 'portfolio/battle-ship', component: BattleShipComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
