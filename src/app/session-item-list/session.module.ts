import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FakeSessionItemService } from '../admin/fake-session-item.service';
import { SessionItemListComponent } from './session-item-list.component';
import { InscriptionDisabledDirective } from '../session-item/inscription-disabled.directive';
import { SessionItemComponent } from '../session-item/session-item.component';
@NgModule({
  imports : [CommonModule],
  declarations: [    SessionItemComponent,SessionItemListComponent,InscriptionDisabledDirective  ],
  exports: [   SessionItemComponent,SessionItemListComponent  ],
  providers: [FakeSessionItemService]

})
export class SessionModule { }