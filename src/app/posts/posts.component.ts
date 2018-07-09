import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
export class Manager {
  id : number;
  name : string;
  description : string;
  ava : string;
  achievements : Array<number>;
  skills : Array<number>;
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
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  managers: Object;
  developers : Array<Developer>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.managers = [];
    this.developers = [];
    var $data = this.data.getUnits();
    //console.log(111);

    if($data){
      this.managers = $data['managers'];
      this.developers = $data['developers'];
    }
  }
}
