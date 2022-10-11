import { Component } from '@angular/core';
import { Global } from './classes/global';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'outstagram';
  global: Global = Global;

}
