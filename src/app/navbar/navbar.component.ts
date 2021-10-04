import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public loginService: AuthenticationService,public router: Router) { 
    
  }
  /*
  user:any;
  roleuser:any;
  name :any;
  lastname :any;
  */
   
  ngOnInit(): void {
    /*this.user = sessionStorage.getItem('username');
    this.roleuser = sessionStorage.getItem('role');
    this.name = sessionStorage.getItem('name');
    this.lastname = sessionStorage.getItem('lname');*/
  }

}
