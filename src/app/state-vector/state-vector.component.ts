import { Component } from '@angular/core';

@Component({
  selector: 'app-state-vector',
  templateUrl: './state-vector.component.html',
  styleUrls: ['./state-vector.component.css']
})
export class StateVectorComponent {
  // mock dataSource, each element with eventName, clock, secuencial numbers
  dataSource = [
    { eventName: 'A', clock: 1, arrivingDevices: 1 },
    { eventName: 'B', clock: 2, arrivingDevices: 2 },
    { eventName: 'C', clock: 3, arrivingDevices: 3 },
  ]

  // displayedColumns is used to display the columns in the table
  displayedColumns = ['eventName', 'clock', 'arrivingDevices'];
  arrivingEvents = ['rnd', 'nextArriving', 'arrivingTime'];
  mergedColumns = ['eventName', 'clock', 'rnd', 'nextArriving', 'arrivingTime']
  finishing = ['rndWork', 'work', 'rndFinishing', 'finishing', 'finishingTime']
}
