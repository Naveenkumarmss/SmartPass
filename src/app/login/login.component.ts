import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonserviceService } from '../servies/commonservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HandleFingerprintService } from '../servies/handle-fingerprint.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, RouterModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit{

  formGroup!: FormGroup;
  @Output() signUp = new EventEmitter();

  constructor(
    private formBuiler: FormBuilder,
    private router: Router,
    public commonService: CommonserviceService,
    private detect: ChangeDetectorRef,
    private http: HttpClient,
    private fingerPrintService: HandleFingerprintService,
    private cookies: CookieService
  ) { 
    this.formGroup = this.formBuiler.group({
      aadharid: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    console.log(this.cookies.get("token"));
    const [token, cookie, ...rest] = document.cookie.split("=");
    if(token === 'token' && cookie) {
      this.router.navigate(['/home']).then(() => {
        this.detect.detectChanges();
      });
    }
  }

  onSubmit() {
    // const fingerprint = this.fingerPrintService.checkFingerprint();
    // if(fingerprint) {
    //   console.log(this.formGroup.valid);
      if(this.formGroup.valid) {
        this.http.post("http://localhost:8080/api/auth/login", {...this.formGroup.value}, {withCredentials: true}).subscribe((res) => {
          this.router.navigate(['/home']).then(() => {
            this.detect.detectChanges();
          });
        });
      }
    // }
  }

}
