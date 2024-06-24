import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { GamesComponent } from './games/games.component';
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
  {path: 'bio', component: BioComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'games/lost-duckling', component: LostDucklingComponent},
  {path: 'games/fallen-umbrella', component: FallenUmbrellaComponent},
  {path: 'games/monster-cleaning', component: MonsterCleaningComponent},
  {path: 'games/aliens-defense', component: AliensDefenseComponent},
  {path: 'games/hood-search', component: HoodSearchComponent},
  {path: 'games/an-elfs-tune', component: AnElfsTuneComponent},
  {path: 'games/house-cat', component: HouseCatComponent},
  {path: 'games/battle-ship', component: BattleShipComponent},
  {path: '**', component: GamesComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
