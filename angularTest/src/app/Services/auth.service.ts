import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RegisterUser } from '../ViewModel/register-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  private baseUrlLogin = 'api/Account/Login';
  //communicate with web api
    Login(userData) {
      return this.httpClient.post(`${environment.API_URL}/LoginWithExternal`,userData)
    }
     
  addUser(user:RegisterUser){
   
  
    return this.httpClient.post(`${environment.API_URL}/Register`,user)
  }
  userAuth(UserName:string,Password:string)
  {
   
    var data = {userName : UserName , password : Password};
   
    return this.httpClient.post(`${environment.API_URL}/Login`
    ,data);
  }
  login(token)
  {
    localStorage.setItem('usertoken',token);
 
  }
  logout()
  {
    localStorage.removeItem('usertoken');
  }
  islogged():boolean
  {
    
    if(localStorage.getItem('usertoken'))
    {
      
      return true;
    }
    else
    {
     
      return false;
    }
  }
}
