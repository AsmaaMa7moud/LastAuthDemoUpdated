import { Component, OnInit } from '@angular/core';
import { RegisterUser } from 'src/app/ViewModel/register-user';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:RegisterUser;
  userData: any [] = [];
  resultMessage: string;

  constructor(private adminService:AuthService,private router: Router,private authService:SocialAuthService) {
    this.user={firstName:'',lastName:'',email:'',password:''}
  }

  ngOnInit(): void {
  }
  addUser(){
   
    this.adminService.addUser(this.user).subscribe(
      res=>{
        console.log("inserted")
        this.router.navigateByUrl('/Login');
      },
      err=>{console.log(err);
        
      }
    );
  }
  logInWithGoogle(platform: string): void {
    platform = GoogleLoginProvider.PROVIDER_ID;
    //Sign In and get user Info using authService that we just injected
       this.authService.signIn(platform).then(
    (response) => {
   
         console.log(platform + ' logged in user data is= ' , response);
   
         this.userData.push({
           UserId: response.id,
           Provider: response.provider,
           FirstName: response.firstName,
           LastName: response.lastName,
           EmailAddress: response.email,
           PictureUrl: response.photoUrl
         });
         this.adminService.Login(this.userData[0]).subscribe(
          res=>{
            console.log("inserted")
            
          },
          err=>{console.log(err);
            
          }
        );
     },
     (error) => {
       console.log(error);
       this.resultMessage = error;
    })
  }
  logInWithFacebook(platform: string): void {
    platform = FacebookLoginProvider.PROVIDER_ID;
    //Sign In and get user Info using authService that we just injected
       this.authService.signIn(platform).then(
    (response) => {
    //Get all user details
         console.log(platform + ' logged in user data is= ' , response);
    //Take the details we need and store in an array
         this.userData.push({
           UserId: response.id,
           Provider: response.provider,
           FirstName: response.firstName,
           LastName: response.lastName,
           EmailAddress: response.email,
           PictureUrl: response.photoUrl
         });
         this.adminService.Login(this.userData[0]).subscribe(
          res=>{
            console.log("inserted")
            
          },
          err=>{console.log(err);
            
          }
        );

     },
     (error) => {
       console.log(error);
       this.resultMessage = error;
    })
  }

}

  