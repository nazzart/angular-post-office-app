import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostOfficeService {

  constructor(
    private http: HttpClient,
    @Inject('BASE_API_URL') private baseUrl: string
  ) { }

  /**
   * Makes request to the server to add / edit an office
   */
  addOrEditOfiice(officeFormData) {
    return this.http
      .post(
        `${this.baseUrl}/post-office/add`,
        officeFormData,
        {responseType: 'text'}
      );
  }
}
