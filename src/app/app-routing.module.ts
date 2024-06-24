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

const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'games/lost-duckling', component: LostDucklingComponent},
  {path: 'games/fallen-umbrella', component: FallenUmbrellaComponent},
  {path: 'games/monster-cleaning', component: MonsterCleaningComponent},
  {path: 'games/aliens-defense', component: AliensDefenseComponent},
  {path: 'games/hood-search', component: HoodSearchComponent},
  {path: '**', component: GamesComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
