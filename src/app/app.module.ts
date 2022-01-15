import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { SessionModule } from './session-item-list/session.module';
import { AdminModule } from './admin/admin.module';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin/admin.component';

const appRoutes: Routes = [
  { path: 'list',  component: SessionItemListComponent},
  { path: 'admin', component : AdminComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
 ];

@NgModule({
  declarations: [ AppComponent ],
  imports: [  RouterModule.forRoot(appRoutes,   { enableTracing: true }), 
    BrowserModule, SessionModule, AdminModule  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ SessionItemComponent,
    SessionItemListComponent ]
})
export class AppModule { }