import {Injectable} from '@angular/core'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipService{
  reset=new BehaviorSubject<number>(0);

}
