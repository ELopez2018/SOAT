import { Component, OnInit } from '@angular/core';

import { appConstants } from 'src/app/core/constants';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DatosVehiculosForm } from './datos-vehiculo.form';

@Component({
  selector: 'app-datos-vehiculo',
  templateUrl: './datos-vehiculo.component.html',
  styleUrls: ['./datos-vehiculo.component.css']
})
export class DatosVehiculoComponent implements OnInit {
  datosVehiculosForm: FormGroup;
  btnSave = appConstants.BUTTON_SAVE;
  btnDelete = appConstants.BUTTON_DELETE;
  btnCancel = appConstants.BUTTON_CANCEL;
  public tabIndex: number;
  constructor(
    private fb: FormBuilder
  ) {
    this.datosVehiculosForm = DatosVehiculosForm;
  }

  ngOnInit(): void {

  }


}
