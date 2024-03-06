import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../model/Istd';

@Component({
  selector: 'app-stdtable',
  templateUrl: './stdtable.component.html',
  styleUrls: ['./stdtable.component.scss']
})
export class StdtableComponent implements OnInit {
  @Input() sendarr !: Array<Istd>;
  constructor() { }

  ngOnInit(): void {
  }
}
