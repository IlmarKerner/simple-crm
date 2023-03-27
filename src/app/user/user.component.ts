import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  allUsers = [];

  user = new User();

  // user: User = new User();
  //variable: User = neue Instanz

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) {
    
  }
  
  ngOnInit(): void {
    this.firestore
    .collection('users')
    .valueChanges({idField: 'customIdName'}) // durch das zufügen von "{idField: 'customIdName'}" kann man nun die Id vom User rauslesen
    .subscribe((changes: any) => {
      console.log('Änderungen', changes);
      this.allUsers = changes;
    });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

}
