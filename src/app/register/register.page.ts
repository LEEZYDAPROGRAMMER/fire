import { Component, OnInit } from '@angular/core';
import { UserService } from '../UserService/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name
  email
  password
  constructor(public user:UserService) 
   {
          

   }
   signup()
   {
      this.user.signup(this.name,this.email,this.password)
      this.name=null;
      this.email=null;
      this.password=null;
   }
  ngOnInit() {
  }

}
