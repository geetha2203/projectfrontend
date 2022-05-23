import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { JobService } from '../job.service';
import { NgForm } from '@angular/forms';
import { ReferralService } from '../referral.service';
import { Referral } from '../Referral';
@Component({
  selector: 'app-e-jobposting',
  templateUrl: './e-jobposting.component.html',
  styleUrls: ['./e-jobposting.component.css']
})
export class EJobpostingComponent implements OnInit {

  [x: string]: any;

  public jobs: Job[] = [];

  constructor(private jobService : JobService,private data:ReferralService ) { }

  ngOnInit(){
    this.getJobs();
  }

  public getJobs(): void{
    this.jobService.getJobs().subscribe(
      (response: Job[]) => {
        this.jobs = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onRefer(referForm: NgForm): void {
    document.getElementById('add-product-form')!.click();
    this.data.addRefer(referForm.value).subscribe(
      (response: Referral) => {
        console.log(response);
        this.getJobs();
        referForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        referForm.reset();
      }
    );
  }
  public onOpenModal(mode: string): void {
    const container = document.getElementById('mycontainer');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'refer') {
      button.setAttribute('data-target', '#referModal');
    }
    container!.appendChild(button);
    button.click();
  }

}
