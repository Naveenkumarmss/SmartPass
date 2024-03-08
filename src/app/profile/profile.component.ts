import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule, MatInputModule, MatIconModule, ReactiveFormsModule, MatDatepickerModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  providers: [provideNativeDateAdapter()]
})
export class ProfileComponent {

  formGroup!: FormGroup;
  planGroup!: FormGroup;

  constructor(
    private formBuiler: FormBuilder,
    ) { 
      this.formGroup = this.formBuiler.group({
        username: ['naveen kumar@gmail.com', Validators.required],
        name: ['Naveen Kumar', Validators.required],
        dob: [new Date(), Validators.required],
        aadhar: ['**** **** **** **89', Validators.required],
        age: ['21', Validators.required],
        address: ['No 2, Rajarathinam Nagar, Main road Thiruverkadu, Chennai - 600077', Validators.required],
      });
      this.formGroup.disable();
      this.planGroup = this.formBuiler.group({
        plan: ['basic', Validators.required],
        expDate: [new Date(), Validators.required],
        activeatedDate: [new Date(), Validators.required],
      });
      this.planGroup.disable();
    }

}
