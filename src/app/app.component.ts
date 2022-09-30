import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  test = 'this is new';
  constructor() {}

  modelChangeFn(event) {
    console.log(event);
    this.test = event.replace(/( \.\d)(\d*)( |)/g, function (matched) {
      return ` 0${matched.trim()}`;
    });
  }
}
