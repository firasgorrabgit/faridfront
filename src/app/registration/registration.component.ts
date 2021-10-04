import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { RegistrationService } from '../services/registration.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router,
    private service: RegistrationService) { }

  ngOnInit(): void {
  }

  createUser(myform){

    this.service.createUser(myform).subscribe(
      data => {
        console.log(data) ;
      alert("inscription avec success");
       this.router.navigate(['login']);
       
    },
    
    
    );
  }
}
