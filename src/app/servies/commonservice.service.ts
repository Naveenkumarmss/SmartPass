import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor() { }

  private isSignup: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private isLogin: BehaviorSubject<boolean> = new BehaviorSubject(false);
  
  getIsSignup(): boolean {
    return this.isSignup.getValue();
  }

  getIsLogin(): boolean {
    return this.isLogin.getValue();
  }

  setIsSignup(isSignup: boolean) {  
    this.isSignup.next(isSignup);
  }

  setIsLogin(isLogin: boolean) {  
    this.isLogin.next(isLogin);
  }

}
