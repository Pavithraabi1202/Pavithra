import { Component } from '@angular/core';

@Component({
  selector: 'HopeTutors-datachecker',
  templateUrl: './datachecker.component.html',
  styleUrls: ['./datachecker.component.css']
})
export class DatacheckerComponent {
  currentItem!: any;
  age!: number;
  IsVote!:boolean

  setUppercaseName(name: string) {
    this.currentItem = name.toUpperCase();
  }
  checkAgeLimit(age: number) {
    if (age > 18) {
      this.IsVote = true;
    }
    else
    {
      this.IsVote = false;
    }
  }

}
