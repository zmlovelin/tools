/**
 * @author gyjlovelh
 * @createTime 2017/10/8
 */
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  constructor(private $router: Router) {
  }

  /**
   * 拦截器  给请求设置 authorization 的头
   * @param {HttpRequest<any>} req
   * @param {HttpHandler} next
   * @description
   * @returns {Observable<HttpEvent<any>>}
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 拦截请求
    let token = 'e996534b58ee885e98d72212e6dd38f3';
    let authReq = null;
    if (token) {
      authReq = req.clone({setHeaders: {Authorization: token}});
    }
    if (req.url === '/business/topology/static/export') {
      authReq = authReq.clone({setHeaders: {'Content-Type': 'form-data'}});
    }
    return next.handle(authReq || req).pipe(event => {
      // console.log(event)
      // 拦截响应
      return event;
    });
  }
}
