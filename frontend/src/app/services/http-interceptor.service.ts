import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

/**
 * Class which is responsible for error handling.
 * Shows a toast message based on the returned response from the server
 */
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(public toasterService: ToastrService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          if (evt.body && evt.body.success) {
            this.toasterService.success(evt.body.success.message, evt.body.success.title, {positionClass: 'toast-top-right'});
          }
        }
      }),
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          try {
            this.toasterService.error(err.error.message, err.error.title, { positionClass: 'toast-top-right' });
          } catch (e) {
            this.toasterService.error('An error occurred', '', { positionClass: 'toast-top-right' });
          }
          // log error
        }
        return of(err);
      }));
  }
}
