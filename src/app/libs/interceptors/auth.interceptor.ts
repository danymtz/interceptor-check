import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

import StorageHelper from '../helpers/storage.helper';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private apiService: ApiService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //console.log(request);
    if (request.url.includes("/mirror/")){
      console.log(StorageHelper.getItem('session'));
      let originalRequest = request;
      request = request.clone({
          setHeaders: {
            Authorization: 'Bearer '+StorageHelper.getItem('session').token
          }
        })
        return next.handle(request)
      }
    return next.handle(request)
  }
}
