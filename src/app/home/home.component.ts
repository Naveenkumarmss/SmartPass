import { ChangeDetectorRef, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {  Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    public cdRef: ChangeDetectorRef,
    private router: Router
  ) { }

  handleRoute(route: string) {
    this.router.navigate(["home/"+route]).then(() => {
      this.cdRef.detectChanges();
    });
  }
}
