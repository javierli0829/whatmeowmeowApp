import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transaction-input',
  templateUrl: './transaction-input.page.html',
  styleUrls: ['./transaction-input.page.scss'],
})
export class TransactionInputPage {

  private apiUrl = 'http://localhost:3000'; // Express API URL

  dateInput: string;
  typeInput: string;
  amountInput: number;
  descriptionInput: string;
  typesCategory: string[] = ["Food", "Housing", "Clothing", "Transportation"];

  isModalOpen: boolean;

  // Constructor
  constructor(private router: Router, private http: HttpClient) {
    this.dateInput = new Date().toISOString();
    this.typeInput = "";
    this.amountInput = 0;
    this.descriptionInput= "";

    this.isModalOpen = false;
  }

  ionViewWillEnter() {
    this.cleanUserInput();
  }

  // Route
  goBack() {
    this.router.navigate(['/home']);
  }

  // Service
  addTransaction() {
    this.http.post(this.apiUrl + "/transactions/add", {type: this.typeInput, amount: this.amountInput, description: this.descriptionInput, timestamp: this.dateInput}).subscribe(res =>{
      console.log('Transaction created:', res);
      this.goBack();
    },
    error => {
      console.error('Error creating transaction:', error);
    })
  }

  // UI control
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  cleanUserInput (){
    this.dateInput = new Date().toISOString();
    this.typeInput = "";
    this.amountInput = 0;
    this.descriptionInput = "";
  }

  // Event
  onDateChange() {
    this.closeModal();
  }
}
