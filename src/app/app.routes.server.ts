import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'home',
    renderMode: RenderMode.Client
  },
  {
    path: 'chronicle',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'chat',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
