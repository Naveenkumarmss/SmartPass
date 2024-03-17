import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { HandleFingerprintService } from '../servies/handle-fingerprint.service';
import { CommonserviceService } from '../servies/commonservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import imageCompression from 'browser-image-compression';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, 
    ReactiveFormsModule, FormsModule, MatIconModule, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  formGroup!: FormGroup;
  photo!: string | ArrayBuffer | null;
  @Output() signUp = new EventEmitter();

  constructor(
    private formBuiler: FormBuilder,
    private snackBar: MatSnackBar,
    private fingerPrintService: HandleFingerprintService,
    private router: Router,
    public commonService: CommonserviceService,
    private http: HttpClient
    
  ) { 
    this.formGroup = this.formBuiler.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      aadhar: ['', Validators.required],
      age: [0, Validators.required],
      address: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit() {

    // const fingerprint = this.fingerPrintService.checkFingerprint();
    // if(fingerprint) {
    //   console.log('fingerprint', fingerprint);
      let payload = {
        name: this.formGroup.get("name")?.value,  
        aadharid: this.formGroup.get("aadhar")?.value, 
        address: this.formGroup.get("address")?.value,
        age: this.formGroup.get("age")?.value, 
        email: this.formGroup.get("username")?.value,
        fingerprint: "12345", 
        dob:"12/3/2000",
        password: this.formGroup.get("password")?.value,
        image: this.photo
      }
      this.http.post("http://localhost:8080/api/auth/signup", payload).subscribe((res: any) => {
        console.log(res);
      });
    // }
    
    
  }

  handleFileUpload() {
    let element = document.createElement('input');
    element.type = 'file';
    element.click();
    element.onchange = (event) => {
      if(element.files?.length) {
        const imageReader = new FileReader();
        imageReader.onload = () => {
          this.photo = imageReader.result; 
        };
        imageReader.readAsDataURL(element.files[0])
      }
    };
  }
}
