import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ExperienceComponent } from './experience/experience.component';
import { CertificateComponent } from './certificate/certificate.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: "home", component: HomePageComponent },
    { path: "about", component: AboutComponent },
    { path: "experience", component: ExperienceComponent },
    { path: "certificate", component: CertificateComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" }
];
