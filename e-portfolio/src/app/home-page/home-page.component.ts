import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      state('out', style({ opacity: 1, transform: 'translateY(20px)' })),
      transition('out => in', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out')
      ]),
      transition('in => out', [
        animate('600ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
      ])
    ])
  ]
})


export class HomePageComponent {
  title: string = "e-portfolio";

  private isThrottled = false; // Flag to prevent more than 1 scroll at a time before the initial scrolls completes

  sections = ['section1', 'section2', 'section3', 'section4'];
  sectionStates: { [key: string]: string } = { section1: 'out', section2: 'out', section3: 'out', section4: 'out' }

  // Listen for window scroll event
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkScroll();
  }

  @HostListener('window:wheel', ['$event'])
  onScrollFocus(event: WheelEvent): void {
    if(this.isThrottled) {
      return; // Ignore scroll if one is still in progress
    }

    this.isThrottled = true;

    if (event.deltaY > 0) {
      // Scroll down by one full view port height
      window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
    } else {
      window.scrollBy({top: -window.innerHeight, left: 0, behavior: 'smooth'})
    }

    setTimeout(() => {
      this.isThrottled = false
    }, 1000);
  }


  checkScroll() {
    const section1 = document.getElementById('section1') as HTMLElement | null;
    const section2 = document.getElementById('section2') as HTMLElement | null;
    const section3 = document.getElementById('section3') as HTMLElement | null;
    const section4 = document.getElementById('section4') as HTMLElement | null;

    const sections = [section1, section2, section3, section4];

    sections.forEach((section, index) => {
      if (section) {
        const binding = section.getBoundingClientRect();
        const sectionName = `section${index + 1}`;

        if (binding.top >= 0 && binding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
          this.sectionStates[sectionName] = 'in'; // Fade in
        } else {
          this.sectionStates[sectionName] = 'out' // Fade out
        }
      }
    });
  }
}
