import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-offices',
  templateUrl: './post-offices.component.html',
  styleUrls: ['./post-offices.component.scss']
})
export class PostOfficesComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * Regirect to the edit/add form
   */
  addOffice(): void {
    this.router.navigate(['post-offices/add']);
  }

}
