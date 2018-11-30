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
        let itemRights = item.rights != undefined ? item.rights : 0;
        let itemWrongs = item.wrongs != undefined ? item.wrongs : 0;

        questions.push("pregunta-" + index);
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
        marker: {color: 'blue'}
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
      
      console.log(data);
  
      let layout = {title: 'Cantidad de aciertos y errores por pregunta', barmode: 'stack', xaxis: {title: 'Aciertos - Errores'}};
  
      Plotly.newPlot('chart', data, layout, {responsive: true});
    });

  }


  /*

  ngOnInit() {

    // let trace1 = {
    //   x: [20, 14, 23],
    //   y: ['giraffes', 'orangutans', 'monkeys'],
    //   name: 'SF Zoo',
    //   type: 'bar',
    //   orientation: 'h',
    //   marker: {color: 'magenta'}
    // };
    
    // let trace2 = {
    //   x: [12, 18, 29],
    //   y: ['giraffes', 'orangutans', 'monkeys'],
    //   name: 'LA Zoo',
    //   type: 'bar',
    //   orientation: 'h',
    //   marker: {color: 'blue'}
    // };
    // var data = [trace1, trace2];
 

    


    
    this.items$.subscribe(items => {

      let questions = [];
      let rights = [];
      let wrongs = [];
      let index = 0;
        
      items.map(item => {
        let itemRights = item.rights != undefined ? item.rights : 0;
        let itemWrongs = item.wrongs != undefined ? item.wrongs : 0;

        questions.push("pregunta-" + index);
        rights.push(itemRights);
        wrongs.push(itemWrongs);
        
        index++;
      })

      let trace1 = {
        y: questions,
        x: rights,
        name: 'Rights',
        type: 'bar',
        orientation: 'h',
        marker: {color: 'magenta'}
      };
      
      let trace2 = {
        y: questions,
        x: wrongs,
        name: 'Wrongs',
        type: 'bar',
        orientation: 'h',
        marker: {color: 'blue'}
      };
      
      let data = [trace1, trace2];
      
      console.log(data);
  
      let layout = {barmode: 'stack'};
  
      Plotly.newPlot('chart', data, layout);
    });

  } */ 

}
