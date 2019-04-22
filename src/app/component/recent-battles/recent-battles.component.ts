import { Component, OnInit } from '@angular/core';
import { BattlesService } from '../../services/battles.service';

@Component({
  selector: 'app-recent-battles',
  templateUrl: './recent-battles.component.html',
  styleUrls: ['./recent-battles.component.css']
})
export class RecentBattlesComponent implements OnInit {

  globalBattles: any;
  userBattles: any;

  constructor(private _battlesService: BattlesService) { }

  ngOnInit() {
    this._battlesService.recentBattles().subscribe((val: any) => {
      this.globalBattles = val;
      console.log( this.globalBattles );
      console.log('worked');
    });

    this._battlesService.recentUserBattles().subscribe((val: any) => {
      this.userBattles = val;
      console.log( this.userBattles );
      console.log('worked');
    });
  }

}
