import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage {

  constructor(private router: Router) { }

    // Route
    goToAccountPage() {
      this.router.navigate(['/account']);
    }

}
