import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ExperienceComponent } from './experience/experience.component';
import { CertificateComponent } from './certificate/certificate.component';

export const routes: Routes = [
    { path: "home", component: HomePageComponent },
    { path: "experience", component: ExperienceComponent },
    { path: "certificate0", component: CertificateComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" }
];
