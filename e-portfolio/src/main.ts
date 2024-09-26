import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HomePageComponent } from './app/home-page/home-page.component';

bootstrapApplication(HomePageComponent, {
  providers: [
    provideAnimations(),  // Enable animations globally here
  ]
}).catch(err => console.error(err));
