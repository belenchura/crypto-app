import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private coinPaprikaUrl = 'https://api.coinpaprika.com/v1/coins';
  private kuCoinUrl = 'https://api.kucoin.com/api/v1/market/stats?symbol=';
  private cryptingUpUrl = 'https://cryptingup.com/api/markets';
  private markets = 'https://api.coinpaprika.com/v1/exchanges/binance/markets';

  constructor(private http: HttpClient) {}

  getTopCurrencies(): Observable<any> {
    return this.http.get(this.coinPaprikaUrl).pipe(
      catchError(error => {
        console.error('Error fetching top currencies', error);
        throw error;
      })
    );
  }

  getLiveData(symbol: string): Observable<any> {
    return this.http.get(`${this.kuCoinUrl}${symbol}-USDT`).pipe(
      catchError(error => {
        console.error(`Error fetching live data for ${symbol}`, error);
        throw error;
      })
    );
  }

  getMarketOverview(): Observable<any> {
    return this.http.get(this.markets).pipe(
      catchError(error => {
        console.error('Error fetching market overview', error);
        throw error;
      })
    );
  }
}