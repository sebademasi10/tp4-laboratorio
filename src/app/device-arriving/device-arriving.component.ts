import { Component } from '@angular/core';

@Component({
  selector: 'app-device-arriving',
  templateUrl: './device-arriving.component.html',
  styleUrls: ['./device-arriving.component.css']
})
export class DeviceArrivingComponent {
  // mock data source, each with rnd, nextArriving and arrivingTime
  dataSource = [
    { rnd: 1, nextArriving: 1, arrivingTime: 1 },
    { rnd: 2, nextArriving: 2, arrivingTime: 2 },
    { rnd: 3, nextArriving: 3, arrivingTime: 3 },
  ]

  // displayedColumns is used to display the columns in the table
  displayedColumns = ['rnd', 'nextArriving', 'arrivingTime'];
}
