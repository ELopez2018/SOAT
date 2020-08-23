import { Component, OnInit } from '@angular/core';
import { appConstants } from 'src/app/core/constants/index';


@Component({
  selector: 'app-consultar-placa',
  templateUrl: './consultar-placa.component.html',
  styleUrls: ['./consultar-placa.component.css']
})
export class ConsultarPlacaComponent implements OnInit {
  btnSave = appConstants.BUTTON_SAVE;
  btnDelete = appConstants.BUTTON_DELETE;
  btnCancel = appConstants.BUTTON_CANCEL;
  constructor() { }

  ngOnInit(): void {
  }

}
