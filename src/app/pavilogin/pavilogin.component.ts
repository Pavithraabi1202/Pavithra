import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'HopeTutors-pavilogin',
  templateUrl: './pavilogin.component.html',
  styleUrls: ['./pavilogin.component.css']
})
export class PaviloginComponent {
  private firstNumber!: number;
  private secondNumber: number = 100;
  public resultArr: string[] = ['Shimmni Rai', 'Pavithra', 'Hope Tutors'];
  private responseData: any;

  constructor(private auth:AuthService) { }

  Login = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required])
  });

  public ProceedLogin(): void {
    if (this.Login.valid) {

      this.auth.CheckLogin(this.Login.value).subscribe((response: any) => {
        console.log(response);
      });
      console.log("Inside Login function");

    }
    else {
      console.log('Login Failed');
    }

  }
}