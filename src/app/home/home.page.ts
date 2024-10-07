import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { addCircleOutline } from 'ionicons/icons';

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

  constructor(private router: Router) {
    addIcons({ addCircleOutline });
  }

  goToTransactionInputPage(){
    this.router.navigate(['/transaction-input']);
  }

  transactionList: TransactionItem[] = [
    {type: "Test", amount: 100, description: "Test", timestamp: new Date()}
  ];
}
