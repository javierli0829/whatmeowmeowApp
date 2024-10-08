import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transaction-input',
  templateUrl: './transaction-input.page.html',
  styleUrls: ['./transaction-input.page.scss'],
})
export class TransactionInputPage {

  constructor(private router: Router, private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000'; // Express API URL

  goBack() {
    this.router.navigate(['/home']);
  }

  addTransaction () {
    this.http.post(this.apiUrl + "/transactions/add", {type: "Test", amount: 100, description: "Test", timestamp: new Date().toDateString()}).subscribe(res =>{
      console.log('Transaction created:', res);
    },
    error => {
      console.error('Error creating transaction:', error);
    })
  }
}
