import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-passengercount',
  templateUrl: './passengercount.component.html',
  styleUrls: ['./passengercount.component.scss']
})
export class PassengercountComponent implements OnInit {

  constructor() { }
  @Input() totalpass !: number;
  @Input() chkdin !: number;
  ngOnInit(): void {
  }

}
