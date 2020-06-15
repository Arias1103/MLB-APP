import { Component } from '@angular/core';
import { Configuration} from './Models/configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Getinsoft Test Arias';
  showGames: boolean = true;
  config;

  constructor(){
    this.title=Configuration.title;
    this.config=Configuration;
  }

  hideGames(value){
   this.showGames= value;
  }
}
