import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import { AppModule } from './app.module';
import { Router}   from '@angular/router';
const platform = platformBrowserDynamic();
enableProdMode();
platform.bootstrapModule(AppModule);
