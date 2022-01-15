import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FakeSessionItemService } from '../admin/fake-session-item.service';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  alignement='right';
  couleur = 'red';
  session_name='Formation Web';
  @Input() session: any;
  @Output() participantsChange = new EventEmitter<any>();
  
  inscrire () {
    console.log('Nouvelle Inscription...'); 
    this.session.participants = +this.session.participants + 1; 
    console.log(this.session.participants + ' Participants'); 
    this.participantsChange.emit({value: this.session.participants });
    if (this.session.participants >= 20) { 
      this.session.isCompleted = true;
    }
  }
  onDelete(){
    console.log(this.session);
    this.sessionItemService.delete(this.session);
  }
  constructor( private sessionItemService : FakeSessionItemService) { 
  }

  ngOnInit(): void {
  }
}