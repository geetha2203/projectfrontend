import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { JobService } from '../job.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-r-jobposting',
  templateUrl: './r-jobposting.component.html',
  styleUrls: ['./r-jobposting.component.css']
})
export class RJobpostingComponent implements OnInit {

  [x: string]: any;

  public jobs: Job[] = [];
  public editJob: Job | undefined ;
  public deleteJob: Job | undefined ;

  constructor(private jobService : JobService) { }

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

  public onAddJob(addForm: NgForm): void {
    document.getElementById('add-job-form')!.click();
    this.jobService.addJob(addForm.value).subscribe(
      (response: Job) => {
        console.log(response);
        this.getJobs();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateJob(job: Job): void {
    this.jobService.updateJob(job).subscribe(
      (response: Job) => {
        console.log(response);
        this.getJobs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteJob(jobId: number): void {
    this.jobService.deleteJob(jobId).subscribe(
      (response: void) => {
        console.log(response);
        this.getJobs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(mode: string, job?: Job): void {
    const container = document.getElementById('mycontainer');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addJobModal');
    }
    if (mode === 'edit') {
      this.editJob=job;
      button.setAttribute('data-target', '#updateJobModal');
    }
    if (mode === 'delete') {
      this.deleteJob=job;
      button.setAttribute('data-target', '#deleteJobModal');
    }
    container!.appendChild(button);
    button.click();
  }

}
