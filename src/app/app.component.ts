import { Component } from '@angular/core';
import { Istd } from './shared/model/Istd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myproject';
  stdarr : Istd[] = []

  ongetstd(eve: Istd){

    if(!Object.values(eve).includes(" ")){
      this.stdarr.push(eve);
    }
  }
  

}
