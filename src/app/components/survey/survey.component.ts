import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})

export class SurveyComponent implements OnInit {
  
  surveyControl! : FormGroup;
  emailRegEx: RegExp  = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  constructor(private renderer: Renderer2,
              private surveyService: SurveyService,
              private _snackBar: MatSnackBar,
              private _router : Router) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '#5254BD')
    this.renderer.setStyle(document.querySelector('.center'), 'background-color', '#5254BD')
    this.createFormGroup();
    console.log(this.surveyControl);
    
  }

  stylesOfMusic = [
    {value: 'ROCK'},
    {value: 'JAZZ'},
    {value: 'POP'},
    {value: 'CLASICA'},
  ];


  createFormGroup(){
    return this.surveyControl = new FormGroup({
      choice: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegEx)])
    })
  }

  saveData(){
    console.log(this.surveyControl);
    console.log(this.surveyControl.value);
    
    this.surveyService.saveSurvey(this.surveyControl.value).then(() =>{
      this._snackBar.open('Tu voto se ha ingrasado con éxito',
      'Aceptar', { duration: 3000,  panelClass: ['white-text'] })
     this._router.navigate(['/home']);
      
    }).catch(err =>{

      if(err.status === 409){
         Swal.fire({
          icon: 'error',
          title: 'Lo sentimos',
          html: 'El email <b> "' + this.surveyControl.get('email')?.value + '" </b> ya ha realizado un voto',
          showCloseButton: true,
          confirmButtonColor: '#5254BD',
          heightAuto: false,
        })
        
      }
      return console.log(err);
      
    })
  }
}
