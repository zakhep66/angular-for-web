export interface MyWorker {
  name: string;
  surname: string;
  type: number;
  id?: number;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager
}

export let MyWorkerDatabase: MyWorker[] = [
  {id: 1, name: 'Mike', surname: 'Sur', type: 0},
  {id: 2, name: 'Name', surname: 'SerName', type: 1},
  {id: 3, name: 'Name', surname: 'SerName', type: 2},
  {id: 4, name: 'Name', surname: 'SerName', type: 3},
]
