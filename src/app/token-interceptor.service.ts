import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector){}
  intercept(req, next) {
    let authService = this.injector.get(AuthService)
    //console.log('URL',req.url, req.url.includes('www.googleapis.com'));

    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'Bearer ' + authService.getToken())
      }
    )

    if (req.url.includes('www.googleapis.com')) {
      return next.handle(req)
    } else {
      return next.handle(tokenizedReq)
    }
    
  }

}
