import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonserviceService } from '../servies/commonservice.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, RouterModule],
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
    private detect: ChangeDetectorRef
  ) { 
    this.formGroup = this.formBuiler.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.formGroup.valid);
    this.router.navigate(['/home']).then(() => {
      this.detect.detectChanges();
    })
    ;
  }

}
