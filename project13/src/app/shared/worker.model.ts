export interface MyWorker {
  name: string;
  surname: string;
  type: number;
  phone: string;
  id?: number;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager
}

export let MyWorkerDatabase: MyWorker[] = [
  {id: 1, name: 'Mike', surname: 'Sur', phone: '+8 (800) 555-3555', type: 0},
  {id: 2, name: 'Name', surname: 'SurName', phone: '+8 (800) 555-3555', type: 1},
  {id: 3, name: 'Name', surname: 'SurName', phone: '+8 (800) 555-3555', type: 2},
  {id: 4, name: 'Name', surname: 'SurName', phone: '+8 (800) 555-3555', type: 3},
]
