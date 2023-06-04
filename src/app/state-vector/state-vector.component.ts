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
  eventsToBeProcessed: any;

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
    'timeBetweenArrivings',
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
    'timeBetweenArrivings',
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
    this.eventsToBeProcessed = [];
    // loop 10 times
    for (let i = 0; i < 10; i++) {
      const devicesArriving = new DevicesArriving(rndGenerator);
      const timeBetweenArrivings = +devicesArriving.timeBetweenArrivings;
      devicesArriving.nextArriving = this.clock + timeBetweenArrivings;
      // get Technical instance
      const technical = Technical.getInstance();
      // set technical state to Libre
      technical.setState('Libre');
      const event = {
        eventName: '',
        clock: 0,
        rnd: devicesArriving.rnd,
        nextArriving: devicesArriving.nextArriving,
        timeBetweenArrivings: timeBetweenArrivings,
        rndWork: '',
        work: '',
        rndFinishing: '',
        finishing: '',
        finishingTime: '',
        technicalState: technical.getState(),
        technicalQueue: '',
      }

      let nextEvent;
      if (i === 0) {
        event.eventName = 'Inicialización';
        nextEvent = event;
      } else {
        nextEvent = this.getNextEvent();
        event.eventName = 'Llegada de equipo';
        event.clock += nextEvent.nextArriving;
        this.dataSource.push(nextEvent);
      }
      this.eventsToBeProcessed.push(event);
      this.clock = event.nextArriving;
    }
  }
  // get next event
  getNextEvent() {
    console.log(this.eventsToBeProcessed)
    // find the event with the lowest nextArriving in the eventsToBeProcessed array
    const nextEvent = this.eventsToBeProcessed.reduce((prev: any, curr: any) => {
      return prev.nextArriving < curr.nextArriving ? prev : curr;
    });
    // remove the event from the eventsToBeProcessed array
    this.eventsToBeProcessed = this.eventsToBeProcessed.filter((event: any) => {
      return event !== nextEvent;
    });
    console.log(this.eventsToBeProcessed)
    return nextEvent;
  }
}
