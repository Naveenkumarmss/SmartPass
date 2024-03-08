import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { } from '@angular/material';
import { LoginComponent } from './login/login.component';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CommonserviceService } from './servies/commonservice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, FormsModule, ReactiveFormsModule, 
    LoginComponent, CommonModule, SignupComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [provideAnimations()]
})
export class AppComponent {
  title = 'smartpass';
  isLogin: boolean = false;

  isSignUp: boolean = false;

  constructor(private commonService: CommonserviceService) { 
    this.isSignUp = this.commonService.getIsSignup();
  } 

  handleSignUp(event: Event | boolean) {
    console.log('handleSignUp', event);
    this.isLogin = event as boolean;
  }
}
