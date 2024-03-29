import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppComponent }        from './app.component';
import { AppRoutingModule }    from './app-routing.module';
import { HeroesComponent }     from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService }         from './hero.service';
import { DashboardComponent }  from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';

import './rxjs-extensions';

@NgModule({
    imports: [
    	BrowserModule,
    	FormsModule,
    	AppRoutingModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		AppRoutingModule
    ],
    declarations: [
    	AppComponent,
    	DashboardComponent,
    	HeroesComponent,
    	HeroDetailComponent,
		HeroSearchComponent
    ],
    providers: [
    	HeroService
    ],
    bootstrap: [
    	AppComponent
    ]
})

export class AppModule { }
