import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

interface Plan {
  id: number;
  plan: string;
  amount: string;
  duration: string;
  planDetails: string[],
  currencySign: string;
}

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatIconModule, HttpClientModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {

  isMonthly: boolean = true;

  plans: Plan[] = [
    {
      id: 1,
      plan: "Mini",
      amount: "49",
      duration: "mo",
      planDetails: [
        "Point to point",
        "Can be used twice per day",
        "Only white board bus"
      ],
      currencySign: "₹"
    },
    {
      id: 2,
      plan: "Small",
      amount: "150",
      duration: "mo",
      planDetails: [
        "Point to point",
        "Can be used 5 times per day",
        "Only white board bus"
      ],
      currencySign: "₹"
    },
    {
      id: 3,
      plan: "Pro",
      amount: "500",
      duration: "mo",
      planDetails: [
        "Point to point",
        "Can be used 10 times per day",
        "Only white & green board bus"
      ],
      currencySign: "₹"
    },
    {
      id: 4,
      plan: "Premium",
      amount: "1000",
      duration: "mo",
      planDetails: [
        "Point to point",
        "Unlimited travelling",
        "All MTC bus"
      ],
      currencySign: "₹"
    }
  ]

  constructor(private http: HttpClient) {
    this.getPlans();
  }

  getPlans() {
    // get
    this.http.get("" // replace with url
    , { params: {isMonthly: this.isMonthly}}).subscribe((response: any) => {
      this.plans = response;
    });
  }

  signupPlan(plan: Plan) {

const cookies = document.cookie.split(';');

  const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));

  const token = tokenCookie ? tokenCookie.split('=')[1] : '';


  this.http.get("http://localhost:8080/api/auth/renew/" + token).subscribe((response: any) => {

  });

  }

}
