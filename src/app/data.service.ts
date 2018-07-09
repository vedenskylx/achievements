import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



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

export class Achievement {
  id : number;
  src : string;
  points : number;
  nick : string;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  units : Object;
  achievements : Array<Achievement>;

  constructor(private http: HttpClient) {
    this.units = {
      managers : [
        {
          id : 1,
          name : 'Дима Мордяшев',
          description : 'Дима Мордяшев — один из самых опытных сотрудников в Digitalwand, на его долю уже выпало немало испытаний, и он выдержал их с честью.',
          ava : 'http://bnetcmsus-a.akamaihd.net/cms/gallery/2PX28FWG0LBU1456963821279.jpg',
          achievements : [4, 7, 8],
          skills : [

            {
              name : 'Укрощение клиента',
              value : 70
            }
          ]
        },
        {
          id : 2,
          name : 'Андрей Козлов',
          description : 'Андрей бьется с заказчиком лицом к лицу, полагаясь на аргументы и вежливость. ТМ или фикс — не столь важно, какие проекты берет Андрей. Он сумеет не только защитить разработчиков от когтей и клинков заказчика, но и получит за них деньги.',
          ava : 'https://bnetcmsus-a.akamaihd.net/cms/gallery/ZNPM9RQETYC21457032234435.jpg',
          achievements : [9],
          skills : [

            {
              name : 'Укрощение клиента',
              value : 50
            }
          ]
        }
      ],
      developers : [
        {
          id : 0,
          name : 'Миша Ганюшкин',
          description : 'В отличие от других разработчиков digitalwand, Миша явилися в офис извне. Когда-то его шаманское племя обитало в цветущем МФЦ.',
          ava : 'http://bnetcmsus-a.akamaihd.net/cms/gallery/TV6CW7CF1WGD1456963822032.jpg',
          achievements : [0, 2, 5, 6],
          skills : [
            {
              name : 'Bitrix',
              value : 75
            },
            {
              name : 'Laravel',
              value : 50
            },
            {
              name : 'D7',
              value : 60
            },
            {
              name : 'JS',
              value : 40
            },
            {
              name : 'CSS',
              value : 20
            },
          ]
        },
        {
          id : 1,
          name : 'Леша Солопов',
          description : 'Леша — наставник в практиках разработки, идущих не от богов, а от самих технологий. Технологии хаотичны: если их не сдерживать, они сходятся друг с другом в бесконечной схватке. Задача Леши — принести равновесие в этот хаос. ',
          ava : 'http://bnetcmsus-a.akamaihd.net/cms/gallery/LPEY9SFJT7PB1457032234088.jpg',
          achievements : [0, 4, 8],
          skills : [
            {
              name : 'Bitrix',
              value : 90
            },
            {
              name : 'Laravel',
              value : 70
            },
            {
              name : 'Yii2',
              value : 75
            },
            {
              name : 'JS',
              value : 80
            },
            {
              name : 'CSS',
              value : 75
            },
          ]
        },
        {
          id : 2,
          name : 'Слава Разводов',
          description : 'Перед лицом 1с большинство разработчиков видят смерть. Слава видит огромные возможности. Его цель — оптимизировать БД, в ее достижении ему помогают темные искусства. Этот разработчик призывают нейросети, которые сражаются на его стороне. ',
          ava : 'https://bnetcmsus-a.akamaihd.net/cms/gallery/YDUU4KIKVCLY1457032234192.jpg',
          achievements : [0, 4, 8],
          skills : [
            {
              name : 'Bitrix',
              value : 90
            },
            {
              name : 'Laravel',
              value : 70
            },
            {
              name : 'Yii2',
              value : 75
            },
            {
              name : 'JS',
              value : 80
            },
            {
              name : 'CSS',
              value : 75
            },
          ]
        },
        {
          id : 3,
          name : 'Максим Ушаков',
          description : 'Максим тщательно готовится к выполнению таска, а с релизами сражается лицом к лицу, принимая все удары на себя. Он пользуется различными плагинами,  фреймворками и применяет разнообразное CMS, чтобы защитить своих более хрупких коллег.',
          ava : 'https://bnetcmsus-a.akamaihd.net/cms/gallery/9w/9WL35DUZNSG01457032148687.jpg',
          achievements : [3, 7, 5, 4],
          skills : [
            {
              name : 'Bitrix',
              value : 40
            },
            {
              name : 'Laravel',
              value : 30
            },
            {
              name : 'Yii2',
              value : 30
            },
            {
              name : 'JS',
              value : 50
            },
            {
              name : 'CSS',
              value : 70
            },
          ]
        }
      ]
    };

    this.achievements = [
      {
        id : 0,
        src : '/assets/img/achives/fast.jpg',
        points : 10,
        nick : ''

      },
      {
        id : 1,
        src : '/assets/img/achives/govnokod.jpg',
        points : 10,
        nick : ''

      },
      {
        id : 2,
        src : '/assets/img/achives/misha.jpg',
        points : 10,
        nick : ''

      },
      {
        id : 3,
        src : '/assets/img/achives/molbers.jpg',
        points : 10,
        nick : ''

      },
      {
        id : 4,
        src : '/assets/img/achives/nstra.jpg',
        points : 10,
        nick : ''

      },
      {
        id : 5,
        src : '/assets/img/achives/onmystand.jpg',
        points : 10,
        nick : ''

      },
      {
        id : 6,
        src : '/assets/img/achives/time20.jpg',
        points : 20,
        nick : ''

      },
      {
        id : 7,
        src : '/assets/img/achives/valent.jpg',
        points : 10,
        nick : ''

      },
      {
        id : 8,
        src : '/assets/img/achives/firechair.jpg',
        points : 60,
        nick : 'Falcon 9'
      },
      {
        id : 9,
        src : '/assets/img/achives/superman.jpg',
        points : 60,
        nick : 'Кал-Эл'
      }
    ];
  }

  getUnits() {
    return this.units;
  }

  getManager(id) {
    return this.units['managers'].find(item => item.id === parseInt(id));
  }

  getDeveloper(id) {
    return this.units['developers'].find(item => item.id === parseInt(id));
  }

  getAchievements(ids) {
    var arr = ids;
    var res = [];
    var points = 0;
    var nick = '';

    for (var i = 0; i < arr.length; i++) {
      res[i] = this.achievements.find(item => item.id === arr[i]);
      points = points + res[i].points;
      nick = res[i].nick;
    }
    return {
      points : points,
      achievements : res,
      nick : nick
    }
  }
}
