import { Component, OnInit } from '@angular/core';
import { PostOfficeService } from '../post-offices/post-office.service';
import PostOffice from '../post-offices/post-office.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  /**
   *  Count of all offices
   */
  totalOffices = 0;

  /**
   *  Count of all shipments
   */
  totalShipments = 0;

  constructor(private postOfficeService: PostOfficeService) { }

  ngOnInit(): void {
    // Get office count
    this.postOfficeService.getOffices().subscribe((offices: PostOffice[]) => this.totalOffices = offices.length);
  }
}
