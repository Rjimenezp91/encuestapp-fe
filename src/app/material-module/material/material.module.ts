import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    MatSidenavModule
    
  ],
  exports:[
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    MatSidenavModule
    
  ]
})
export class MaterialModule { }
