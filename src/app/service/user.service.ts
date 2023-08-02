import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   baseUrl;
  
   constructor(private HttpClient:HttpClient) { 
    this.baseUrl = "http://localhost:8000/api";
  }

 public login(email:string,password:string){
  
  const body = {email,password};
  
  const loginUrl =`${this.baseUrl}/login`;
  
  return this.HttpClient.post(loginUrl,body);
 }
}
