import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnuiteComponent } from './annuite/annuite.component';
import { AppComponent } from './app.component';
import { CapitalComponent } from './capital/capital.component';
import { CreditComponent } from './credit/credit.component';
import { DureeComponent } from './duree/duree.component';

const routes: Routes = [
  { path: 'credit', component: CreditComponent},
  { path: 'capital', component: CapitalComponent},
  { path: 'duree', component: DureeComponent},
  { path: 'home', component: AnnuiteComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
