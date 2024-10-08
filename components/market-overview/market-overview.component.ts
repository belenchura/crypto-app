import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { TableColumn } from '../table/TableColumn';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { TableComponent } from "../table/table.component";

@Component({
  selector: 'app-market-overview',
  standalone: true,
  imports: [CommonModule, TableComponent], 
  templateUrl: './market-overview.component.html',
  styleUrls: ['./market-overview.component.css']
})
export class MarketOverviewComponent implements OnInit {
  marketData: any[] = [];
  marketTableColumns: TableColumn[] = [];
  dataSource = new MatTableDataSource<any>(this.marketData);

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.initializeColumns();
    this.fetchMarketOverview();
  }

  fetchMarketOverview() {
    this.currencyService.getMarketOverview().subscribe(
      data => {
        console.log(data);
        this.marketData = data;
        this.dataSource.data = this.marketData; // Actualiza la fuente de datos
      },
      error => {
        console.error('Error fetching market overview', error);
      }
    );
  }

  initializeColumns(): void {
    this.marketTableColumns = [
      {
        name: 'Pair',
        dataKey: 'pair',
        position: 'left',
        isSortable: true
      },
      {
        name: 'Base Currency Name',
        dataKey: 'base_currency_name',
        position: 'left',
        isSortable: true
      },
      {
        name: 'Quote Currency Name',
        dataKey: 'quote_currency_name',
        position: 'left',
        isSortable: true
      },
      {
        name: 'Price (USD)',
        dataKey: 'quotes.USD.price',
        position: 'right',
        isSortable: true
      },
      {
        name: 'Volume (24h)',
        dataKey: 'quotes.USD.volume_24h',
        position: 'right',
        isSortable: true
      }
    ];
  }

  sortData(sortParameters: Sort) {
    const keyName = sortParameters.active;
    if (sortParameters.direction === 'asc') {
      this.marketData.sort((a: any, b: any) => a[keyName] > b[keyName] ? 1 : -1);
    } else if (sortParameters.direction === 'desc') {
      this.marketData.sort((a: any, b: any) => a[keyName] < b[keyName] ? 1 : -1);
    } else {
      return; // No ordena si no hay dirección
    }
    this.dataSource.data = this.marketData; // Actualiza la fuente de datos después de ordenar
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  removeMarketData(pair: string) {
    this.marketData = this.marketData.filter(item => item.pair !== pair);
    this.dataSource.data = this.marketData; // Actualiza la fuente de datos después de eliminar
  }
}
