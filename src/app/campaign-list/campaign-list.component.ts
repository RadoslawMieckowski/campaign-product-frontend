import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Campaign } from '../campaign';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {

  campaignes:Campaign[];
  constructor(private campaignService:CampaignService, private router:Router) { }

  ngOnInit(): void {
   this.getCampaignes();
    
  }
  
  private getCampaignes(){
    this.campaignService.getCampaignesList().subscribe(data=>{
      this.campaignes=data;
      console.log(this.campaignes);
    })
  }
  updateCampaign(id:number){
    this.router.navigate(['update-campaign',id]);
  }

}
