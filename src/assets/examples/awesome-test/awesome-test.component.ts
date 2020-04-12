import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'exp-awesome-test',
  templateUrl: './awesome-test.component.html',
  styleUrls: ['./awesome-test.component.scss']
})
export class AwesomeTestComponent implements OnInit {

  @Input() buttonInfo = 'default button text';
  @Output() buttonAction = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }


}
