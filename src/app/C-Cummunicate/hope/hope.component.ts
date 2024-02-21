import { Component, Input } from '@angular/core';

@Component({
  selector: 'HopeTutors-hope',
  templateUrl: './hope.component.html',
  styleUrls: ['./hope.component.css']
})
export class HopeComponent {

  // items = ['Hope','Tutors','Training','Institute','Chennai','India'];
   @Input() customColor!: string;
  // addItem(newItem: string) {
  //   this.items.push(newItem);
  // }

}
