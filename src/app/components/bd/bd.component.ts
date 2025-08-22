import { Component } from '@angular/core';

@Component({
  selector: 'app-bd',
  standalone: false,
  templateUrl: './bd.component.html',
  styleUrl: './bd.component.css'
})
export class BDComponent {
  mostrarModalSql: boolean = false;
  mostrarModalMongo: boolean = false;

  mostrarImal: boolean = false;
  
}


