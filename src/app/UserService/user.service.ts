import { Injectable } from '@angular/core';
import * as firebase from 'firebase'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  login(email,password)
  {
   
    firebase.auth().signInWithEmailAndPassword(email,password).catch((error)=> {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorMessage)
    }).then((result)=>{

      console.log("user is logged in")
    });

  }
  signup(name,email,password)
  {
   
  
    firebase.auth().createUserWithEmailAndPassword(email,password).catch((error)=> {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      
      // ...
      console.log(errorMessage)
    }).then((result)=>{
      
      console.log("user is registered");
    });
    
  }

  resetPassword(email)
  {
    
    firebase.auth().sendPasswordResetEmail(email).catch((error)=> {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorMessage)
      // ...
     
    }).then((result)=>{
      
      console.log("password reset is sent");
    });

  }

  
  logout()
  {
    firebase.auth().signOut().catch((error)=> {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorMessage)
      // ...
     
    }).then((result)=>{
      
      console.log("user is logged out");
    });

  }
}
