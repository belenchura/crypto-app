import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {
  currencies: any[] = [];

  constructor(private currencyService: CurrencyService, private router: Router) {}

  ngOnInit(): void {
    this.currencyService.getTopCurrencies().subscribe(data => {
      this.currencies = data.slice(0, 20); // Solo los primeros 20
    });
  }

  navigateToCurrency(currency: string) {
    this.router.navigate(['/live', currency]);
  }
}
