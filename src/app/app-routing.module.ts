import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { HomeComponent } from './home/home.component';
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
  {path: 'home/lost-duckling', component: LostDucklingComponent},
  {path: 'home/fallen-umbrella', component: FallenUmbrellaComponent},
  {path: 'home/monster-cleaning', component: MonsterCleaningComponent},
  {path: 'home/aliens-defense', component: AliensDefenseComponent},
  {path: 'home/hood-search', component: HoodSearchComponent},
  {path: 'home/an-elfs-tune', component: AnElfsTuneComponent},
  {path: 'home/house-cat', component: HouseCatComponent},
  {path: 'home/battle-ship', component: BattleShipComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
