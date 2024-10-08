import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketOverviewComponent } from './components/market-overview/market-overview.component';
import { LiveDataComponent } from './components/live-data/live-data.component';

const routes: Routes = [
  { path: 'overview', component: MarketOverviewComponent },
  { path: 'live/:currency', component: LiveDataComponent },
  { path: '', redirectTo: '/overview', pathMatch: 'full' }, // Redirige a la visión general por defecto
  { path: '**', redirectTo: '/overview' } // Redirige a visión general para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
