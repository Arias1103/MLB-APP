import { Component, OnInit } from '@angular/core';
import{Team} from '../Models/Team';

@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
public ligue: string;
public conference: string;
public teams: Array<Team>;

  constructor() { 
    this.ligue="Major legue baseball";
    this.conference = "American"
    this.teams=[
      new Team('Blue jays',20,'Toronto',500),
      new Team('Meats',22,'New York',1000),
      new Team('Tigers',20,'Detroit',200),
      new Team('Red Sox',20,'Boston',2000),
      new Team('Yankees',20,'New York',2000),
      new Team('Cubs',20,'Chicago',400),
      new Team('Padres',20,'San Diego',350)

    ];
  }
  ngOnInit(){
    console.log(this.teams);
  }
  ChangeLigue(){
   this.conference="National"
  }
}
