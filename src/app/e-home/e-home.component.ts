import { Component, OnInit } from '@angular/core';
import { ReferralService } from '../referral.service';
@Component({
  selector: 'app-e-home',
  templateUrl: './e-home.component.html',
  styleUrls: ['./e-home.component.css']
})
export class EHomeComponent implements OnInit {
  referrals:any;
  constructor(private data:ReferralService) {
        this.data.referrals().subscribe((data)=>{
          this.referrals = data;
        })
   }
  ngOnInit(): void {
  }

}
