import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Campaign } from '../campaign';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-update-campaign',
  templateUrl: './update-campaign.component.html',
  styleUrls: ['./update-campaign.component.css']
})
export class UpdateCampaignComponent implements OnInit {

  campaign:Campaign=new Campaign();
  id:number;
  constructor(private campaignService:CampaignService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];  
    this.campaignService.getCampaignById(this.id)
    .subscribe(data=>{
      console.log(data);
      this.campaign=data;
    },
    error=>console.log(error));
  }

  updateCampaign(){
    this.campaignService.updateCampaign(this.id,this.campaign)
    .subscribe(data=>{
      console.log(data);
      this.campaign=new Campaign();
      this.goToCampaignList();
    },
    error=>console.log(error)
    
    )
  }

  onSubmit(){
    this.updateCampaign();
    this.goToCampaignList();
  }

  goToCampaignList(){
    this.router.navigate(['/campaignes']);
  }
}
