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
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss'],
})
export class AccountPage {

  private apiUrl = 'http://localhost:3000'; // Express API URL

  transactionList: TransactionItem[];
  selectedDate: string;

  isModalOpen: boolean;

  // Constructor
  constructor(private router: Router, private http: HttpClient) {
    this.selectedDate = new Date().toISOString();
    this.transactionList = [];
    this.isModalOpen = false;
    this.getTransactions();
  }

  ionViewWillEnter() {
    this.getTransactions();
  }

  // Route
  goToTransactionInputPage() {
    this.router.navigate(['/transaction-input']);
  }

  goBack() {
    this.router.navigate(['/overview']);
  }

  // Service
  getTransactions() {
    this.http.post(this.apiUrl + "/transactions/find", {timestamp: this.selectedDate}).subscribe(res =>{
      console.log('Transaction found:', res);
      this.transactionList = res as TransactionItem[];
    },
    error => {
      console.error('Error finding transaction:', error);
    })
  }

  // UI control
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  // Event
  onDateChange() {
    this.getTransactions();
    this.closeModal();
  }
}
