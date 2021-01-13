import {Component, OnInit} from '@angular/core';
import {MyWorker, MyWorkerType} from "./shared/worker.model";
import {MyFirstServise} from "./shared/services/my-first.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ // срабатывает при каждой инициализации
  title = 'Project14';
  workers: MyWorker[];
  myWorkerType = MyWorkerType;

  constructor(private MyFirstServise: MyFirstServise) { }

  ngOnInit() {
    this.getData();
  }

  async getData(){
    try {
      this.workers = await this.MyFirstServise.mySuperFunction();
    } catch (e){
      console.log(e)
    }
  }

  getByType(type: number) {
    return this.workers.filter(worker => worker.type === type);
  }

  async onDeleteWorker(id: number){
    try {
      await this.MyFirstServise.deleteWorker(id)
    } catch (e) {
      console.error(e)
    } finally {
      await this.getData()
    }
  }

  async onAddWorker(worker: MyWorker){
    const id = this.workers.length > 0
    ? this.workers[this.workers.length - 1].id + 1
      : 0
    worker.id = id;
    // this.workers.push(worker);

    try {
      await this.MyFirstServise.postWorker(worker)
    } catch (e) {
      console.error(e);
    } finally {
      await this.getData()
    }
  }

  async onEditWorker(editingWorker){
    try {
      await this.MyFirstServise.putWorker(editingWorker)
    } catch (e){
      console.error(e)
    } finally {
      await this.getData()
    }
  }
}
