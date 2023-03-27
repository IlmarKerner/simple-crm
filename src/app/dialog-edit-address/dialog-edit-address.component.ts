import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent implements OnInit {

user = new User();
loading = false;

  constructor(
    private firestore: AngularFirestore,
    public dialogRef: MatDialogRef<DialogEditAddressComponent>
  ) {

  }
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  closeWindow() {
    this.dialogRef.close();
  }

  saveUser() {

  }
}
