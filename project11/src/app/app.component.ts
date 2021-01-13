import {Component} from '@angular/core';
import {MyDet} from './shared/models/det.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project11';

  dets: MyDet[] = [];

  inputId: number;
  inputName: string;

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.dets.push(new MyDet(i, 'Датчик ' + i));
    }
  }

  deleteDet(id: number) {
    const elem = this.dets.find(det => det.id === id);
    const elId: number = this.dets.indexOf(elem);

    this.dets.splice(elId, 1);
  }

  addDet() {
    this.dets.push(new MyDet(this.inputId, this.inputName));
    this.inputId = undefined;
    this.inputName = '';
  }

}
