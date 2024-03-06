import { Injectable } from '@angular/core';
import { Ipassenger } from '../model/Ipassenger';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  passengerarr : Ipassenger[] = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null,
    },
    {
      id: 2,
      fullname: 'jen',
      checkedIn: false,
      checkInDate: null,
      children: null,
    },
    {
      id: 3,
      fullname: 'james',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null,
    },
    {
      id: 4,
      fullname: 'jhon',
      checkedIn: false,
      checkInDate: null,
      children: [
        {
          fname : 'david',
          lname : "doe"
        }
      ],
    },
  ]

  fetchdata(){
    return this.passengerarr;
  }

  onDelete(id : number){
    let getindex = this.passengerarr.findIndex(ele => ele.id === id);
    this.passengerarr.splice(getindex, 1)
    
  }


  constructor() { }
}
