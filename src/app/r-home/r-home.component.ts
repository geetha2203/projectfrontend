import { Component, OnInit } from '@angular/core';
import { ReferralService } from '../referral.service';
@Component({
  selector: 'app-r-home',
  templateUrl: './r-home.component.html',
  styleUrls: ['./r-home.component.css']
})
export class RHomeComponent implements OnInit {
  referrals:any;
  constructor(private data:ReferralService) {
    this.data.referrals().subscribe((data)=>{
      this.referrals = data;
    })
}
public downloadFile(id:number):void{
  console.log(id);
  this.data.downloadFile(id)
  .subscribe(response =>
    {
      console.log(response);
     // const formData = new FormData();

      let filename = response.headers.get('content-disposition')
      ?.split(';')[1].split('=')[1];
      let blob:Blob=response.body as Blob;
      let a = document.createElement('a');
      a.download=filename as string;
      a.href = window.URL.createObjectURL(blob);
      a.click();
    })
}
public updateStage(id:number):void{
  this.data.updateStage(id).subscribe((data)=>{
   console.log(id);
  })
}
public onReject(id:number):void{
  console.log(id);
this.data.onReject(id).subscribe((data)=>{
})
}


  ngOnInit(): void {
  }

}
