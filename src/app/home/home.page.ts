import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
export class HomePage{

  private apiUrl = 'http://localhost:3000'; // Express API URL

  transactionList: TransactionItem[];

  constructor(private router: Router, private http: HttpClient) {
    this.transactionList = [];
    this.getTransactions();
  }

  ionViewWillEnter() {
    this.getTransactions();
  }

  goToTransactionInputPage(){
    this.router.navigate(['/transaction-input']);
  }

  getTransactions () {
    this.http.post(this.apiUrl + "/transactions/find", {timestamp: new Date().toISOString()}).subscribe(res =>{
      console.log('Transaction found:', res);
      this.transactionList = res as TransactionItem[];
    },
    error => {
      console.error('Error finding transaction:', error);
    })
  }
}
