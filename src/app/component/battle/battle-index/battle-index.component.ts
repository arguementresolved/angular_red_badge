import { Component, OnInit } from '@angular/core';
import { BattlesService } from '../../../services/battles.service';
import { Battle } from '../../../models/battles';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-battle-index',
  templateUrl: './battle-index.component.html',
  styleUrls: ['./battle-index.component.css']
})
export class BattleIndexComponent implements OnInit {

  calc: any;

  constructor(private _batttleService: BattlesService) { }

  ngOnInit() {}
  }

