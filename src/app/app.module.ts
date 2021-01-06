import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbThemeModule } from '@nebular/theme';
import { TableComponent } from './table/table.component';
import { NbTreeGridShowcaseComponent } from './nb-tree-grid-showcase/nb-tree-grid-showcase.component';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    
    AppComponent,
    TableComponent,
    NbTreeGridShowcaseComponent
  ],
  imports: [
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbTabsetModule,
    NbUserModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    BrowserModule,
    AppRoutingModule,
    Ng2SmartTableModule,
    NbThemeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
