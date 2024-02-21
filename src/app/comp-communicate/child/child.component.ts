import { Component, Input } from '@angular/core';

@Component({
  selector: 'HopeTutors-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() customColor!: string;

}
