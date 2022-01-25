import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Campaign } from '../campaign';
import { CampaignService } from '../campaign.service';


@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {
campaign:Campaign=new Campaign();
  
constructor(private campaignService:CampaignService, private router:Router) { }

  ngOnInit(): void {
  }

  saveCampaign(){
    this.campaignService.createCampaign(this.campaign)
    .subscribe(data=>{
      console.log(data);
      this.goToCampaignesList();
    },
      error=>console.log(error)); 
    }
  
  goToCampaignesList(){
    this.router.navigate(['/campaignes']);
  }

  onSubmit(){
    console.log(this.campaign);
    this.saveCampaign();
  }
}
