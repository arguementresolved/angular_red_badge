import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-battle-page',
  templateUrl: './battle-page.component.html',
  styleUrls: ['./battle-page.component.css'],
},
)
export class BattlePageComponent implements OnInit {

  private _fighters: FormGroup;

  constructor(private _form: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this._fighters = this._form.group({
      fighter1: new FormControl,
      fighter2: new FormControl
    });
  }

  onSubmit() {
    console.log(this._fighters.value);
  }
}
