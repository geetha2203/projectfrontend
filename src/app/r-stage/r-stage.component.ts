import { Component, OnInit } from '@angular/core';
import { ReferralService } from '../referral.service';
@Component({
  selector: 'app-r-stage',
  templateUrl: './r-stage.component.html',
  styleUrls: ['./r-stage.component.css']
})
export class RStageComponent implements OnInit {
  referrals:any;
  constructor(private data:ReferralService) {
        this.data.referrals().subscribe((data)=>{
          this.referrals = data;
        })
   }
  ngOnInit(): void {
  }

  public onOpenModal(mode: string): void {
    const container = document.getElementById('mycontainer');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'stage') {
      button.setAttribute('data-target', '#stageModal');
    }
    container!.appendChild(button);
    button.click();
  }

}
