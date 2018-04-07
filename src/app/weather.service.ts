import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private _http: HttpClient) { }

  dailyForecast() {
    return this._http.get("http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/tas/1980/1999/ind.json").map(result=>result)
  }
}
