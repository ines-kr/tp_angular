import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { AdminComponent } from './admin/admin.component';
import { SessionModule } from '../session-item-list/session.module';
import { FakeSessionItemService } from './fake-session-item.service';
import { SessionItemListComponent } from '../session-item-list/session-item-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SessionItemComponent } from '../session-item/session-item.component';

const adminRoutes: Routes = [
    {
    path: '',
    component: AdminComponent,
    children: [{ path: 'add', component: SessionAddFormComponent },
    { path: 'edit/:id', component: 
   SessionEditFormComponent },
    { path: 'list', component: SessionItemListComponent 
   },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
    ],
    }
   ];

@NgModule({
 imports: [RouterModule.forChild(adminRoutes),
     CommonModule, FormsModule, SessionModule],
 declarations: [SessionAddFormComponent, SessionEditFormComponent, AdminComponent],
 providers: [FakeSessionItemService],
 bootstrap: [AdminComponent]
})

export class AdminModule { }