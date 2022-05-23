import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Referral } from './Referral';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferralService {
  baseURL:string="http://localhost:8080/api/v1/referral/files";
  baseURL1:String="http://localhost:8080/api/v1/referral/updateapproval";
  baseURL2:String="http://localhost:8080/api/v1/referral/delete";
  baseURL3:String="http://localhost:8080/api/v1/referral/upload"
  constructor(private http:HttpClient) {
    
   }
  referrals(){ return this.http.get("http://localhost:8080/api/v1/referral/getAll");
   
  }
  leaderboard(){ return this.http.get("http://localhost:8080/api/v1/referral/getTopReferrers");
  }
  public downloadFile(id:number){
    return this.http.get(`${this.baseURL}/${id}`,{observe:'response',responseType:'blob'});
  }
  updateStage(id:number){
    return this.http.put(`${this.baseURL1}/${id}`,{observe:'response',responseType:'blob'});
    }
  onReject(id:number){
    return this.http.delete(`${this.baseURL2}/${id}`,{observe:'response',responseType:'blob'});
  }
  public addRefer(job : Referral): Observable<Referral>{
    return this.http.post<Referral>(`${this.baseURL3}/job/add`, job);
  }
     
}

