import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherApiService } from './services/weather-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather Details';
  model: any = {};

  public WeatherData :any;
  public Status:boolean=false;
  constructor(private myservice: WeatherApiService){}

  onClickSubmit(data) {

    this.myservice.getData(this.model.CityName).subscribe((data) => {
      this.WeatherData = data;
      this.Status=true;
      console.log(this.WeatherData);
    },error =>
    {
      this.WeatherData = error;
      this.Status=false;
    });

    console.log(this.model); 
  }

}
