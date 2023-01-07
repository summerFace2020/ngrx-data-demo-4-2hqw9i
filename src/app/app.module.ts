import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { ContainerInMemDataService } from './mock-web-api';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContainersComponent } from './containers/containers.component';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'api',
  timeout: 3000, // request timeout
}

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig), HttpClientInMemoryWebApiModule.forRoot(ContainerInMemDataService, { delay: 1000 }), StoreDevtoolsModule.instrument() ],
  providers: [{ provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }],
  declarations: [ AppComponent, HelloComponent, ContainersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
