import { Component } from '@angular/core';
import { Random } from 'random';
import { DevicesArriving } from '../models/devices-arriving';
import { Technical } from '../models/technical';
import { WorkFinishing } from '../models/work-finishing';

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
    'technical',
    'devices'
  ];

  tempObjectsColumnsTemplate = [
    'Estado',
    'Hora',
    'Cambio',
  ];
  tempObjectsColumns: string[] = [
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
    'technicalQueue',
  ]
  clock: number;
  nextArriving: any;
  colspan = 3;

  constructor() {
    this.clock = 0;
  }
  // ng on init
  ngOnInit() {
    const rndGeneratorArrivings = new Random();
    const rndGeneratorWork = new Random();
    this.dataSource = [];
    this.eventsToBeProcessed = [];
    // loop 10 times
    for (let i = 0; i < 10; i++) {
      const temporalObjectInstance = this.getTemporalObjectInstance(i);
      this.tempObjectsColumns.push(...temporalObjectInstance);
      const devicesArriving = new DevicesArriving(rndGeneratorArrivings);
      const timeBetweenArrivings = +devicesArriving.timeBetweenArrivings;
      devicesArriving.nextArriving = this.clock + timeBetweenArrivings;
      // get Technical instance
      const technical = Technical.getInstance();
      // set technical state to Libre
      technical.setState('Libre');
      let event = {
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
      if (i > 0) {
        const workFinishing = this.getWorkFinishing(rndGeneratorWork);
        event.rndWork = workFinishing.rndWork.toFixed(2)
        event.work = workFinishing.work.toString()
        event.rndFinishing = workFinishing.rndFinishing.toFixed(2)
        event.finishing = workFinishing.finishing.toFixed(2)
        event.finishingTime = (+event.finishing + event.clock).toFixed(2);
      }
    }
    this.arrivingEvents.push(...this.tempObjectsColumns);
    this.colspan = this.tempObjectsColumns.length * 3;
  }

  getWorkFinishing(rndGeneratorWork: Random) {
    const workFinishing = new WorkFinishing(rndGeneratorWork);
    return workFinishing;
  }

  getTemporalObjectInstance(index: number) {
    // for of with index
    let temporalObectsArray = []
    for (const column of this.tempObjectsColumnsTemplate) {
      temporalObectsArray.push(`${column} ${index + 1}`)
    }
    return temporalObectsArray;
  }
  // get next event
  getNextEvent() {
    // find the event with the lowest nextArriving in the eventsToBeProcessed array
    const nextEvent = this.eventsToBeProcessed.reduce((prev: any, curr: any) => {
      return prev.nextArriving < curr.nextArriving ? prev : curr;
    });
    // remove the event from the eventsToBeProcessed array
    this.eventsToBeProcessed = this.eventsToBeProcessed.filter((event: any) => {
      return event !== nextEvent;
    });
    return nextEvent;
  }
}
