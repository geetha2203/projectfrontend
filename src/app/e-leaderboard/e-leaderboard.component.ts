import { Component, OnInit } from '@angular/core';
import { ReferralService } from '../referral.service';

@Component({
  selector: 'app-e-leaderboard',
  templateUrl: './e-leaderboard.component.html',
  styleUrls: ['./e-leaderboard.component.css']
})
export class ELeaderboardComponent implements OnInit {
  referrals:any;
  constructor(private data:ReferralService) {
        this.data.leaderboard().subscribe((data)=>{
          this.referrals = data;
        })
   }
  ngOnInit(): void {
  }

}
