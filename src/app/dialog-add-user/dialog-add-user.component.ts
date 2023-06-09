import { Component } from '@angular/core';
import { User } from '../models/user.class';
import { Firestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';

// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent {
  user = new User();
  birthDate: Date;

  loading = false;

  closeWindow() {
    this.dialogRef.close();
  }

  constructor(
    private firestore: AngularFirestore,
    public dialogRef: MatDialogRef<DialogAddUserComponent>
  ) {}

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
    this.loading = true;
    this.firestore
      .collection('users')
      .add(this.user.toJSON())
      .then((result: any) => {
        this.loading = false;
        console.log(result);
        this.dialogRef.close();
      });
  }
}
