import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

export class Achievement {
  id : number;
  src : string;
  points : number;
  nick : string;
}
export class Developer {
  id : number;
  name : string;
  description : string;
  ava : string;
  achievements : Array<number>;
  skills : Array<number>;
}
@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})

export class DeveloperComponent implements OnInit {

  id: number;
  developer : Developer;
  achievements : Array<Achievement>
  points : number;
  nick : string;
  nickname : string;
  sub : object;

  constructor(private route: ActivatedRoute, private data: DataService) {}

  ngOnInit() {

    //this.developer = {};
    this.achievements = [];
    this.points = 0;
    this.nickname = '';

    this.sub = this.route.params.subscribe(params => {
        this.id = params['id'];

        var $data = this.data.getDeveloper(this.id);

        if($data){
          this.developer = $data;

          if($data.achievements.length>0){
            var ach = this.data.getAchievements($data.achievements);
            this.achievements = ach.achievements;
            this.points = ach.points;
            this.nick = ach.nick;

            if(this.nick.length>2){
              var $name = $data.name.split(' ');
              this.nickname = $name[0] + ' «' + this.nick + '» ' + $name[1];
            }
          }
        }
    });
  }

}
