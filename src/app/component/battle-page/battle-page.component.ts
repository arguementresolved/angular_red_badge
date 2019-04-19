import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BattlesService } from '../../services/battles.service';

@Component({
  selector: 'app-battle-page',
  templateUrl: './battle-page.component.html',
  styleUrls: ['./battle-page.component.css'],
},
)
export class BattlePageComponent implements OnInit {

  private _fighters: FormGroup;

  calc: any;

  constructor(private _form: FormBuilder, private _battlesService: BattlesService) {
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
    this._battlesService.fight(this._fighters.value).subscribe((val: any) => {
      this.calc = val;
      console.log( this.calc );
    });
  }
}
