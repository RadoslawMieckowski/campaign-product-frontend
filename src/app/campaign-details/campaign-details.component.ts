import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campaign } from '../campaign';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.css']
})
export class CampaignDetailsComponent implements OnInit {

  id:number;
  campaign:Campaign;

  constructor(private route:ActivatedRoute,
    private campaignService:CampaignService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    
    this.campaignService.getCampaignById(this.id)
    .subscribe(data=>{
      this.campaign=data;
    })
  }

}

