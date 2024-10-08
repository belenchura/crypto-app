import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-live-data',
  templateUrl: './live-data.component.html',
  styleUrls: ['./live-data.component.css']
})
export class LiveDataComponent implements OnInit {
  currencyData: any;

  constructor(private route: ActivatedRoute, private currencyService: CurrencyService) {}

  ngOnInit(): void {
    const currency = this.route.snapshot.paramMap.get('currency');
    if (currency) {
      this.fetchLiveData(currency);
      setInterval(() => this.fetchLiveData(currency), 10000); // Actualiza cada 10 segundos
    } else {
      console.error('No se encontró la moneda');
      // Puedes redirigir a otra página o mostrar un mensaje de error
    }
  }

  fetchLiveData(currency: string) {
    this.currencyService.getLiveData(currency).subscribe(data => {
      this.currencyData = data;
    });
  }
}
