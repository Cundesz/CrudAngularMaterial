import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Search } from './search/search';

export const routes: Routes = [
    { path: 'forms', component: Register },
    { path: 'search', component: Search },
];
