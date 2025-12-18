import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import {provideServerRendering, withAppShell, withRoutes} from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import {AppShell} from './components/shared/app-shell/app-shell';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes), withAppShell(AppShell))
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
