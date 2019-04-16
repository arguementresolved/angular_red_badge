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
  columnNames = ['k', 'l'];
  dataSource: MatTableDataSource<Battle>;
  constructor(private _batttleService: BattlesService) { }

  ngOnInit() {
    this._batttleService.getBattles().subscribe((battles:Battle[]) => {
      this.dataSource = new MatTableDataSource<Battle>(battles);
    });
  }

}
