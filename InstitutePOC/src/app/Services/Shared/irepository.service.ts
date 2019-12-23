import { Observable } from 'rxjs';

export interface IRepositoryService<T> {
  GetAll():Observable<T[]>;
  Get(id: Number):Observable<T>;
  Add(item: T):void;
  Delete(id: Number):void;
  Update(item: T): void;
}
