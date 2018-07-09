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

export class Manager {
  id : number;
  name : string;
  description : string;
  ava : string;
  achievements : Array<number>;
  skills : Array<number>;
}

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})

export class ManagerComponent implements OnInit {

  id : number;
  manager : Manager;
  achievements : Array<Achievement>;
  points : number;
  nick : string;
  nickname : string;
  sub : object;

  constructor(private route: ActivatedRoute, private data: DataService) {}

  ngOnInit() {

    //this.manager = Manager;
    this.achievements = [];
    this.points = 0;
    this.nickname = '';

    this.sub = this.route.params.subscribe(params => {
        this.id = params['id'];

        var $data = this.data.getManager(this.id);

        if($data){
          this.manager = $data;

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
