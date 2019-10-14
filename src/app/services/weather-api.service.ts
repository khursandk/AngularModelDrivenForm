import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private finaldata = [];
  private apiurl = "http://api.openweathermap.org/data/2.5/weather?appid=your_api_key&units=metric&q=";
  
  constructor(private http: HttpClient) { }

  getData(input:any) {
    return this.http.get(this.apiurl+input); // api to get datat by city name
  }

}
