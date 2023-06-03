import { Component } from '@angular/core';
import { Random } from 'random';
import { DevicesArriving } from '../models/devices-arriving';
import { Technical } from '../models/technical';

@Component({
  selector: 'app-state-vector',
  templateUrl: './state-vector.component.html',
  styleUrls: ['./state-vector.component.css']
})
export class StateVectorComponent {
  // mock dataSource, each element with eventName, clock, secuencial numbers
  dataSource: any;

  // displayedColumns is used to display the columns in the table
  displayedColumns = [
    'eventName',
    'clock',
    'arrivingDevices',
    'workFinishing',
    'technical'
  ];
  arrivingEvents = [
    'rnd',
    'arrivingTime',
    'nextArriving',
    'rndWork',
    'work',
    'rndFinishing',
    'finishing',
    'finishingTime',
    'technicalState',
    'technicalQueue',
  ];

  // concat displayedColumns and arrivingEvents
  columnsToDisplay = [
    'eventName',
    'clock',
    'rnd',
    'arrivingTime',
    'nextArriving',
    'rndWork',
    'work',
    'rndFinishing',
    'finishing',
    'finishingTime',
    'technicalState',
    'technicalQueue'
  ]
  clock: number;
  nextArriving: any;

  constructor() {
    this.clock = 0;
  }

  // ng on init
  ngOnInit() {
    const rndGenerator = new Random();
    this.dataSource = [];

    // loop 10 times
    for (let i = 0; i < 10; i++) {
      console.log('i', i)

      const devicesArriving = new DevicesArriving(rndGenerator);
      const arrivingTime = +devicesArriving.arrivingTime;
      this.nextArriving = this.clock + arrivingTime;
      // get Technical instance
      const technical = Technical.getInstance();
      // set technical state to Ocupado
      technical.setState('Libre');
      this.dataSource.push(
        {
          eventName: '',
          clock: i === 0 ? 0 : this.getNextEventTime(),
          rnd: devicesArriving.rnd,
          nextArriving: this.nextArriving,
          arrivingTime: arrivingTime,
          rndWork: '',
          work: '',
          rndFinishing: '',
          finishing: '',
          finishingTime: '',
          technicalState: technical.getState(),
          technicalQueue: '',
        }
      )
      const nextEventTime = this.getNextEventTime();
    }

    console.log(this.dataSource)
  }

  getNextEventTime(): number {
    return Math.min(this.nextArriving); // TODO, add more events
  }
}
