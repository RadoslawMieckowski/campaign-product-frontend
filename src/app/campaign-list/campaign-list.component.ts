import { Component, OnInit } from '@angular/core';
import { Campaign } from '../campaign';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {

  campaignes:Campaign[];
  constructor() { }

  ngOnInit(): void {
    this.campaignes=[
      {
        id:1,
        name:"name1",
        keywords:'keywords',
        bidAmount:10,
        fund:100,
        status:true,
        town:'town1',
        radius:10
      }
    ]
  }

}
