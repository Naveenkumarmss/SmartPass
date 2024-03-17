import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  viewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProfilePicService } from '../servies/profile-pic.service';
import moment from 'moment';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RouterModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  providers: [provideNativeDateAdapter()],
})
export class ProfileComponent {
  formGroup!: FormGroup;
  planGroup!: FormGroup;
  profilePic: string = '';

  constructor(
    private formBuiler: FormBuilder,
    private http: HttpClient,
    private ele: ElementRef,
    private defaultProfile: ProfilePicService
  ) {
    this.profilePic = this.defaultProfile.pic;
    this.formGroup = this.formBuiler.group({
      username: ['naveen kumar@gmail.com', Validators.required],
      name: ['Naveen Kumar', Validators.required],
      dob: [new Date(), Validators.required],
      aadhar: ['**** **** **** **89', Validators.required],
      age: ['21', Validators.required],
      address: [
        'No 2, Rajarathinam Nagar, Main road Thiruverkadu, Chennai - 600077',
        Validators.required,
      ],
    });
    this.formGroup.disable();
    this.planGroup = this.formBuiler.group({
      plan: ['basic', Validators.required],
      expDate: [new Date(), Validators.required],
      activeatedDate: [new Date(), Validators.required],
    });
    this.planGroup.disable();
    this.getUserData();
  }

  getUserData() {
    const cookies = document.cookie.split(';');
    const tokenCookie = cookies.find((cookie) =>
      cookie.trim().startsWith('token=')
    );

    const token = tokenCookie ? tokenCookie.split('=')[1] : '';

    this.http
      .get('http://localhost:8080/api/auth/getuser/' + token)
      .subscribe((res: any) => {
        debugger
        if (res) {
          this.formGroup.patchValue({
            username: res.user.email,
            name: res.user.name,
            dob: moment(res.user.dob).toDate(),
            aadhar: res.user.aadharid,
            age: res.user.age,
            // expDate: moment,
            activeatedDate: res.createdAt,
            address: res.user.address,
          });
          this.planGroup.patchValue({
            expDate: moment(res.user.expiresAt).toDate(),
            activeatedDate: moment().toDate()
          })
          localStorage.setItem("email", res.user.email);
          localStorage.setItem("name", res.user.name);
          this.profilePic = res.user.image || this.defaultProfile.pic;
        }
      });
  }
}
