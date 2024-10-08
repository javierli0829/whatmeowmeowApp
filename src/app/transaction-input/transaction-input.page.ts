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

  private apiUrl = 'http://localhost:3000/api'; // 你的 Express API URL

  goBack() {
    this.router.navigate(['/home']);
  }

  getUsers() {
    this.http.get(this.apiUrl + "/users").subscribe(data => {
      console.log(data);
    })
    this.addTransaction();
  }

  addTransaction () {
    this.http.post(this.apiUrl + "/users/transaction", {type: "Test", amount: 100, description: "Test", timestamp: new Date().toDateString()}).subscribe(res =>{
      console.log('Transaction created:', res);
    },
    error => {
      console.error('Error creating transaction:', error);
    })
  }
}
