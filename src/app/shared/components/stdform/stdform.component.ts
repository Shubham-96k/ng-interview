import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from '../../model/Istd';

@Component({
  selector: 'app-stdform',
  templateUrl: './stdform.component.html',
  styleUrls: ['./stdform.component.scss']
})
export class StdformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() emitter : EventEmitter<Istd> = new EventEmitter<Istd>()

  onAddstd(eve: NgForm){
    let stdobj : Istd = eve.value;
    this.emitter.emit(stdobj);
    eve.reset();
  }

}
