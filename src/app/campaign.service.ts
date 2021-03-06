import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campaign } from './campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

private baseURL="http://localhost:8080/api/v1/campaignes";

  constructor(private httpClient:HttpClient) { }

  getCampaignesList():Observable<Campaign[]>{
    return this.httpClient.get<Campaign[]>(`${this.baseURL}`);
  }
  
  getCampaignById(id:number):Observable<Campaign>{
    return this.httpClient.get<Campaign>(`${this.baseURL}/${id}`);
  }
  
  createCampaign(campaign:Campaign):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,campaign);
  }

  updateCampaign(id: number, campaign: Campaign): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, campaign);
  }

  deleteCampaign(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
}
