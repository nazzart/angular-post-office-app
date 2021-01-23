import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import PostOffice from './post-office.interface';
import { Observable } from 'rxjs';

@Injectable()
export class PostOfficeService {

  constructor(
    private http: HttpClient,
    @Inject('BASE_API_URL') private baseUrl: string
  ) { }

  /**
   * Makes request to the server to add an office
   */
  createOffice(officeFormData: PostOffice) {
    return this.http.post(`${this.baseUrl}/post-office/add`, officeFormData);
  }

  /**
   * Makes request to the server to update an office
   */
  updateOffice(officeFormData: PostOffice) {
    return this.http.post(`${this.baseUrl}/post-office/update`, officeFormData);
  }

  /**
   * Makes request to the server to delete an office
   */
  deleteOffice(id: string): Observable<PostOffice[]> {
    return this.http.post<PostOffice[]>(`${this.baseUrl}/post-office/delete`, {id});
  }

  /**
   * Get list of all offices from the server
   */
  getOffices(): Observable<PostOffice[]>{
    return this.http.get<PostOffice[]>(`${this.baseUrl}/post-office/list`);
  }

  /**
   * Get office details by ID
   */
  getOfficeById(id: string): Observable<PostOffice>{
    return this.http.get<PostOffice>(`${this.baseUrl}/post-office/${id}`);
  }
}
