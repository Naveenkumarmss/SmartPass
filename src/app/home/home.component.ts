import { ChangeDetectorRef, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {  Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  userName: string = "Welcome " + (localStorage.getItem("name") || "User")

  constructor(
    public cdRef: ChangeDetectorRef,
    private router: Router,
    private cookies: CookieService
  ) { }

  handleRoute(route: string) {
    this.router.navigate(["home/"+route]).then(() => {
      this.cdRef.detectChanges();
    });
  }

  logout() {
    localStorage.clear();
    this.cookies.deleteAll();
    setTimeout(() => {
      this.router.navigate(["login"]).then(() => {
        this.cdRef.detectChanges();
      });
    }, 500)
  }
}
