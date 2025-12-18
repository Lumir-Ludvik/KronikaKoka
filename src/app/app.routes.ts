import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {NotFound} from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/chronicle',
    loadComponent: () => import("./pages/chronicle/chronicle").then((c => c.Chronicle))
  },
  {
    path: '/chat',
    loadComponent: () => import("./pages/chat/chat").then((c => c.Chat))
  },
  {
    path: '**',
    component: NotFound
  }
];
