import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './src/app/app.component';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { LiveDataComponent } from './components/live-data/live-data.component';
import { MarketOverviewComponent } from './components/market-overview/market-overview.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
      CurrencyListComponent,
      LiveDataComponent,
      //MarketOverviewComponent
    ],
    imports: [
      BrowserModule.withServerTransition({ appId: 'serverApp' }), 
      HttpClientModule,
      AppRoutingModule,
      AppComponent,
      BrowserAnimationsModule
    ],
    providers: [provideHttpClient()],
  })
  export class AppModule {}