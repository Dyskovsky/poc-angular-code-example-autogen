import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'exp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http: HttpClient) {}



  files = [
    'awesome-test.component.html',
    'awesome-test.component.scss',
    'awesome-test.component.spec.ts',
    'awesome-test.component.ts',
    'awesome-test.module.ts',
  ];
}
