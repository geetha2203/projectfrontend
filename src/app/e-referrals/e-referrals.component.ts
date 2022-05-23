import { Component, OnInit } from '@angular/core';
import { ReferralService } from '../referral.service';

@Component({
  selector: 'app-e-referrals',
  templateUrl: './e-referrals.component.html',
  styleUrls: ['./e-referrals.component.css']
})
export class EReferralsComponent implements OnInit {
  referrals:any;
  constructor(private data:ReferralService) {
        this.data.referrals().subscribe((data)=>{
          this.referrals = data;
        })
   }

  ngOnInit(): void {
  }

}
