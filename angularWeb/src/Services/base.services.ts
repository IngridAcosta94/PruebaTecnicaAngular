import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable, of, mergeMap, interval, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T> {

  url = 'https://localhost:7020/api';
  abstract path: string;
  abstract pathSetings: string;
  abstract pathSetingName: string;
  abstract setingsStatus: String;
  constructor(public http: HttpClient) { }



}
