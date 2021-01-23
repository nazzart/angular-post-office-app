import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostOfficeService } from './post-office.service';
import { Subject } from 'rxjs';
import PostOffice from './post-office.interface';

@Component({
  selector: 'app-post-offices',
  templateUrl: './post-offices.component.html',
  styleUrls: ['./post-offices.component.scss']
})
export class PostOfficesComponent implements OnInit {

  /**
   * Notifies that there is a list of post offices
   */
  private postOffices = new Subject<PostOffice[]>();

  /**
   * Public observable which holds the post offices
   */
  readonly postOffices$ = this.postOffices.asObservable();

  constructor(
    private router: Router,
    private postOfficeService: PostOfficeService
  ) { }

  ngOnInit(): void {
    this.getOfficeList();
  }

  /**
   * Regirect to the edit/add form
   */
  addOffice(): void {
    this.router.navigate(['post-offices/add']);
  }

  /**
   * Get list of offices
   */
  getOfficeList() {
    this.postOfficeService.getOffices().subscribe((offices: PostOffice[]) => this.postOffices.next(offices));
  }

  /**
   * Navigate to the edit form
   */
  editOffice(id: string): void {
    this.router.navigate([`post-offices/edit/${id}`]);
  }

  /**
   * Delete the office
   */
  deleteOffice(id: string): void {
    this.postOfficeService.deleteOffice(id).subscribe(() => this.getOfficeList());
  }

}
