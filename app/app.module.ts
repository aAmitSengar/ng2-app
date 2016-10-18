import { NgModule}       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { NKDatetimeModule } from 'ng2-datetime/src/ng2-datetime/ng2-datetime.module';
 // Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';
import './rxjs-extensions';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';
import { AppRoutingModule }     from './app-routing.module';
import {HomeComponent}          from './home.component';
import {HeroSearchComponent}    from './hero-search.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NKDatetimeModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HomeComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
