import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../models/user.class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user = new User();

  // user: User = new User();
  //variable: User = neue Instanz

  constructor(public dialog: MatDialog) {
    
  }
  
  ngOnInit(): void {
    
  }

  openDialog() {
this.dialog.open(DialogAddUserComponent);
  }

}
