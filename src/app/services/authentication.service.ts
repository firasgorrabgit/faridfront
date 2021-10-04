import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  

  


  constructor(private httpClient: HttpClient) { }

  public susermail = sessionStorage.getItem('email');
  public sroleuser = sessionStorage.getItem('role');
  public sname = sessionStorage.getItem('name');
  public slastname = sessionStorage.getItem('lname');

  authenticate(username, password) {
    
   // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
   //const headers = new HttpHeaders({ Authorization: 'Bearer ' + sessionStorage.getItem('Bearertoken') });
    
    return this.httpClient.post(environment.urlAuth,
      {"username" :username,
      "password" :password
    }
      ).pipe(
    //return this.httpClient.get('http://localhost:8081/basicauth').pipe(
 map(
 userData => {
   
 
  //sessionStorage.setItem('username', username);
 sessionStorage.setItem('lname', userData["lastname"]);
 sessionStorage.setItem('name', userData["name"]);
 sessionStorage.setItem('email', userData["email"]);
 sessionStorage.setItem('role', userData["role"]);
 console.log("username --->"  + username);
console.log( userData['lastname']  + userData["role"] );

this.susermail =sessionStorage.getItem('email');
this.slastname= sessionStorage.getItem('lname');
 this.sname= sessionStorage.getItem('name');
 this.sroleuser =sessionStorage.getItem('role');
 
/*
 let authString = 'Basic ' + btoa(username + ':' + password);
 sessionStorage.setItem('basicauth', authString);
*/

let Bearertoken = 'Bearer ' + userData["jwttoken"];
 sessionStorage.setItem('Bearertoken', Bearertoken);
 
 console.log(" authenticate ->username : "+  username + "   " + " authenticate  ->password : " + password);
 console.log("userData -> " + userData );
 return userData;
 }
 )
 );
 /*
    if (username === "amine" && password === "1234") {
    sessionStorage.setItem('username', username)
    return true;
    } else {
    return false;
    }
    */
    }

    isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
    }
    
    logOut() {
    sessionStorage.removeItem('email')
    
 /*
 sessionStorage.removeItem('lname');
 sessionStorage.removeItem('name');
 sessionStorage.removeItem('role');
 sessionStorage.removeItem('basicauth');
 */
    }

}
