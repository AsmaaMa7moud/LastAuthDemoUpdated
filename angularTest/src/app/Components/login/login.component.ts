import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserName :string
  Password:string

  constructor(private adminService:AuthService,private router: Router) { }

  ngOnInit(): void {
  }
  userAuth()
  {
    this.adminService.userAuth(this.UserName,this.Password).subscribe(
      (res:any)=>{
        this.adminService.login(res.auth_token);
        console.log("Authorized");
        alert("Success")
       
      },
      err=>{console.log(err);
        alert("Success")}
    );
  }

}
