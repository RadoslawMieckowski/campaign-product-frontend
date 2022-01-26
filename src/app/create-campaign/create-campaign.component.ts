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
    if(this.campaign.name==''||this.campaign.keywords==''||this.campaign.bidAmount==undefined||
    this.campaign.fund==undefined||this.campaign.town==''||this.campaign.radius==undefined){
      alert("name, keywords, bid amount, fund, town, radius must be specified!")
    }else{
      console.log(this.campaign);
      this.saveCampaign();
    }
  }
  
}
