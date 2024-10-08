import { Routes } from '@angular/router';
import { LiveDataComponent } from '.././../components//live-data/live-data.component';
import { MarketOverviewComponent } from '.././../components/market-overview/market-overview.component';


export const routes: Routes = [
  { path: 'overview', component: MarketOverviewComponent },
  { path: 'live/:currency', component: LiveDataComponent },
  { path: '', redirectTo: '/overview', pathMatch: 'full' }, // Redirigir a overview por defecto
  { path: '**', redirectTo: '/overview' } // Redirigir a overview para rutas no encontradas
];