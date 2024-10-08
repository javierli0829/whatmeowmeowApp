import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
export class HomePage implements OnInit{

  private apiUrl = 'http://localhost:3000'; // Express API URL

  constructor(private router: Router, private http: HttpClient) {
    addIcons({ addCircleOutline });
  }

  ngOnInit(): void {
    this.getTransactions();
  }

  goToTransactionInputPage(){
    this.router.navigate(['/transaction-input']);
  }

  getTransactions () {
    this.http.post(this.apiUrl + "/transactions/find", {timestamp: new Date().toDateString()}).subscribe(res =>{
      console.log('Transaction found:', res);
      this.transactionList = res as TransactionItem[];
    },
    error => {
      console.error('Error finding transaction:', error);
    })
  }

  transactionList: TransactionItem[] = [];
}
