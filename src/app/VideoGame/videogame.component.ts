import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
selector: 'videogame',
templateUrl: './videogame.component.html'
})
export class VideoGameComponent implements OnInit, DoCheck{
   public slogan: string;
   public section: string;
   public 
    constructor(){
    this.section = 'top 5 in this year';
    this.slogan = " MVP's Major League Baseball";
      console.log('Done !!!');
    }

    ngOnInit(){
     // console.log('OnInit loaded');
    }

    ngDoCheck(){
      // console.log('DoCheck loaded');
    }

    // console.log('OnDestroy loaded');
    ngOnDestroy(){
    }
  
}
