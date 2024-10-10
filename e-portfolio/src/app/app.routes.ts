import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ExperienceComponent } from './experience/experience.component';
import { CertificateComponent } from './certificate/certificate.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';

export const routes: Routes = [
    { path: "home", component: HomePageComponent },
    { path: "about", component: AboutComponent },
    { path: "experience", component: ExperienceComponent },
    { path: "certificate", component: CertificateComponent },
    { path: "project", component: ProjectComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" }
];
