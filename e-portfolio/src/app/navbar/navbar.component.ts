import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  lastScrollTop = 0
  visibleHeader = true

  @HostListener('window:scroll', [])
  onScroll() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop
    
    // Show or hide header based on scroll direction
    if(currentScroll > this.lastScrollTop && currentScroll > 100) {
      this.visibleHeader = false
    }else {
      this.visibleHeader = true
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll

  }
 
}
