import { Component, DoCheck, OnInit } from '@angular/core';
import { PassengerService } from '../../service/passenger.service';
import { Ipassenger } from '../../model/Ipassenger';

@Component({
  selector: 'app-passengerdashboard',
  templateUrl: './passengerdashboard.component.html',
  styleUrls: ['./passengerdashboard.component.scss']
})
export class PassengerdashboardComponent implements DoCheck {

  constructor(private _passarr : PassengerService) {

   }
   passengers !: Ipassenger[];

   count !: number;
  ngDoCheck(): void {
    this.passengers = this._passarr.fetchdata()
    this.count = this.passengers.filter(ele => ele.checkedIn).length
    
  }


      

}
