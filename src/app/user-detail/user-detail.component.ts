import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { User } from '../models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  userId = '';
  user: User = new User();

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private firestore: AngularFirestore
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      //mit route.paramMap holen und abonieren wir die id -> wird in userId Array gespeichert.
      this.userId = paramMap.get('id');
      console.log(this.userId);
      this.getUser();
    });
  }

  getUser() {
    this.firestore
      .collection('users')
      .doc(this.userId)
      .valueChanges()
      .subscribe((user: any) => {
        this.user = new User(user); //linke "user" aus der Variable, rechte "user" aus subscribe()
        console.log('dein gewählter User:', this.user);
      });
  }

  editUser() {
    const dialogUser = this.dialog.open(DialogEditUserComponent);
    dialogUser.componentInstance.user = new User(this.user.toJSON());
    dialogUser.componentInstance.userId = this.userId;
  }

  editAddress() {
    const dialogAddress = this.dialog.open(DialogEditAddressComponent);
    dialogAddress.componentInstance.user = new User(this.user.toJSON());
    dialogAddress.componentInstance.userId = this.userId;
  }
}
