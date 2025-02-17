import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },  // Redirige vers HomeComponent
    { path: 'home', component: HomeComponent }, 
  
  { path: 'product/:id', component: ProductComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
  
];