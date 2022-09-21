import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit {
  //isUserLoggedIn: boolean = false;
  constructor(public hardcodedAuthenticationService: 
    HardcodedAuthenticationService) {


  }

  ngOnInit(): void {
  //  this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
