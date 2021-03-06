import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { FormsModule } from '@angular/forms';
import { UpdateCampaignComponent } from './update-campaign/update-campaign.component';
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CampaignListComponent,
    CreateCampaignComponent,
    UpdateCampaignComponent,
    CampaignDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
