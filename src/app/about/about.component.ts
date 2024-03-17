import { CommonModule } from '@angular/common';
import { AfterContentInit, ChangeDetectorRef, Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';


interface About {
  header: string;
  content: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatExpansionModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterContentInit {
  data: About[] = [
    {
      header: "Welcome to Your Bus Pass Service!",
      content: ["At Your Bus Pass Service, we're dedicated to simplifying your journey \
      through convenient and efficient public transportation. Whether you're \
      renewing your bus pass or applying for a new one, we're here to streamline \
      the process and save you time. "]
    }, {
      header: "Our Vision",
      content: ["Our vision is to create a seamless experience for commuters by offering an \
      easy-to-use online platform for both renewing and applying for new bus \
      passes. We aim to revolutionize the way people access public \
      transportation services, making it more accessible and convenient for \
      everyone."]
    }, {
      header: "What We Offer",
      content: ["Convenience: With our web application, you can both renew your existing \
      bus pass and apply for a new one from the comfort of your home or \
      office, eliminating the need to visit a physical location.",
      "Efficiency: Say goodbye to long queues and paperwork. Our streamlined \
      process ensures quick and hassle-free renewal of existing passes and \
      straightforward application for new ones.",
      "Security: We prioritize the security of your personal information. Our \
      platform employs the latest encryption technology to safeguard your \
      data.", 
      "Accessibility: Our user-friendly interface is designed to be accessible \
      to all users, including those with disabilities.",
      "Customer Support: Have questions or need assistance? Our dedicated \
      customer support team is here to help you every step of the way."]
    }, {
      header: "Why Choose Us?",
      content: ["Reliability: We are committed to providing a reliable service that you \
      can trust.",
      "Innovation: We continually strive to innovate and improve our platform \
      to better serve our customers.",
      "Community Impact: By promoting the use of public transportation, we \
      contribute to reducing traffic congestion and environmental pollution, \
      making our communities cleaner and more sustainable."]
    }
  ]

  constructor(public cdRef: ChangeDetectorRef) {

  }

  ngAfterContentInit(): void {
    this.cdRef.detectChanges();
  }
}
