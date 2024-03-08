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

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, 
    ReactiveFormsModule, FormsModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  formGroup!: FormGroup;
  photo!: File;
  @Output() signUp = new EventEmitter();

  constructor(
    private formBuiler: FormBuilder,
    private snackBar: MatSnackBar,
    private fingerPrintService: HandleFingerprintService,
    private router: Router,
    public commonService: CommonserviceService
    
  ) { 
    this.formGroup = this.formBuiler.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      aadhar: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const fingerprint = this.fingerPrintService.checkFingerprint();
    if(fingerprint) {
      console.log('fingerprint', fingerprint);
    }
  }

  handleFileUpload() {
    let element = document.createElement('input');
    element.type = 'file';
    element.click();
    element.onchange = (event) => {
      console.log('handleFileUpload', element.files);
      if(element.files?.length) {
        this.photo = element.files[0];
      }
      console.log(this.photo);
    };
  }
}
