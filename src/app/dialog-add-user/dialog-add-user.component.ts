import { Component } from '@angular/core';
import { User } from '../models/user.class';
import { Firestore } from '@angular/fire/firestore';
// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  
  user = new User();
  birthDate: Date;

  onNoClick() {

  }

  constructor(private firestore: Firestore) {

  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user)

    // this.firestore.collection('users').add(this.user).then((result: any) => {
    //   console.log(result)
    // });
  }

}
