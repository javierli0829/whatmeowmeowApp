import { Component } from '@angular/core';

interface TransactionItem {
  type: string;
  amount: number;
  description: string;
  timestamp: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  transactionList: TransactionItem[] = [
    {type: "Test", amount: 100, description: "Test", timestamp: new Date()}
  ];
}
