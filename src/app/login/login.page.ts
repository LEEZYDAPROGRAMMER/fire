import { Component, OnInit } from '@angular/core';
import { UserService } from '../UserService/user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
email
password
  constructor(public user:UserService, public alertController: AlertController ) { }
 
  ngOnInit() {
  }
  async resetPassword() {
    const alert = await this.alertController.create({
      header: 'Email',
      inputs: 
      [
        {
          name: 'email',
          type: 'email',
          placeholder: 'enter your email'
        }
  
      ],
      buttons: 
      [
        {
          
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Send',
          handler: (email) => {
            this.user.resetPassword(email.email)
            console.log(email);
          }
        
        }
      ]

    });
    await alert.present();
  }

  login()
  {

   this.user.login(this.email,this.password)
   
   this.email=null;
   this.password=null;
  }
  logout()
  {

    this.user.logout()
  }
}
