import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'HopeTutors-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent {
  Userdata: any;

  constructor(private service: UserService) {
    this.LoadUserData();
  }

  private LoadUserData() {
    this.service.Userproducts().subscribe((data) => {
      this.Userdata = data.users;
    });
  }

}
