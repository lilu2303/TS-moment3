import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConvertComponent } from './convert/convert.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent},
    { path: "convert", component: ConvertComponent},
    { path: "about", component: AboutComponent},
    { path: "404", redirectTo: "/home", pathMatch: "full"},
    { path: "**", redirectTo: "/home", pathMatch: "full"},
    { path: "", redirectTo: "/home", pathMatch: "full"}
];
