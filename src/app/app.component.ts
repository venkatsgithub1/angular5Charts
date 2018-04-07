import { Component } from '@angular/core';
import {WeatherService} from "./weather.service";
import {Chart} from "chart.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  chart = [];
  constructor(private _weather:WeatherService) {}

  getRandomColor() {
    return "rgba("+Math.floor(Math.random()*255)+","+
    Math.floor(Math.random()*255)+","+
    Math.floor(Math.random()*255)+",0.5)";
  }

  ngOnInit() {
    this._weather.dailyForecast().subscribe(res=>{
      let data = res[0];
      let monthlyValuesArr = [];
      for (var data2 of Object.keys(res)) {
        let obj1={'label':'Temperature',
                  'borderColor':this.getRandomColor(),
                 'backgroundColor':this.getRandomColor(),
                  'data':res[data2].monthVals
      };
        console.log(res[data2],"data2");
        
        monthlyValuesArr.push(obj1);
      }

      this.chart = new Chart('canvas', {
        type: 'line',
        data: 
        {
          labels: ['jan','feb','mar','apr','may',
            'jun','jul','aug','sep','oct','nov','dec'],
          datasets: monthlyValuesArr
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    })
  }
}
