import { Component, OnInit, Renderer2 } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { SurveyService } from 'src/app/services/survey.service';
Chart.register(...registerables)

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private _surveyService: SurveyService,
              private renderer: Renderer2,) { }
 
  stylesOfMusic = [
    {value: 'ROCK'},
    {value: 'JAZZ'},
    {value: 'POP'},
    {value: 'CLASICA'},
  ];

 surveys  : any[]= []
 rockList : any[]= []
 jazzList : any[]= []
 popList : any[]= []
 clasicaList : any[]= []

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '#d9f16b26');
    this.renderer.setStyle(document.querySelector('.center'), 'background-color', '#d9f16b26')

    this._surveyService.getAll().then(response =>{

      (this.surveys as any) = response
      console.log('this.surveys', this.surveys);
      const  array: Array<any> = this.surveys;
      
      array.forEach(element => {
        console.log('element', element);
        
        if(element.choice === 'ROCK'){
          this.rockList.push(element.choice);
        }else if(element.choice === 'JAZZ'){
          this.jazzList.push(element.choice);
        }else if(element.choice === 'POP'){
          this.popList.push(element.choice);
        }else if(element.choice === 'CLASICA'){
          this.clasicaList.push(element.choice);
        }
      });
      console.log('this.rockList', this.rockList);
      console.log('this.jazzList', this.jazzList);
      console.log('this.popList', this.popList);
      console.log('this.clasicaList', this.clasicaList);
      
    }).catch(err =>{
      console.log(err);
      
    }).finally(()=> {
      const myChart = new Chart("myChart", {
  
        type: 'bar',
        data: {
            labels: [this.stylesOfMusic[0].value, this.stylesOfMusic[1].value, this.stylesOfMusic[2].value, this.stylesOfMusic[3].value],
            datasets: [{
                label: '# of Votes',
                data: [this.rockList.length, this.jazzList.length, this.popList.length, this.clasicaList.length],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
    
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    })

  console.log(this.rockList.length);
    

  }

}
