import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public menuItems = [
    {
      name : "Missions",
      path : "/missions"
    },
    {
      name : "Company info",
      path : "/companyInfo"
    }
  ];

  title = 'Space X';

  config = {
    title : 'Space X',
    version : ''
  }

  constructor(private router: Router){
    
  }

  goToMissionsPage(){
    this.router.navigate(['missions']);
  }
}
