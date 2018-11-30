import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import * as Plotly from 'plotly.js/dist/plotly.js';
//import {Config, Data, Layout} from 'plotly.js/dist/plotly.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  items$: Observable<any[]>;

  constructor(db: AngularFireDatabase){

    this.items$ = db.list('questions').valueChanges();

    this.items$.subscribe(items => {

      let questions = [];
      let rights = [];
      let wrongs = [];
      let index = 1;
        
      items.map(item => {
        // let itemRights = item.rights != undefined ? item.rights : 0;
        // let itemWrongs = item.wrongs != undefined ? item.wrongs : 0;

        let itemRights = item.rights;
        let itemWrongs = item.wrongs;

        questions.push("pregunta-" + index + " ");
        rights.push(itemRights);
        wrongs.push(itemWrongs);
        
        index++;
      })

      let trace1 = {
        y: questions,
        x: rights,
        name: 'Aciertos',
        type: 'bar',
        orientation: 'h',
        marker: {color: 'rgb(23, 181, 246)'}
      };
      
      let trace2 = {
        y: questions,
        x: wrongs,
        name: 'Errores',
        type: 'bar',
        orientation: 'h',
        marker: {color: 'orange'}
      };
      
      let data = [trace1, trace2];        
      let layout = {title: 'Cantidad de aciertos y errores por pregunta', barmode: 'stack', xaxis: {title: 'Aciertos - Errores'}};
  
      Plotly.newPlot('chart', data, layout, {responsive: true});
    }); 

  }
}
