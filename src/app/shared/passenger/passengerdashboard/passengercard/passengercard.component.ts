import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Ipassenger } from 'src/app/shared/model/Ipassenger';
import { PassengerService } from 'src/app/shared/service/passenger.service';

@Component({
  selector: 'app-passengercard',
  templateUrl: './passengercard.component.html',
  styleUrls: ['./passengercard.component.scss']
})
export class PassengercardComponent implements OnInit {

  constructor(private _passvc : PassengerService) { }
  @Input() sendpass !: Ipassenger;

  inputele : boolean = true;
  ngOnInit(): void {
  }

  @ViewChild('inputvalue') value !: ElementRef;



  onEdit(){
    this.inputele = !this.inputele
  }

  onUpdate(){
   
    this.sendpass.fullname = this.value.nativeElement.value;
    this.inputele = !this.inputele
    
  }

  onDelete(){
    this._passvc.onDelete(this.sendpass.id)
  }

}
